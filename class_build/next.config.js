module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "mingmarket",
  exportPathMap: () => ({
    "/": { page: "/" },
    "/boards": { page: "/boards" },
    "/404": { page: "/404" },
  }),
};
