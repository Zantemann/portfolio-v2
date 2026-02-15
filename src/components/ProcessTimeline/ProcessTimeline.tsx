import { getTranslations } from 'next-intl/server';
import Styles from './processtimeline.module.css';

const ProcessTimeline = async () => {
  const t = await getTranslations('SERVICES.PROCESS');

  const steps = [
    {
      number: 1,
      title: t('STEP_1.TITLE'),
      description: t('STEP_1.DESC'),
      detail: t('STEP_1.DETAIL'),
    },
    {
      number: 2,
      title: t('STEP_2.TITLE'),
      description: t('STEP_2.DESC'),
      detail: t('STEP_2.DETAIL'),
    },
    {
      number: 3,
      title: t('STEP_3.TITLE'),
      description: t('STEP_3.DESC'),
      detail: t('STEP_3.DETAIL'),
    },
    {
      number: 4,
      title: t('STEP_4.TITLE'),
      description: t('STEP_4.DESC'),
      detail: t('STEP_4.DETAIL'),
    },
    {
      number: 5,
      title: t('STEP_5.TITLE'),
      description: t('STEP_5.DESC'),
      detail: t('STEP_5.DETAIL'),
    },
    {
      number: 6,
      title: t('STEP_6.TITLE'),
      description: t('STEP_6.DESC'),
      detail: t('STEP_6.DETAIL'),
    },
  ];

  return (
    <section className="section">
      <h2 className="section-title">{t('TITLE')}</h2>
      <p className="section-subtitle">{t('SUBTITLE')}</p>

      <div className={Styles.timeline}>
        {steps.map((step) => (
          <div key={step.number} className={Styles.step}>
            <div className={Styles.stepNumber}>{step.number}</div>
            <div className={Styles.stepContent}>
              <h3 className={Styles.stepTitle}>{step.title}</h3>
              <p className={Styles.stepDescription}>{step.description}</p>
              <p className={Styles.stepDetail}>
                {step.detail.includes(':') ? (
                  <>
                    <span className={Styles.stepDetailLabel}>{step.detail.split(':')[0]}:</span>{' '}
                    <span className={Styles.stepDetailValue}>
                      {step.detail.split(':').slice(1).join(':').trim()}
                    </span>
                  </>
                ) : (
                  step.detail
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessTimeline;
