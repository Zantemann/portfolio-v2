'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Styles from './faq.module.css';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight('0px');
    }
  }, [isOpen]);

  return (
    <div className={`${Styles.faqItem} ${isOpen ? Styles.open : ''}`}>
      <button
        className={Styles.faqQuestion}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {question}
      </button>
      <div className={Styles.faqContent} style={{ maxHeight: height }}>
        <div ref={contentRef}>
          <p className={Styles.faqAnswer}>{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const t = useTranslations('SERVICES');

  const faqItems = [
    {
      question: t('FAQ.ITEM_1.Q'),
      answer: t('FAQ.ITEM_1.A'),
    },
    {
      question: t('FAQ.ITEM_2.Q'),
      answer: t('FAQ.ITEM_2.A'),
    },
    {
      question: t('FAQ.ITEM_3.Q'),
      answer: t('FAQ.ITEM_3.A'),
    },
    {
      question: t('FAQ.ITEM_4.Q'),
      answer: t('FAQ.ITEM_4.A'),
    },
    {
      question: t('FAQ.ITEM_5.Q'),
      answer: t('FAQ.ITEM_5.A'),
    },
    {
      question: t('FAQ.ITEM_6.Q'),
      answer: t('FAQ.ITEM_6.A'),
    },
    {
      question: t('FAQ.ITEM_7.Q'),
      answer: t('FAQ.ITEM_7.A'),
    },
    {
      question: t('FAQ.ITEM_8.Q'),
      answer: t('FAQ.ITEM_8.A'),
    },
  ];

  return (
    <section className="section">
      <h2 className="section-title">{t('FAQ.TITLE')}</h2>
      <p className="section-subtitle">{t('FAQ.SUBTITLE')}</p>

      <div className={Styles.faqList}>
        {faqItems.map((item) => (
          <FAQItem key={item.question} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
