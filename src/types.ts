export interface RoseVariety {
  id: string;
  name: string;
  colorCategory: 'red' | 'pink' | 'white' | 'bicolor' | 'exotic' | 'yellow';
  colorName: string;
  headSizeCm: string; // e.g. "6.0 - 7.0 cm"
  stemLengthsCm: number[]; // e.g. [50, 60, 70, 80, 90, 100]
  vaseLifeDays: number; // e.g. 15
  bloomType: string;
  image: string;
  popularFor: string[];
  description: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  companyName: string;
  country: string;
  city: string;
  flag: string;
  quote: string;
  rating: number;
  importedVolume: string;
}

export interface FreightEstimate {
  boxType: 'QB' | 'HB' | 'EB'; // Quarter Box, Half Box, Full Box
  bunchesPerBox: number;
  stemsPerBunch: number;
  totalStems: number;
}
