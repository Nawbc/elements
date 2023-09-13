import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  // brand
  brandTitle: 'Stoplight Elements',
  brandUrl: 'https://stoplight.io',
  brandImage:
    'https://global-uploads.webflow.com/6320e912264435aca2ab0351/64e3b74e5c500056903b91e9_Stoplight%20SmartBear%20Logo_Dark.svg',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: '#ced9e0',
  appBorderRadius: 0,
  colorSecondary: '#008eff',

  // Typography
  fontBase:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
  fontCode: "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
});
