import { Injectable } from '@nestjs/common';
import { chromium } from 'playwright';

@Injectable()
export class PdfService {
  async generateResultPdf(
    resultId: string,
    options?: { locale?: string; segment?: string },
  ): Promise<Buffer> {
    const baseUrl = process.env.FRONTEND_URL ?? 'http://localhost:5173';
    const url = `${baseUrl}/result/${resultId}`;

    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage({
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 1,
    });

    await page.addInitScript(
      ({ locale, segment }) => {
        if (locale) localStorage.setItem('language', locale);
        if (segment) localStorage.setItem('audience', segment);
      },
      {
        locale: options?.locale ?? 'id',
        segment: options?.segment ?? 'adult',
      },
    );

    await page.goto(url, { waitUntil: 'networkidle' });
    await page.emulateMedia({ media: 'screen' });
    await page.waitForSelector('canvas', { timeout: 5000 }).catch(() => null);
    await page.waitForTimeout(800);

    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '12mm', bottom: '12mm', left: '12mm', right: '12mm' },
    });

    await page.close();
    await browser.close();

    return pdf;
  }
}
