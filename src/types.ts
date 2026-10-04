export type DietaryType = 'veg' | 'non-veg';

export interface MenuItem {
  id: string;
  name: string;
  category: 'Signature' | 'Chicken' | 'Vegetarian' | 'Buff & Lamb' | 'Sides & Fries' | 'Beverages & Shakes' | 'Desserts';
  price: number;
  description: string;
  image: string;
  dietary: DietaryType;
  tags?: string[];
  isBestseller?: boolean;
  isSpecial?: boolean;
  ingredientsHighlight?: string[];
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

export interface OutletInfo {
  name: string;
  brandTagline: string;
  locationName: string;
  address: string;
  landmark: string;
  city: string;
  pincode: string;
  phone: string;
  timings: string;
  lateNightNote: string;
  costForTwo: string;
  rating: number;
  totalRatings: string;
  swiggyUrl: string;
  zomatoUrl: string;
  googleMapsEmbed: string;
  googleMapsUrl: string;
  instagramUrl: string;
  corporateHq: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  source: 'Google' | 'Swiggy' | 'Magicpin';
  quote: string;
  favoriteDish: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  category: 'Burger' | 'Sides' | 'Outlet' | 'Craft';
  image: string;
  aspect: 'square' | 'portrait' | 'landscape';
}
