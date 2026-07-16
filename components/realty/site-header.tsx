import Link from "next/link";
import { Phone, Menu, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { realtyNavLinks, realtySiteConfig } from "@/lib/realty/site-config";

export function RealtySiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-foreground transition-colors hover:text-primary"
          aria-label={`${realtySiteConfig.agentName} — home`}
        >
          <span
            aria-hidden="true"
            className="flex h-7 w-7 items-center justify-center rounded-sm bg-primary text-primary-foreground"
          >
            <Home className="h-4 w-4" />
          </span>
          <span className="text-sm font-semibold tracking-tight">
            {realtySiteConfig.agentName}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Primary navigation"
        >
          {realtyNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            render={<a href={`tel:${realtySiteConfig.phoneHref}`} />}
            size="sm"
            className="gap-1.5 bg-primary font-medium text-primary-foreground hover:bg-primary/90"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {realtySiteConfig.phoneDisplay}
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open navigation menu"
                  className="cursor-pointer text-muted-foreground hover:text-foreground"
                />
              }
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-0">
              <SheetHeader className="px-5 pt-6 pb-4">
                <SheetTitle className="text-left text-sm font-semibold">
                  {realtySiteConfig.agentName}
                </SheetTitle>
              </SheetHeader>
              <Separator />
              <nav
                className="flex flex-col gap-1 px-3 py-4"
                aria-label="Mobile navigation"
              >
                {realtyNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Separator />
              <div className="px-5 py-5">
                <Button
                  render={<a href={`tel:${realtySiteConfig.phoneHref}`} />}
                  className="w-full gap-2 bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call {realtySiteConfig.phoneDisplay}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
