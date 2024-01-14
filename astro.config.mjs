import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://jspark.dev',
  integrations: [
    starlight({
      title: 'Js Park',
      favicon: './favicon.png',
      logo: {
        src: '/src/assets/favicon.png',
      },
      sidebar: [
        { label: 'Home', link: '/' },
        { label: 'About', link: '/about' },
        {
          label: '1번',
          collapsed: true,
          autogenerate: { directory: 'category-1' },
        },
        {
          label: '2번',
          collapsed: true,
          autogenerate: { directory: 'category-2' },
        },
      ],
      locales: {
        root: {
          label: '한국어',
          lang: 'ko-KR',
        },
      },
      social: {
        'x.com': 'https://x.com/jsparkdev',
        github: 'https://github.com/jsparkdev',
        linkedin: 'https://www.linkedin.com/in/jsparkdev/',
        stackOverflow: 'https://stackoverflow.com/users/11653535/js-park',
      },
      lastUpdated: true,
      pagination: false,
      titleDelimiter: ' - ',
    }),
  ],
});
