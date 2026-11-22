export interface Stage {
  id: string;
  stageNumber: string;
  title: string;
  brief: string;
  mainImage: string;
  mainImageLabel: string;
  sideImage?: string;
  sideImageLabel?: string;
  subCards?: {
    title: string;
    description: string;
    image: string;
    label?: string;
  }[];
}

export interface Product {
  id: string;
  name: string;
  category: 'spices' | 'areca';
  image: string;
  origin: string;
  description: string;
  grade: string;
  moisture: string;
  packingAvailable: string[];
  specifications: {
    param: string;
    value: string;
  }[];
  organic: boolean;
  fdaCertified: boolean;
  approxPricePerUnit: number; // USD per metric ton for spices or per 1,000 units for areca
  unitLabel: string; // "Metric Ton" or "1k Pieces"
  minOrderQty: number;
}

export interface InquiryFormState {
  fullName: string;
  companyName: string;
  email: string;
  country: string;
  portOfDestination: string;
  notes: string;
  items: {
    productId: string;
    quantity: number;
    packaging: string;
  }[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Metric {
  label: string;
  value: string;
  description: string;
}
