'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Is this a real person?',
      answer: 'No, our videos feature AI-generated influencers. They look and sound incredibly realistic, but are created entirely using advanced AI technology. This allows us to offer high-quality influencer videos at a fraction of traditional costs.'
    },
    {
      question: 'Can I use these videos for ads?',
      answer: 'Yes! Our AI Reels are fully optimized for Instagram Reels and Instagram Ads. You have complete rights to use them in organic posts and paid advertising campaigns on Instagram and other social platforms.'
    },
    {
      question: 'Can I choose male or female AI influencer?',
      answer: 'We select the AI influencer based on your product category. Female AI influencer for women-focused products (beauty, fashion, jewelry) and male AI influencer for men-focused products (fitness, grooming, tech). We maintain 2–3 fixed models to ensure consistent quality.'
    },
    {
      question: 'Do you disclose AI usage?',
      answer: 'We follow ethical AI practices. While Instagram doesn\'t currently mandate AI disclosure for commercial content, we recommend transparency. You can mention "AI-powered" in your caption or simply post as regular brand content – it\'s your choice based on your brand strategy.'
    },
    {
      question: 'What if I want my own AI influencer?',
      answer: 'We offer custom AI influencer creation exclusively for your brand. This is perfect if you want a consistent brand ambassador across all your content. Pricing for custom AI influencer development is discussed separately based on your requirements. Contact us for a detailed quote.'
    },
    {
      question: 'How do revisions work?',
      answer: 'Each video includes 1 free revision. After we deliver the first version, you can request changes to script, pacing, or visual elements. We\'ll incorporate your feedback and deliver the revised version within 3-5 days.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about AI Reels
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-2 border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-gray-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
