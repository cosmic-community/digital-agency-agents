// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Service object type
export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    service_name: string;
    short_description: string;
    full_description?: string;
    icon?: {
      url: string;
      imgix_url: string;
    };
    starting_price?: string;
    key_features?: string[];
  };
}

// Team Member object type
export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    full_name: string;
    job_title: string;
    photo?: {
      url: string;
      imgix_url: string;
    };
    bio?: string;
    email?: string;
    linkedin_url?: string;
    twitter_handle?: string;
  };
}

// Testimonial object type
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name: string;
    client_photo?: {
      url: string;
      imgix_url: string;
    };
    company_name: string;
    job_title?: string;
    testimonial_text: string;
    rating?: {
      key: string;
      value: string;
    };
    featured?: boolean;
  };
}

// Case Study object type
export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    project_name: string;
    client_name: string;
    industry?: string;
    project_overview: string;
    challenge?: string;
    solution?: string;
    results?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    project_gallery?: Array<{
      url: string;
      imgix_url: string;
    }>;
    services_used?: Service[];
    testimonial?: Testimonial;
  };
}

// API response type
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}