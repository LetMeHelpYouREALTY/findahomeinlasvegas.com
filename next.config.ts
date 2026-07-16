import type { NextConfig } from "next";
import { withWorkflow } from "workflow/next";

const realScoutScriptSrc = "https://em.realscout.com https://www.realscout.com";
const realScoutConnectSrc = "https://em.realscout.com https://www.realscout.com";
const realScoutImgSrc = "https://em.realscout.com https://www.realscout.com https://*.realscout.com";

const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' 'unsafe-eval' ${realScoutScriptSrc} https://va.vercel-scripts.com`,
  `connect-src 'self' ${realScoutConnectSrc} https://vitals.vercel-insights.com`,
  `img-src 'self' data: blob: https: ${realScoutImgSrc}`,
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data:",
  "frame-src 'self' https://em.realscout.com https://www.realscout.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: contentSecurityPolicy,
          },
        ],
      },
    ];
  },
};

export default withWorkflow(nextConfig);
