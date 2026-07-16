import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface RealtyFaq {
  question: string;
  answer: string;
}

export function RealtyFaqSection({
  heading = "Frequently Asked Questions",
  intro,
  faqs,
}: {
  heading?: string;
  intro?: string;
  faqs: RealtyFaq[];
}) {
  return (
    <section aria-labelledby="faq-heading" className="w-full border-b border-border bg-card/40">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Common Questions
          </p>
          <h2
            id="faq-heading"
            className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            {heading}
          </h2>
          {intro && (
            <p className="mt-3 text-pretty text-sm text-muted-foreground">{intro}</p>
          )}
        </div>

        <Accordion className="flex flex-col gap-2">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="rounded-lg border border-border bg-card px-5"
            >
              <AccordionTrigger className="py-4 text-left text-sm leading-snug font-medium text-foreground hover:text-primary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
