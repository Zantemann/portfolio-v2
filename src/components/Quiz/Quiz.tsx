'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import type { QuizAnswers, QuestionId } from '@/types/quiz';
import { getRecommendations } from '@/utils/quizEngine';
import { buildQuizQuestions } from '@/utils/quizQuestions';
import { buildRecommendations } from '@/utils/quizRecommendations';
import Styles from './quiz.module.css';

interface QuizState {
  answers: QuizAnswers;
  currentStep: number;
  isFinished: boolean;
}

// Initialize quiz state from localStorage
const initializeQuizState = (): QuizState => {
  if (!globalThis.window) {
    return { answers: {}, currentStep: -1, isFinished: false };
  }

  try {
    const savedQuizState = globalThis.window.localStorage.getItem('quizState');
    if (savedQuizState) {
      const parsed = JSON.parse(savedQuizState);
      return {
        answers: parsed.answers || {},
        currentStep: parsed.currentStep ?? -1,
        isFinished: parsed.isFinished || false,
      };
    }
  } catch {
    // Failed to load quiz state, ignore
  }

  return { answers: {}, currentStep: -1, isFinished: false };
};

export default function Quiz() {
  const t = useTranslations('QUIZ');
  const n = useTranslations('NAVIGATION');
  const [state, setState] = useState<QuizState>({
    answers: {},
    currentStep: -1,
    isFinished: false,
  });
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    const timeoutId = globalThis.setTimeout(() => {
      setState(initializeQuizState());
      setHasHydrated(true);
    }, 0);

    return () => {
      globalThis.clearTimeout(timeoutId);
    };
  }, []);

  // Save quiz state to localStorage whenever it changes
  useEffect(() => {
    if (!hasHydrated) {
      return;
    }
    localStorage.setItem('quizState', JSON.stringify(state));
  }, [hasHydrated, state]);

  // Build questions and recommendations with translations
  const questions = buildQuizQuestions(t);
  const recommendations = buildRecommendations(t);

  // Map recommendation titles to their localized anchors
  const getAnchorForService = (title: string): string => {
    if (title === recommendations.custom.title) {
      return n('SERVICES.ANCHORS.CUSTOM');
    }
    if (title === recommendations.modernization.title) {
      return n('SERVICES.ANCHORS.MODERNIZATION');
    }
    if (title === recommendations.shopify.title) {
      return n('SERVICES.ANCHORS.SHOPIFY');
    }
    return n('SERVICES.ANCHORS.SEO');
  };

  // Filter questions based on conditions
  const availableQuestions = questions.filter((q) => {
    if (!q.conditionKey || !q.conditionValue) {
      return true;
    }
    return state.answers[q.conditionKey] === q.conditionValue;
  });

  const handleAnswer = (questionId: QuestionId, value: string) => {
    setState((prev) => ({
      ...prev,
      answers: { ...prev.answers, [questionId]: value },
    }));
  };

  const handleNext = () => {
    if (state.currentStep < availableQuestions.length - 1) {
      setState((prev) => ({ ...prev, currentStep: prev.currentStep + 1 }));
    } else {
      setState((prev) => ({ ...prev, isFinished: true }));
    }
  };

  const handlePrevious = () => {
    if (state.currentStep > 0) {
      setState((prev) => ({ ...prev, currentStep: prev.currentStep - 1 }));
    }
  };

  const handleRestart = () => {
    setState({
      answers: {},
      currentStep: -1,
      isFinished: false,
    });
    localStorage.removeItem('quizState');
  };

  const handleStart = () => {
    setState((prev) => ({ ...prev, currentStep: 0 }));
  };

  // Build services path based on localized translation
  const servicesPath = n('SERVICES.PATH');

  // Intro screen
  if (state.currentStep === -1) {
    return (
      <div className={Styles.quizContainer}>
        <div className={Styles.introScreen}>
          <h2 className={Styles.title}>{t('INTRO.TITLE')}</h2>
          <p className={Styles.introText}>{t('INTRO.DESCRIPTION')}</p>
          <button onClick={handleStart} className={Styles.startButton}>
            {t('START_BUTTON')}
          </button>
        </div>
      </div>
    );
  }

  // Results screen
  if (state.isFinished) {
    const result = getRecommendations(state.answers, recommendations);

    return (
      <div className={Styles.resultsContainer}>
        <div className={Styles.resultsScreen}>
          <h2 className={Styles.title}>{t('RESULTS_TITLE')}</h2>

          <div className={Styles.resultsContent}>
            <div className={Styles.serviceCardsContainer}>
              <div className={Styles.serviceCard}>
                <h3 className={Styles.serviceTitle}>{result.primaryService.title}</h3>
                <p className={Styles.serviceDescription}>{result.primaryService.description}</p>
                <ul className={Styles.benefitsList}>
                  {result.primaryService.benefits.map((benefit) => (
                    <li key={benefit} className={Styles.benefitItem}>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`${servicesPath}#${getAnchorForService(result.primaryService.title)}`}
                  className={Styles.readMoreLink}
                >
                  {t('READ_MORE')}
                </Link>
              </div>

              {result.secondaryService && (
                <div className={Styles.serviceCard}>
                  <h3 className={Styles.serviceTitle}>{result.secondaryService.title}</h3>
                  <p className={Styles.serviceDescription}>{result.secondaryService.description}</p>
                  <ul className={Styles.benefitsList}>
                    {result.secondaryService.benefits.map((benefit) => (
                      <li key={benefit} className={Styles.benefitItem}>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`${servicesPath}#${getAnchorForService(result.secondaryService.title)}`}
                    className={Styles.readMoreLink}
                  >
                    {t('READ_MORE')}
                  </Link>
                </div>
              )}
            </div>

            <div className={Styles.brandMessaging}>
              <p className={Styles.brandItem}>{t('TIMELINE')}</p>
              <p className={Styles.brandItem}>{t('MAINTENANCE')}</p>
              <p className={Styles.brandItem}>{t('WARRANTY')}</p>
            </div>

            <div className={Styles.ctaSection}>
              <h3 className={Styles.ctaTitle}>{t('CTA.TITLE')}</h3>
              <p className={Styles.ctaDescription}>{t('CTA.DESCRIPTION')}</p>
              <div className={Styles.contactInfo}>
                <p className={Styles.contactItem}>
                  {t('CTA.EMAIL_LABEL')}{' '}
                  <a href="mailto:orasanteri@gmail.com" className={Styles.contactLink}>
                    orasanteri@gmail.com
                  </a>
                </p>
                <p className={Styles.contactDivider}>{t('CTA.OR_TEXT')}</p>
                <p className={Styles.contactItem}>
                  {t('CTA.PHONE_LABEL')}{' '}
                  <a href="tel:+358456971369" className={Styles.contactLink}>
                    +358 45 6971369
                  </a>
                </p>
              </div>
              <button onClick={handleRestart} className={Styles.restartLink}>
                {t('RESTART_BUTTON')}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Question screen
  const currentQuestion = availableQuestions[state.currentStep];
  const currentAnswer = state.answers[currentQuestion.id];
  const isAnswered = currentAnswer !== undefined;

  return (
    <div className={Styles.quizContainer}>
      <div className={Styles.questionScreen}>
        <div className={Styles.progressBar}>
          <div
            className={Styles.progressFill}
            style={{
              width: `${((state.currentStep + 1) / availableQuestions.length) * 100}%`,
            }}
          />
        </div>

        <div className={Styles.questionNumber}>
          Question {state.currentStep + 1} of {availableQuestions.length}
        </div>

        <h2 className={Styles.questionText}>{currentQuestion.question}</h2>

        <div className={Styles.optionsContainer}>
          {currentQuestion.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(currentQuestion.id, option.value)}
              className={`${Styles.optionButton} ${
                currentAnswer === option.value ? Styles.selected : ''
              }`}
            >
              <div className={Styles.optionLabel}>{option.label}</div>
              {option.sublabel && <div className={Styles.optionSublabel}>{option.sublabel}</div>}
            </button>
          ))}
        </div>

        <div className={Styles.navigationButtons}>
          {state.currentStep > 0 && (
            <button onClick={handlePrevious} className={Styles.previousButton}>
              {t('PREVIOUS_BUTTON')}
            </button>
          )}
          <button onClick={handleNext} disabled={!isAnswered} className={Styles.nextButton}>
            {t('NEXT_BUTTON')}
          </button>
        </div>
      </div>
    </div>
  );
}
