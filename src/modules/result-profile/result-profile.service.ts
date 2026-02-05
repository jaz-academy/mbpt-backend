import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResultProfileContent } from './result-profile-content.entity';
import { ResultProfile } from './result-profile.entity';

@Injectable()
export class ResultProfileService {
  private static readonly fuelOrder = [
    'vision',
    'meaning',
    'validation',
    'fear',
  ];

  constructor(
    @InjectRepository(ResultProfileContent)
    private contentRepo: Repository<ResultProfileContent>,
    @InjectRepository(ResultProfile)
    private profileRepo: Repository<ResultProfile>,
  ) {}

  async findOne(
    profileId: string,
    segment: string,
    locale?: string,
  ): Promise<ResultProfileContent & { label?: string }> {
    const resolvedLocale = locale ?? 'id';
    const normalizedProfileId = this.normalizeProfileId(profileId);
    const row = await this.contentRepo.findOneBy({
      profileId: normalizedProfileId,
      segment,
      locale: resolvedLocale,
    });

    if (!row) {
      throw new NotFoundException('Result profile not found');
    }

    const profile = await this.profileRepo.findOneBy({
      id: normalizedProfileId,
    });
    return {
      ...row,
      label: profile?.label,
    };
  }

  private normalizeProfileId(profileId: string): string {
    if (!profileId.includes('+')) return profileId;
    const parts = profileId.split('+').map((part) => part.trim());
    const unique = Array.from(new Set(parts));
    unique.sort(
      (a, b) =>
        ResultProfileService.fuelOrder.indexOf(a) -
        ResultProfileService.fuelOrder.indexOf(b),
    );
    return unique.join('+');
  }
}
