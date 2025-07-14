/** @type {import('tailwindcss').Config} */
import { FORINK_COLOR } from './src/styles/color';
import { FORINK_LAYOUT } from './src/styles/layout';
import { FORINK_TYPO } from './src/styles/typo';

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: FORINK_COLOR.primary,
        primaryHover: FORINK_COLOR.primaryHover,

        secondary: FORINK_COLOR.secondary,
        secondaryHover: FORINK_COLOR.secondaryHover,

        accent: FORINK_COLOR.accent,
        accentHover: FORINK_COLOR.accentHover,

        danger: FORINK_COLOR.danger,
        dangerHover: FORINK_COLOR.dangerHover,

        background: FORINK_COLOR.background,
        backgroundHover: FORINK_COLOR.backgroundHover,

        surface: FORINK_COLOR.surface,
        surfaceHover: FORINK_COLOR.surfaceHover,

        border: FORINK_COLOR.border,
        borderHover: FORINK_COLOR.borderHover,

        white: FORINK_COLOR.white,
        whiteHover: FORINK_COLOR.whiteHover,

        textPrimary: FORINK_COLOR.textPrimary,
        textMuted: FORINK_COLOR.textMuted,
      },
      height: {
        header: FORINK_LAYOUT.header,
      },
    },
    fontFamily: {
      mono: [FORINK_TYPO.body.fontFamily],
    },
    fontSize: {
      title1: [
        FORINK_TYPO.title1.fontSize,
        { lineHeight: FORINK_TYPO.title1.lineHeight },
      ],
      title2: [
        FORINK_TYPO.title2.fontSize,
        { lineHeight: FORINK_TYPO.title2.lineHeight },
      ],
      body: [
        FORINK_TYPO.body.fontSize,
        { lineHeight: FORINK_TYPO.body.lineHeight },
      ],
      caption: [
        FORINK_TYPO.caption.fontSize,
        { lineHeight: FORINK_TYPO.caption.lineHeight },
      ],
    },
  },
  plugins: [],
};
