import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
    ...(process.env.GITHUB_ACTIONS === "true"
        ? {
              output: "export",
              basePath: "/anniv-4-month",
              assetPrefix: "/anniv-4-month/",
              trailingSlash: true,
              images: {
                  unoptimized: true,
              },
          }
        : {}),
};

export default withPlaiceholder(nextConfig);
