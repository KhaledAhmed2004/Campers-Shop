import { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of camping gear do you offer?",
      answer:
        "We offer a wide range of camping gear, including tents, backpacks, sleeping bags, cooking equipment, and outdoor furniture.",
    },
    {
      question: "Do you offer a warranty on your products?",
      answer:
        "Yes, we provide a warranty on most of our products. Please check the product description for specific warranty details.",
    },
    {
      question: "How do I track my order?",
      answer:
        "Once your order is shipped, you will receive an email with a tracking link to monitor your shipment.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We accept returns within 30 days of purchase. Products must be unused and in their original packaging. Please visit our returns page for more details.",
    },
    {
      question: "Can I change or cancel my order?",
      answer:
        "If you need to change or cancel your order, please contact our customer service as soon as possible. Changes can only be made before the order is shipped.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to various international locations. Shipping fees and delivery times may vary based on your location.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="px-4 py-8 bg-gray-50 rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Frequently Asked Questions
      </h2>
      <div className="max-w-xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 mb-4">
            <button
              className="flex justify-between w-full py-4 text-left font-semibold text-gray-700"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className="ml-4">{activeIndex === index ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                activeIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <div className="pb-4 text-gray-600">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
