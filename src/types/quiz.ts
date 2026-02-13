export type QuestionId =
  | 'has_old_site'
  | 'update_type'
  | 'site_type'
  | 'page_count'
  | 'customer_goal'
  | 'competitors';

export interface QuizAnswers {
  has_old_site?: 'yes' | 'no';
  update_type?: 'legacy_update' | 'new_features';
  site_type?: 'landing_page' | 'webstore';
  page_count?: '1-10' | '10-25' | '25+';
  customer_goal?: 'existing_customers' | 'new_customers';
  competitors?: 'beat_competitors' | 'low_comp';
}

export interface QuizOption {
  label: string;
  value: string;
  sublabel?: string;
}

export interface QuizQuestion {
  id: QuestionId;
  question: string;
  options: QuizOption[];
  conditionKey?: keyof QuizAnswers;
  conditionValue?: string;
}

export interface ServiceRecommendation {
  title: string;
  description: string;
  benefits: string[];
}

export interface QuizResult {
  primaryService: ServiceRecommendation;
  secondaryService?: ServiceRecommendation;
}
