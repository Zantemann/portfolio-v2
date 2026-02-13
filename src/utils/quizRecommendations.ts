import type { ServiceRecommendation } from '@/types/quiz';

export interface RecommendationData {
  shopify: ServiceRecommendation;
  modernization: ServiceRecommendation;
  custom: ServiceRecommendation;
  seoShopifyAggressive: ServiceRecommendation;
  seoShopifyFoundation: ServiceRecommendation;
  seoCustomAggressive: ServiceRecommendation;
  seoCustomFoundation: ServiceRecommendation;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function buildRecommendations(t: (key: any) => string): RecommendationData {
  return {
    shopify: {
      title: t('RECOMMENDATIONS.SHOPIFY.TITLE'),
      description: t('RECOMMENDATIONS.SHOPIFY.DESCRIPTION'),
      benefits: [
        t('RECOMMENDATIONS.SHOPIFY.BENEFIT_1'),
        t('RECOMMENDATIONS.SHOPIFY.BENEFIT_2'),
        t('RECOMMENDATIONS.SHOPIFY.BENEFIT_3'),
      ],
    },
    modernization: {
      title: t('RECOMMENDATIONS.MODERNIZATION.TITLE'),
      description: t('RECOMMENDATIONS.MODERNIZATION.DESCRIPTION'),
      benefits: [
        t('RECOMMENDATIONS.MODERNIZATION.BENEFIT_1'),
        t('RECOMMENDATIONS.MODERNIZATION.BENEFIT_2'),
        t('RECOMMENDATIONS.MODERNIZATION.BENEFIT_3'),
      ],
    },
    custom: {
      title: t('RECOMMENDATIONS.CUSTOM.TITLE'),
      description: t('RECOMMENDATIONS.CUSTOM.DESCRIPTION'),
      benefits: [
        t('RECOMMENDATIONS.CUSTOM.BENEFIT_1'),
        t('RECOMMENDATIONS.CUSTOM.BENEFIT_2'),
        t('RECOMMENDATIONS.CUSTOM.BENEFIT_3'),
      ],
    },
    seoShopifyAggressive: {
      title: t('RECOMMENDATIONS.SEO_SHOPIFY.TITLE'),
      description: t('RECOMMENDATIONS.SEO_SHOPIFY.DESCRIPTION_AGGRESSIVE'),
      benefits: [
        t('RECOMMENDATIONS.SEO_SHOPIFY.BENEFIT_1'),
        t('RECOMMENDATIONS.SEO_SHOPIFY.BENEFIT_2'),
        t('RECOMMENDATIONS.SEO_SHOPIFY.BENEFIT_3'),
      ],
    },
    seoShopifyFoundation: {
      title: t('RECOMMENDATIONS.SEO_SHOPIFY.TITLE'),
      description: t('RECOMMENDATIONS.SEO_SHOPIFY.DESCRIPTION_FOUNDATION'),
      benefits: [
        t('RECOMMENDATIONS.SEO_SHOPIFY.BENEFIT_1'),
        t('RECOMMENDATIONS.SEO_SHOPIFY.BENEFIT_2'),
        t('RECOMMENDATIONS.SEO_SHOPIFY.BENEFIT_3'),
      ],
    },
    seoCustomAggressive: {
      title: t('RECOMMENDATIONS.SEO_CUSTOM.TITLE'),
      description: t('RECOMMENDATIONS.SEO_CUSTOM.DESCRIPTION_AGGRESSIVE'),
      benefits: [
        t('RECOMMENDATIONS.SEO_CUSTOM.BENEFIT_1'),
        t('RECOMMENDATIONS.SEO_CUSTOM.BENEFIT_2'),
        t('RECOMMENDATIONS.SEO_CUSTOM.BENEFIT_3'),
      ],
    },
    seoCustomFoundation: {
      title: t('RECOMMENDATIONS.SEO_CUSTOM.TITLE'),
      description: t('RECOMMENDATIONS.SEO_CUSTOM.DESCRIPTION_FOUNDATION'),
      benefits: [
        t('RECOMMENDATIONS.SEO_CUSTOM.BENEFIT_1'),
        t('RECOMMENDATIONS.SEO_CUSTOM.BENEFIT_2'),
        t('RECOMMENDATIONS.SEO_CUSTOM.BENEFIT_3'),
      ],
    },
  };
}
