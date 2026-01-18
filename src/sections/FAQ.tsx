"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const items = [
    {
      q: "Who can participate in this hackathon?",
      a: "The challenge is open to students, researchers, and early-stage start-ups (less than 2 years old). Teams must consist of 2 members.",
    },
    {
      q: "Is there a registration fee?",
      a: "No, participation in the EV Battery Intelligence Challenge is completely free of charge.",
    },
    {
      q: "Will hardware be provided?",
      a: "Yes! The top 15 shortlisted teams will receive the VSDSquadron Ultra Development Board to build their prototypes. Other component costs will be reimbursed as per guidelines.",
    },
    {
      q: "Is travel support available for the finale?",
      a: "Travel and accommodation support will be provided for the shortlisted teams attending the physical demonstration in Bangalore.",
    },
    {
      q: "Do we need to have a prototype ready for registration?",
      a: "No, the initial registration only requires your team details and a basic idea submission. The detailed technical proposal comes later.",
    },
  ];

  return (
    <div className="bg-transparent py-24 relative z-10">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white mb-4 font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-brand-muted">
            Everything you need to know about the challenge.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-brand-secondary/50 bg-brand-secondary/20 px-6 rounded-xl data-[state=open]:bg-brand-secondary/40 transition-colors"
            >
              <AccordionTrigger className="text-white hover:text-brand-accent hover:no-underline py-6 text-left font-medium text-lg">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-brand-muted pb-6 leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
