// src/fonts.ts
import { Plus_Jakarta_Sans, Poiret_One } from 'next/font/google';

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const poiretOne = Poiret_One({
  subsets: ['latin'],
  weight: '400',
});
