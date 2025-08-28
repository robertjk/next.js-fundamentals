interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2 text-white">{question}</h3>
      <p className="text-gray-400 dark:text-gray-300">{answer}</p>
    </div>
  );
}
