/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      // Short link printed on the NFC business card. Temporary so it can be repointed later.
      { source: '/c', destination: '/', permanent: false },
      // Resume link. TODO: swap for the shared Google Drive link to the CV PDF.
      { source: '/cv', destination: 'https://www.linkedin.com/in/jia-cheng-kong-b61aa7363/', permanent: false },
    ];
  },
};

export default nextConfig;
