import Script from "next/script";
import { RealtySiteHeader } from "@/components/realty/site-header";
import { RealtyFooterCta } from "@/components/realty/footer-cta";
import { REALSCOUT_SCRIPT_SRC } from "@/lib/realty/realscout";

export default function RealtyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-dvh flex-col">
      {/* RealScout web components — loaded once for all realty pages */}
      <Script
        src={REALSCOUT_SCRIPT_SRC}
        type="module"
        strategy="afterInteractive"
      />
      <RealtySiteHeader />
      <main className="flex-1">{children}</main>
      <RealtyFooterCta />
    </div>
  );
}
