import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
        onClick={onToggle}
      >
        <span className="font-semibold text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: "How does your online class help service work?",
      answer: "Our expert tutors will handle your entire online course, including assignments, discussions, quizzes, and exams. We work directly within your learning management system while maintaining complete confidentiality and academic integrity."
    },
    {
      question: "Is your service confidential and secure?",
      answer: "Absolutely. We maintain strict confidentiality protocols. Your personal information, login credentials, and academic records are protected with enterprise-level security. We never share your information with third parties."
    },
    {
      question: "What subjects do you cover?",
      answer: "We cover virtually all subjects including Mathematics, Science, English, History, Business, Psychology, Nursing, Computer Science, and many more. Our team includes experts with advanced degrees in their respective fields."
    },
    {
      question: "How do you ensure quality work?",
      answer: "All work is completed by PhD-qualified professionals with extensive teaching experience. We have a rigorous quality assurance process, including plagiarism checks and multiple reviews before submission."
    },
    {
      question: "What if I'm not satisfied with the results?",
      answer: "We offer a 100% money-back guarantee if you're not completely satisfied with our service. We also provide free revisions to ensure your assignments meet your expectations and requirements."
    },
    {
      question: "How much does your service cost?",
      answer: "Pricing varies based on the subject, academic level, deadline, and complexity of the work. We offer competitive rates starting from $15 per assignment. Contact us for a free, personalized quote."
    },
    {
      question: "Can you handle urgent assignments?",
      answer: "Yes, we specialize in urgent assignments and can deliver quality work within 24 hours or even shorter timeframes. Rush orders are handled by our most experienced tutors with priority support."
    },
    {
      question: "Do you provide 24/7 customer support?",
      answer: "Yes, our customer support team is available 24/7 via live chat, phone, and email. You can reach us anytime for updates, questions, or urgent assistance with your assignments."
    },
    {
      question: "How do you handle proctored exams?",
      answer: "We have specialized techniques and experienced professionals who can assist with proctored examinations while maintaining security and confidentiality. Contact us to discuss your specific requirements."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers. All transactions are processed through secure, encrypted payment gateways to protect your financial information."
    },
    {
      question: "Can you help with group projects?",
      answer: "Yes, we can assist with group projects and collaborative assignments. Our team can coordinate with your group members or handle the entire project independently, depending on your needs."
    },
    {
      question: "Do you provide progress updates?",
      answer: "Absolutely. We provide regular progress updates throughout the duration of your course or assignment. You'll receive notifications about completed work, upcoming deadlines, and grade achievements."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about our educational services
          </p>
        </div>
        
        <div className="space-y-2">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItems.includes(index)}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Our support team is here to help 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Live Chat Support
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Email Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;