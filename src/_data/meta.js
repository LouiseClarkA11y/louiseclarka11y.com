// Site Configuration for louiseclarka11y.com
// Last updated: August 28, 2025

// Core site settings
export const url = process.env.URL || 'http://localhost:8080';
export const domain = new URL(url).hostname;
export const siteName = 'Louise Clark A11y';
export const siteDescription = 'Accessibility consultant, product and service designer creating inclusive digital experiences through transparent AI collaboration';
export const siteType = 'Person'; // schema.org type
export const locale = 'en_US';
export const lang = 'en';
export const skipContent = 'Skip to content';

// Author information
export const author = {
  name: 'Louise Clark',
  avatar: '/icon-512x512.png', // TODO: Add professional headshot
  email: 'hello@louiseclarka11y.com',
  website: 'https://louiseclarka11y.com',
  fediverse: '@louiseclarka11y@a11y.info' // TODO: Set up @louiseclarka11y@a11y.info
};

// Original theme creator (keeping for attribution)
export const creator = {
  name: 'Lene Saile',
  email: 'hola@lenesaile.com',
  website: 'https://www.lenesaile.com',
  social: 'https://front-end.social/@lene'
};

// Visual identity
export const pathToSvgLogo = 'src/assets/svg/misc/logo.svg'; // TODO: Create custom logo
export const themeColor = '#0066CC'; // TODO: set them color
export const themeLight = '#ffffff'; // TODO: set light theme
export const themeDark = '#1a1a1a'; // TODO: set dark theme

// Social sharing
export const opengraph_default = '/assets/images/template/opengraph-default.jpg'; // TODO: Create social card image
export const opengraph_default_alt = 'Louise Clark - Accessibility Consultant & Service Designer. Building inclusive digital experiences.';

// Blog configuration
export const blog = {
  name: 'Accessibility & Service Design Insights',
  description: 'Thoughts on inclusive design, accessibility practices, and transparent AI collaboration in web development.',
  feedLinks: [
    {
      title: 'Atom Feed',
      url: '/feed.xml',
      type: 'application/atom+xml'
    },
    {
      title: 'JSON Feed',
      url: '/feed.json',
      type: 'application/json'
    }
  ],
  // Tag labels
  tagSingle: 'Tag',
  tagPlural: 'Tags',
  tagMore: 'More tags:',
  // Pagination labels
  paginationLabel: 'Blog',
  paginationPage: 'Page',
  paginationPrevious: 'Previous',
  paginationNext: 'Next',
  paginationNumbers: true
};

// Accessibility labels
export const details = {
  aria: 'section controls',
  expand: 'expand all',
  collapse: 'collapse all'
};

export const dialog = {
  close: 'Close',
  next: 'Next',
  previous: 'Previous'
};

// Navigation settings
export const navigation = {
  navLabel: 'Menu',
  ariaTop: 'Main',
  ariaBottom: 'Complementary',
  ariaPlatforms: 'Platforms',
  drawerNav: false, // TODO: Test mobile navigation patterns
  subMenu: false
};

// Theme switcher
export const themeSwitch = {
  title: 'Theme',
  light: 'light',
  dark: 'dark'
};

// Green web disclosure
export const greenweb = {
  disclosures: [
    {
      docType: 'sustainability-page',
      url: `${url}/sustainability/`,
      domain: domain
    }
  ],
  services: [{domain: 'netlify.com', serviceType: 'cdn'}] // TODO: Update when hosting is decided
};

// GitHub integration
export const viewRepo = {
  allow: true,
  infoText: 'View this page on GitHub'
};

// Keep the fun
export const easteregg = true;