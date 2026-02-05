import { content } from './introduction';
import type { IntroductionContent } from './introduction';

// Draft translation: only a few fields translated, the rest still Indonesian.
export const contentEn: IntroductionContent = {
  adult: {
    ...content.adult,
    heroTitle:
      'Understanding <span class="text-indigo-600">your Dominant</span> Motivation',
    heroDesc:
      'MBPT helps individuals and educators deeply understand the core drivers of human motivation.',
    heroBtn: 'Start the Test',
    valueTitle: 'Four Fuel Types of Motivation',
    v1: 'Purpose-driven and direction.',
    v2: 'Motivated by values and meaning.',
    v3: 'Seeking safety and stability.',
    v4: 'Powered by confidence.',
    ctaTitle: 'Building Self-Aware Generations',
    ctaDesc: 'A modern approach to education and personal development.',
    ctaBtn: 'About MBPT',
    ab1: 'MBPT was developed as a personality test application by <a href="http://jazacademy.id" target="_blank" class="font-semibold text-indigo-600">Jaz Academy</a>, serving both as a learning resource for application development and as an observational tool for student behavior and motivation. The application is used directly in real educational settings, ensuring that insights and reflections are drawn from practice, not theory alone.',
    ab2: 'MBPT is a Four Fuel Type model formulated by <a href="http://instagram.com/ganiramaa" target="_blank" class="font-semibold text-indigo-600">Rama Gani</a>, inspired by and synthesized from Self-Determination Theory by Richard M. Ryan and Edward L. Deci. This model simplifies human motivation into four core fuels, making it easier to understand, teach, and apply.',
    ab3: 'MBPT is not designed to judge or label individuals, but to support personal growth. All four motivation types exist in everyone; each person simply has a dominant tendency that can be guided, developed, and is not permanent. The model helps reveal potential, not define identity.',
  },
  kids: {
    ...content.kids,
    heroTitle:
      'Let’s Get to <span class="text-pink-500">Know You</span> and Your Motivation',
    heroDesc:
      'Every child is unique and has different kinds of energy. What makes you feel excited?',
    heroBtn: 'Let’s Start!',
    valueTitle: 'Why Do We Feel Motivated?',
    v1: 'I have a dream!',
    v2: 'I want to be a good person.',
    v3: 'I want to feel safe.',
    v4: 'I want to feel important.',
    ctaTitle: 'Learning to Be More Motivated',
    ctaDesc: 'Knowing yourself makes life more fun.',
    ctaBtn: 'Learn More',
    ab1: 'The MBPT test is an application created by <a href="http://jazacademy.id" target="_blank" class="font-semibold text-pink-500">Jaz Academy</a>, used by children to learn technology while also helping them understand how their motivation works, so they can grow more easily.',
    ab2: 'Inside, there is the Four Fuel Type concept—four types of motivation created by Kak <a href="http://instagram.com/ganiramaa" target="_blank" class="font-semibold text-pink-500">Rama Gani</a>, inspired by research from experts on why people want to learn and take action.',
    ab3: 'This test is not meant to judge anyone, but to help children understand themselves better. Every child has all four motivation fuels; some are stronger than others, and all of them can be trained and can change over time.',
  },
};
