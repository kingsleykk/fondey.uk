/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      // Short link printed on the NFC business card. Temporary so it can be repointed later.
      { source: '/c', destination: '/', permanent: false },
      // Resume link: the shared Google Drive copy of the CV PDF.
      { source: '/cv', destination: 'https://drive.google.com/file/d/1qk5jqoVvWuRK8Zamp_mlL1A7ZGsfbV6f/view?usp=sharing', permanent: false },
    ];
  },
};

export default nextConfig;
