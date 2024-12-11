import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/mock/evv";

const FAQ = () => {
  return (
    <section className="space-y-4 sm:space-y-8">
      <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-zinc-800">
        Frequently Asked Questions
      </h1>
      <Accordion
        type="single"
        collapsible
        className="mx-auto w-11/12 sm:w-5/6 p-3 bg-tertiary rounded-xl"
      >
        {faqs.map((faq, index) => (
          <AccordionItem key={`item-${index}`} value={`item-${index}`}>
            <AccordionTrigger className="text-lg font-bold">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;
