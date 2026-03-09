interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: FaqItem[];
}

export default function FaqSection({ faqs }: FaqSectionProps) {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-poppins font-bold text-white mb-6">
        Perguntas Frequentes
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <details
            key={i}
            className="group border border-white/[0.06] rounded-lg"
          >
            <summary className="cursor-pointer px-5 py-4 text-white font-semibold text-sm list-none flex items-center justify-between">
              {faq.question}
              <span className="ml-2 text-txt-muted group-open:rotate-45 transition-transform text-lg">
                +
              </span>
            </summary>
            <div className="px-5 pb-4 text-sm text-txt-secondary leading-relaxed">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
