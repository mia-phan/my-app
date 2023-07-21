/** @type {import('tailwindcss').Config} */

const MOBILE_LANDSCAPE = '(orientation: landscape) and (max-width: 959.9px)';
const MOBILE_PORTRAIT = '(orientation: portrait) and (max-width: 599.9px)';

const TABLET_LANDSCAPE = '(orientation: landscape) and (min-width: 960px) and (max-width: 1279.9px)';
const TABLET_PORTRAIT = '(orientation: portrait) and (min-width: 600px) and (max-width: 839.9px)';

const WEB_LANDSCAPE = '(orientation: landscape) and (min-width: 1280px)';
const WEB_PORTRAIT = '(orientation: portrait) and (min-width: 840px)';


module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
    screens: {
      mobile: [{ raw: MOBILE_LANDSCAPE }, { raw: MOBILE_PORTRAIT }],
      'mobile-landscape': { raw: MOBILE_LANDSCAPE },
      'mobile-portrait': { raw: MOBILE_PORTRAIT },
      tablet: [{ raw: TABLET_LANDSCAPE }, { raw: TABLET_PORTRAIT }],
      'tablet-landscape': { raw: TABLET_LANDSCAPE },
      'tablet-portrait': { raw: TABLET_PORTRAIT },
      web: [{ raw: WEB_LANDSCAPE }, { raw: WEB_PORTRAIT }],
      'web-landscape': { raw: WEB_LANDSCAPE },
      'web-portrait': { raw: WEB_PORTRAIT }
    }
  },
  plugins: [],
}

