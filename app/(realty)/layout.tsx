import { RealtySiteHeader } from "@/components/realty/site-header";
import { RealtyFooterCta } from "@/components/realty/footer-cta";

export default function RealtyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-dvh flex-col">
      <RealtySiteHeader />
      <main className="flex-1">{children}</main>
      <RealtyFooterCta />
    </div>
  );
}
