import { ProductSpec } from '../types';

export interface BabyDiaperProduct extends ProductSpec {
  imageEko: string;
  imageJumbo: string;
}

export interface BabyTwinProduct {
  id: string;
  size: string;
  weight: string;
  count: number;
  bagsPerBale: number;
  image: string;
}

export interface AdultDiaperProduct {
  id: string;
  size: string;
  waist: string;
  count: number;
  bagsPerBale: number;
  image: string;
}

export interface AdultPantsProduct {
  id: string;
  size: string;
  waist: string;
  count: number;
  bagsPerBale: number;
  image: string;
}

export interface WetWipesProduct {
  id: string;
  type: string;
  count: number;
  boxCount: number;
  image: string;
}

export const babyDiapersList: BabyDiaperProduct[] = [
  { id: "NB", size: "Newborn", weight: "2-5", count: 84, bagsPerBale: 4, imageEko: "/assets/baby-diapers/newborn-eko.webp", imageJumbo: "/assets/baby-diapers/newborn-jumbo.webp" },
  { id: "S", size: "Mini", weight: "3-6", count: 76, bagsPerBale: 4, imageEko: "/assets/baby-diapers/mini-eko.webp", imageJumbo: "/assets/baby-diapers/mini-jumbo.webp" },
  { id: "M", size: "Midi", weight: "5-9", count: 68, bagsPerBale: 4, imageEko: "/assets/baby-diapers/midi-eko.webp", imageJumbo: "/assets/baby-diapers/midi-jumbo.webp" },
  { id: "L", size: "Maxi", weight: "8-18", count: 60, bagsPerBale: 4, imageEko: "/assets/baby-diapers/maxi-eko.webp", imageJumbo: "/assets/baby-diapers/maxi-jumbo.webp" },
  { id: "XL", size: "Junior", weight: "11-25", count: 52, bagsPerBale: 4, imageEko: "/assets/baby-diapers/junior-eko.webp", imageJumbo: "/assets/baby-diapers/junior-jumbo.webp" },
  { id: "XXL", size: "X-Large", weight: "15+", count: 44, bagsPerBale: 4, imageEko: "/assets/baby-diapers/x-large-eko.webp", imageJumbo: "/assets/baby-diapers/x-large-jumbo.webp" },
];

export const babyTwinList: BabyTwinProduct[] = [
  { id: "twin-NB", size: "Newborn", weight: "2-5", count: 48, bagsPerBale: 4, image: "/assets/baby-twin/newborn.png" },
  { id: "twin-S", size: "Mini", weight: "3-6", count: 44, bagsPerBale: 4, image: "/assets/baby-twin/mini.png" },
  { id: "twin-M", size: "Midi", weight: "5-9", count: 40, bagsPerBale: 4, image: "/assets/baby-twin/midi.png" },
  { id: "twin-L", size: "Maxi", weight: "8-18", count: 36, bagsPerBale: 4, image: "/assets/baby-twin/maxi.png" },
  { id: "twin-XL", size: "Junior", weight: "11-25", count: 32, bagsPerBale: 4, image: "/assets/baby-twin/junior.png" },
  { id: "twin-XXL", size: "X-Large", weight: "15+", count: 28, bagsPerBale: 4, image: "/assets/baby-twin/xlarge.png" },
];

export const adultDiapersList: AdultDiaperProduct[] = [
  { id: "adult-s", size: "Small", waist: "50-85 cm", count: 30, bagsPerBale: 4, image: "/assets/adult-tape/s-30.png" },
  { id: "adult-m", size: "Medium", waist: "85-125 cm", count: 30, bagsPerBale: 4, image: "/assets/adult-tape/m-30.png" },
  { id: "adult-l", size: "Large", waist: "100-150 cm", count: 30, bagsPerBale: 4, image: "/assets/adult-tape/l-30.png" },
  { id: "adult-xl", size: "Extra Large", waist: "120-160 cm", count: 30, bagsPerBale: 4, image: "/assets/adult-tape/xl-30.png" },
];

export const adultPantsList: AdultPantsProduct[] = [
  { id: "pants-s", size: "Small", waist: "50-85 cm", count: 15, bagsPerBale: 4, image: "/assets/adult-pants/s-15.jpeg" },
  { id: "pants-m", size: "Medium", waist: "85-125 cm", count: 30, bagsPerBale: 4, image: "/assets/adult-pants/m-30.jpeg" },
  { id: "pants-l", size: "Large", waist: "100-150 cm", count: 30, bagsPerBale: 4, image: "/assets/adult-pants/l-30.jpeg" },
];

export const wetWipesList: WetWipesProduct[] = [
  { id: "wipes-72", type: "Ultra Sensitive 72", count: 72, boxCount: 24, image: "/assets/wet-wipes/72.png" },
  { id: "wipes-102", type: "Ultra Sensitive 102", count: 102, boxCount: 24, image: "/assets/wet-wipes/102.png" },
  { id: "wipes-120", type: "Ultra Sensitive 120", count: 120, boxCount: 24, image: "/assets/wet-wipes/120.png" },
];
