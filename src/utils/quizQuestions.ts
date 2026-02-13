import type { QuizQuestion } from '@/types/quiz';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function buildQuizQuestions(t: (key: any) => string): QuizQuestion[] {
  return [
    {
      id: 'has_old_site',
      question: t('QUESTIONS.Q1.QUESTION'),
      options: [
        {
          label: t('QUESTIONS.Q1.OPTION_1'),
          value: 'yes',
        },
        {
          label: t('QUESTIONS.Q1.OPTION_2'),
          value: 'no',
        },
      ],
    },
    {
      id: 'update_type',
      question: t('QUESTIONS.Q2.QUESTION'),
      options: [
        {
          label: t('QUESTIONS.Q2.OPTION_1'),
          value: 'legacy_update',
          sublabel: t('QUESTIONS.Q2.OPTION_1_SUB'),
        },
        {
          label: t('QUESTIONS.Q2.OPTION_2'),
          value: 'new_features',
          sublabel: t('QUESTIONS.Q2.OPTION_2_SUB'),
        },
      ],
      conditionKey: 'has_old_site',
      conditionValue: 'yes',
    },
    {
      id: 'site_type',
      question: t('QUESTIONS.Q3.QUESTION'),
      options: [
        {
          label: t('QUESTIONS.Q3.OPTION_1'),
          value: 'landing_page',
          sublabel: t('QUESTIONS.Q3.OPTION_1_SUB'),
        },
        {
          label: t('QUESTIONS.Q3.OPTION_2'),
          value: 'webstore',
          sublabel: t('QUESTIONS.Q3.OPTION_2_SUB'),
        },
      ],
    },
    {
      id: 'page_count',
      question: t('QUESTIONS.Q4.QUESTION'),
      options: [
        {
          label: t('QUESTIONS.Q4.OPTION_1'),
          value: '1-10',
        },
        {
          label: t('QUESTIONS.Q4.OPTION_2'),
          value: '10-25',
        },
        {
          label: t('QUESTIONS.Q4.OPTION_3'),
          value: '25+',
        },
      ],
    },
    {
      id: 'customer_goal',
      question: t('QUESTIONS.Q5.QUESTION'),
      options: [
        {
          label: t('QUESTIONS.Q5.OPTION_1'),
          value: 'existing_customers',
          sublabel: t('QUESTIONS.Q5.OPTION_1_SUB'),
        },
        {
          label: t('QUESTIONS.Q5.OPTION_2'),
          value: 'new_customers',
          sublabel: t('QUESTIONS.Q5.OPTION_2_SUB'),
        },
      ],
    },
    {
      id: 'competitors',
      question: t('QUESTIONS.Q6.QUESTION'),
      options: [
        {
          label: t('QUESTIONS.Q6.OPTION_1'),
          value: 'beat_competitors',
          sublabel: t('QUESTIONS.Q6.OPTION_1_SUB'),
        },
        {
          label: t('QUESTIONS.Q6.OPTION_2'),
          value: 'low_comp',
          sublabel: t('QUESTIONS.Q6.OPTION_2_SUB'),
        },
      ],
    },
  ];
}
