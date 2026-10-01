/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    // Short link printed on the NFC business card. Temporary so it can be repointed later.
    return [{ source: '/c', destination: '/', permanent: false }];
  },
};

export default nextConfig;
