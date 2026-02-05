import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { resultProfiles } from '../src/database/data/resultProfiles';

const outPath = resolve(
  __dirname,
  '../src/database/data/resultProfiles.en.ts',
);

const content = `import { resultProfiles } from './resultProfiles';
import type { ResultProfile } from './resultProfiles';

export type ResultProfileTranslation = Pick<
  ResultProfile,
  'profile' | 'label' | 'adult' | 'kids'
>;

// Placeholder: copy Indonesian content as draft for all profiles.
export const resultProfilesEn: ResultProfileTranslation[] = resultProfiles.map(
  (profile) => ({
    profile: profile.profile,
    label: profile.label,
    adult: profile.adult,
    kids: profile.kids,
  }),
);
`;

writeFileSync(outPath, content, { encoding: 'utf-8' });
console.log(`Wrote ${outPath}`);
