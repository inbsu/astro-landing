import createMDX from '@next/mdx';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  output: 'export',
  images: {
    unoptimized: true,
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withNextIntl(withMDX(nextConfig));
