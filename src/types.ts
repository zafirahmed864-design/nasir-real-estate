export interface Property {
  id: string;
  title: string;
  category: string;
  location: string;
  areaDetail: string;
  purpose: 'For Sale' | 'For Investment' | 'New Development';
  priceDisplay: string;
  priceCategory: 'under-1.5' | '1.5-3.5' | 'above-3.5' | 'commercial';
  bedrooms: number | null;
  bathrooms: number | null;
  area: string;
  featured: boolean;
  shortDescription: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  features: string[];
  badge: string;
}

export interface FilterState {
  location: string;
  propertyType: string;
  purpose: string;
  priceRange: string;
}

export interface InquiryFormData {
  fullName: string;
  phone: string;
  propertyRequirement: string;
  preferredLocation: string;
  message: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
  inquiryText: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  detail: string;
}
