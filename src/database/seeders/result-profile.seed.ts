import { AppDataSource } from '../data-source';
import { resultProfiles } from '../data/resultProfiles';
import type { ResultProfile as ResultProfileData } from '../data/resultProfiles';
import { resultProfilesEn } from '../data/resultProfiles.en';
import { ResultProfile } from '../../modules/result-profile/result-profile.entity';
import { ResultProfileContent } from '../../modules/result-profile/result-profile-content.entity';

export async function seedResultProfiles() {
  const profileRepo = AppDataSource.getRepository(ResultProfile);
  const contentRepo = AppDataSource.getRepository(ResultProfileContent);

  const profiles: ResultProfileData[] = resultProfiles;

  for (const profile of profiles) {
    await profileRepo.upsert(
      {
        id: profile.profile,
        label: profile.label,
        isActive: true,
      },
      ['id'],
    );

    await contentRepo.upsert(
      {
        profileId: profile.profile,
        segment: 'adult',
        locale: 'id',
        content: profile.adult,
      },
      ['profileId', 'segment', 'locale'],
    );

    await contentRepo.upsert(
      {
        profileId: profile.profile,
        segment: 'kids',
        locale: 'id',
        content: profile.kids,
      },
      ['profileId', 'segment', 'locale'],
    );
  }

  for (const profile of resultProfilesEn) {
    await profileRepo.upsert(
      {
        id: profile.profile,
        label: profile.label,
        isActive: true,
      },
      ['id'],
    );

    await contentRepo.upsert(
      {
        profileId: profile.profile,
        segment: 'adult',
        locale: 'en',
        content: profile.adult,
      },
      ['profileId', 'segment', 'locale'],
    );

    await contentRepo.upsert(
      {
        profileId: profile.profile,
        segment: 'kids',
        locale: 'en',
        content: profile.kids,
      },
      ['profileId', 'segment', 'locale'],
    );
  }
}
