import type { QuizAnswers, ServiceRecommendation, QuizResult } from '@/types/quiz';
import type { RecommendationData } from './quizRecommendations';

export function getRecommendations(
  answers: QuizAnswers,
  recommendations: RecommendationData,
): QuizResult {
  const primaryService = getPrimaryService(answers, recommendations);
  const secondaryService = getSecondaryService(answers, primaryService.title, recommendations);

  return {
    primaryService,
    secondaryService,
  };
}

function getPrimaryService(
  answers: QuizAnswers,
  recommendations: RecommendationData,
): ServiceRecommendation {
  // Priority 1: Webstore
  if (answers.site_type === 'webstore') {
    return recommendations.shopify;
  }

  // Priority 2: Modernization
  if (answers.has_old_site === 'yes') {
    return recommendations.modernization;
  }

  // Priority 3: Custom Development (default)
  return recommendations.custom;
}

function getSecondaryService(
  answers: QuizAnswers,
  primaryServiceTitle: string,
  recommendations: RecommendationData,
): ServiceRecommendation | undefined {
  const isAggressive =
    answers.competitors === 'beat_competitors' || answers.customer_goal === 'new_customers';

  const isShopify = primaryServiceTitle === recommendations.shopify.title;

  if (isShopify) {
    return isAggressive
      ? recommendations.seoShopifyAggressive
      : recommendations.seoShopifyFoundation;
  } else {
    return isAggressive ? recommendations.seoCustomAggressive : recommendations.seoCustomFoundation;
  }
}
