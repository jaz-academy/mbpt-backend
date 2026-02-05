import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  sendResult(email: string, pdf: Buffer) {
    return this.transporter.sendMail({
      to: email,
      subject: 'MBPT Result',
      text: 'Your MBPT result is attached.',
      attachments: [{ filename: 'result.pdf', content: pdf }],
    });
  }
}
