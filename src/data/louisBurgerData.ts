import { MenuItem, OutletInfo, CustomerReview, GalleryItem } from '../types';

export const OUTLET_INFO: OutletInfo = {
  name: "Louis Burger",
  brandTagline: "A Tribute to Louis Lassen",
  locationName: "Sohna Road, Gurugram",
  address: "Eros City Square Mall, 1st Floor, Sector 49, Sohna Road, Gurugram, Haryana 122018",
  landmark: "Eros City Square Mall, 1st Floor, Sector 49",
  city: "Gurugram",
  pincode: "122018",
  phone: "+91 79000 18580",
  timings: "11:30 AM – 4:00 AM",
  lateNightNote: "Open till 4:00 AM every night for late-night cravings",
  costForTwo: "₹500 – ₹600 for two",
  rating: 4.0,
  totalRatings: "4,900+ verified ratings",
  swiggyUrl: "https://www.swiggy.com/city/gurgaon/louis-burger-sohna-road-sohna-road-rest542247",
  zomatoUrl: "https://www.zomato.com/ncr/restaurants/louis-burger",
  googleMapsUrl: "https://maps.google.com/?q=Louis+Burger+Eros+City+Square+Mall+Sector+49+Gurugram",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.349694435948!2d77.045053!3d28.411693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2285149ea5b3%3A0xb36a32cb8cb3e778!2sEros%20City%20Square%20Mall!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  instagramUrl: "https://instagram.com/louisburgerofficial",
  corporateHq: "Plot No. 825, Udyog Vihar, Phase V, Gurugram – 122016, Haryana, India"
};

export const MENU_CATEGORIES = [
  'All',
  'Signature',
  'Chicken',
  'Vegetarian',
  'Buff & Lamb',
  'Sides & Fries',
  'Beverages & Shakes',
  'Desserts'
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // Signature Luxury Burgers
  {
    id: "louis-grand-royale",
    name: "Louis Grand Royale",
    category: "Signature",
    price: 499,
    description: "Double buff patty, sautéed shimeji mushrooms, black truffle glaze, English mature cheddar, crowned with an authentic 24K edible gold warak leaf atop a cloud-light milk-washed bun.",
    image: "/images/louis_dish_2.webp",
    dietary: "non-veg",
    isBestseller: true,
    isSpecial: true,
    ingredientsHighlight: ["24K Gold Leaf", "Double Buff Patty", "Shimeji Truffle", "Mature Cheddar"],
    tags: ["Gold Warak", "Double Patty", "Signature"]
  },
  {
    id: "truffletake-burger",
    name: "Truffletake Burger",
    category: "Signature",
    price: 399,
    description: "Shiitake & shimeji mushrooms simmered in white truffle glaze, house truffle mayo, aged English cheddar, shaved parmesan, finished with edible gold warak leaf.",
    image: "/images/louis_dish_2.webp",
    dietary: "veg",
    isBestseller: true,
    isSpecial: true,
    ingredientsHighlight: ["Shiitake & Shimeji", "Truffle Mayo", "24K Gold Warak", "Aged English Cheddar"],
    tags: ["Vegetarian Luxury", "Gold Warak", "Truffle"]
  },
  {
    id: "louis-signature-chicken",
    name: "Louis Signature Chicken Burger",
    category: "Chicken",
    price: 399,
    description: "Succulent grilled chicken mince patty basted with house animal sauce, melted mature English cheddar, crisp farm greens, served with our signature truffle mayo dip.",
    image: "/images/louis_hero_craft.webp",
    dietary: "non-veg",
    isBestseller: true,
    ingredientsHighlight: ["Grilled Chicken Mince", "Animal Sauce", "Aged Cheddar", "Truffle Mayo Dip"],
    tags: ["House Special", "Bestseller"]
  },
  {
    id: "louis-fried-chicken",
    name: "The Louis Fried Chicken Burger",
    category: "Chicken",
    price: 379,
    description: "Buttermilk double-fried crispy chicken breast, coated in house fermented artisan hot sauce, fresh iceberg lettuce, dill pickled cucumber and spiced mayo on a toasted milk bun.",
    image: "/images/sohna_road_food_1.jpg",
    dietary: "non-veg",
    isBestseller: true,
    ingredientsHighlight: ["Fermented Hot Sauce", "Buttermilk Fried Chicken", "Pickled Cucumbers"],
    tags: ["Crispy", "Fermented Hot Sauce"]
  },
  {
    id: "korean-fried-chicken",
    name: "Korean Fried Chicken Burger",
    category: "Chicken",
    price: 369,
    description: "Crunchy fried chicken thigh coated in hot & sweet Korean gochujang glaze, house animal sauce, and freshly tossed crunchy coleslaw in a soft milk-washed bun.",
    image: "/images/louis_dish_1.webp",
    dietary: "non-veg",
    isBestseller: true,
    ingredientsHighlight: ["Sweet & Hot Gochujang", "Crisp Coleslaw", "Animal Sauce"],
    tags: ["Spicy Sweet", "Gochujang"]
  },
  {
    id: "grilled-af-chicken",
    name: "Grilled AF Chicken Burger",
    category: "Chicken",
    price: 389,
    description: "Smoky chargrilled chicken breast steak, infused with rich black truffle mayo, melted aged English cheddar and crisp garden lettuce on toasted brioche.",
    image: "/images/louis_hero_craft.webp",
    dietary: "non-veg",
    ingredientsHighlight: ["Chargrilled Chicken Breast", "Black Truffle Mayo", "Aged Cheddar"],
    tags: ["High Protein", "Chargrilled"]
  },
  {
    id: "classic-chicken-burger",
    name: "Classic Chicken Burger",
    category: "Chicken",
    price: 329,
    description: "Golden tender chicken patty, smooth honey mustard glaze, English cheddar slice, fresh tomato, and crisp green lettuce on a cloud-light bun.",
    image: "/images/sohna_road_banner.jpg",
    dietary: "non-veg",
    ingredientsHighlight: ["Honey Mustard", "Melted Cheddar", "Crisp Greens"],
    tags: ["Classic", "Mild"]
  },
  {
    id: "chicken-n-cheese-slims",
    name: "Chicken N Cheese Slims Burger",
    category: "Chicken",
    price: 289,
    description: "House-spiced chicken patty, single melted American cheese slice, signature animal sauce, and quick pickles in our lighter slim-cut brioche.",
    image: "/images/louis_dish_1.webp",
    dietary: "non-veg",
    ingredientsHighlight: ["Spiced Chicken Patty", "Melted Cheese", "Animal Sauce"],
    tags: ["Value Pick", "Slim Cut"]
  },

  // Vegetarian
  {
    id: "truffle-shroom-burger",
    name: "Truffle Shroom Burger",
    category: "Vegetarian",
    price: 399,
    description: "Earthy sautéed shiitake mushrooms, white truffle garlic mayo, mature English cheddar and shredded parmesan on a warm milk-washed bun.",
    image: "/images/louis_dish_2.webp",
    dietary: "veg",
    isBestseller: true,
    ingredientsHighlight: ["Shiitake Shrooms", "White Truffle Mayo", "Parmesan Melt"],
    tags: ["Bestseller", "Truffle"]
  },
  {
    id: "swiss-cottage-cheese",
    name: "Swiss Cottage Cheese Burger",
    category: "Vegetarian",
    price: 335,
    description: "Crispy crusted paneer steak with spicy seasoning, fermented hot sauce, smoked chilli relish, American cheese, roasted onions, and juicy tomatoes.",
    image: "/images/sohna_road_food_2.jpg",
    dietary: "veg",
    isBestseller: true,
    ingredientsHighlight: ["Crispy Paneer Steak", "Smoked Chilli Relish", "American Cheese"],
    tags: ["Paneer", "Spicy"]
  },
  {
    id: "california-avocado",
    name: "California Avocado Burger",
    category: "Vegetarian",
    price: 359,
    description: "Mexican spiced vegetable patty, melted mozzarella, roasted cherry tomato salsa, and creamy hand-scooped fresh Hass avocado spread.",
    image: "/images/louis_dish_1.webp",
    dietary: "veg",
    ingredientsHighlight: ["Fresh Hass Avocado", "Cherry Tomato Salsa", "Mozzarella Melt"],
    tags: ["Avocado", "Fresh"]
  },
  {
    id: "farm-house-burger",
    name: "Farm House Burger",
    category: "Vegetarian",
    price: 319,
    description: "Exotic garden vegetable patty with house spice rub, hot sauce, pink pickled shallots, melted mozzarella, and fresh greens.",
    image: "/images/sohna_road_banner.jpg",
    dietary: "veg",
    ingredientsHighlight: ["Pink Pickled Shallots", "Mozzarella", "Garden Veg Patty"],
    tags: ["Farm Fresh", "Tangy"]
  },
  {
    id: "vegan-gratitude-burger",
    name: "Vegan Gratitude Burger",
    category: "Vegetarian",
    price: 349,
    description: "Plant-forward handmade patty made of slow-roasted beets, black beans, sweet potatoes, jalapeño bits, slow confit tomato, and house vegan garlic aioli.",
    image: "/images/louis_dish_3.webp",
    dietary: "veg",
    ingredientsHighlight: ["Beetroot & Black Bean", "Sweet Potato", "Vegan Garlic Aioli"],
    tags: ["100% Plant-Based", "Confit Tomato"]
  },
  {
    id: "herbivores-burger",
    name: "Herbivores Burger",
    category: "Vegetarian",
    price: 299,
    description: "Wholesome seasonal spiced vegetable patty, spicy house sauce, aged English cheddar melt, and crisp lettuce on our signature bun.",
    image: "/images/louis_sohna_road_official.jpg",
    dietary: "veg",
    ingredientsHighlight: ["Spicy Relish", "English Cheddar", "Spiced Veg Patty"],
    tags: ["Everyday Classic"]
  },

  // Buff & Lamb
  {
    id: "monster-cheeseburger",
    name: "Monster Cheeseburger",
    category: "Buff & Lamb",
    price: 449,
    description: "Heavyweight double buff patty, double mature English cheddar, crispy bacon, house animal sauce, and crunchy dill pickles in a toasted brioche.",
    image: "/images/louis_hero_craft.webp",
    dietary: "non-veg",
    isBestseller: true,
    ingredientsHighlight: ["Double Buff Patty", "Crispy Bacon", "Double Cheddar", "Animal Sauce"],
    tags: ["Double Patty", "Bacon", "Heavyweight"]
  },
  {
    id: "smash-buff-cheese",
    name: "Smash Buff Cheese Burger",
    category: "Buff & Lamb",
    price: 389,
    description: "Smash-seared buff patty with caramelized crispy edges, melted American cheese, griddled onions, pickles, and our signature animal sauce.",
    image: "/images/sohna_road_food_1.jpg",
    dietary: "non-veg",
    ingredientsHighlight: ["Smash Seared Buff", "Griddled Onions", "American Cheese Melt"],
    tags: ["Smash Patty", "Crisp Crust"]
  },
  {
    id: "smash-lamb-cheese",
    name: "Smash Lamb Cheese Burger",
    category: "Buff & Lamb",
    price: 439,
    description: "Finely ground spiced lamb patty seared on high heat, paired with nutty melted Swiss Emmental cheese, sweet caramelized onions, and animal sauce.",
    image: "/images/louis_dish_1.webp",
    dietary: "non-veg",
    ingredientsHighlight: ["Ground Lamb Patty", "Swiss Emmental Cheese", "Caramelized Onions"],
    tags: ["Swiss Emmental", "Spiced Lamb"]
  },
  {
    id: "smash-mutton-cheese",
    name: "Smash Mutton Cheese Burger",
    category: "Buff & Lamb",
    price: 469,
    description: "Rich, tender double mutton smash patty with charred lace edges, melted aged cheddar, spicy relish, and pickled jalapeños.",
    image: "/images/louis_hero_craft.webp",
    dietary: "non-veg",
    ingredientsHighlight: ["Double Mutton Patty", "Lace Crust", "Aged Cheddar"],
    tags: ["Double Mutton", "Spicy Relish"]
  },

  // Sides & Fries
  {
    id: "og-fries",
    name: "Signature 11mm Skin-On OG Fries",
    category: "Sides & Fries",
    price: 179,
    description: "Thick-cut 11mm artisan skin-on russet potatoes, fried golden and crisp on the exterior, fluffy inside, sprinkled with crushed rock sea salt.",
    image: "/images/louis_dish_3.webp",
    dietary: "veg",
    ingredientsHighlight: ["11mm Thick Cut", "Skin-On Russet", "Sea Salt"],
    tags: ["Pillar Item", "11mm Thick"]
  },
  {
    id: "peri-peri-fries",
    name: "Peri Peri Fries",
    category: "Sides & Fries",
    price: 199,
    description: "Our signature 11mm skin-on fries generously tossed with African bird's eye peri-peri spice blend for a sharp, addictive punch.",
    image: "/images/sohna_road_food_2.jpg",
    dietary: "veg",
    isBestseller: true,
    ingredientsHighlight: ["African Bird's Eye Spice", "Skin-On 11mm Fries"],
    tags: ["Bestseller", "Spicy"]
  },
  {
    id: "smoked-bbq-onion-rings",
    name: "Smoked BBQ Onion Rings",
    category: "Sides & Fries",
    price: 189,
    description: "Thick hand-sliced sweet white onions soaked in seasoned buttermilk, coated in crispy panko batter, and served with smoky BBQ dip.",
    image: "/images/louis_dish_3.webp",
    dietary: "veg",
    ingredientsHighlight: ["Sweet White Onion", "Crispy Panko Batter", "Smoked BBQ Sauce"],
    tags: ["Crunchy", "House Dip"]
  },
  {
    id: "korean-chicken-wings",
    name: "Korean Chicken Wings (4 Pcs)",
    category: "Sides & Fries",
    price: 239,
    description: "Big & bold jumbo chicken wings fried extra crisp, tossed in hot & sweet Korean gochujang sauce, topped with toasted sesame seeds and sliced scallions.",
    image: "/images/sohna_road_food_1.jpg",
    dietary: "non-veg",
    isBestseller: true,
    ingredientsHighlight: ["Jumbo Wings", "Korean Gochujang Glaze", "Toasted Sesame"],
    tags: ["Bestseller", "Finger Licking"]
  },
  {
    id: "chicken-popcorn",
    name: "Louis Chicken Popcorn",
    category: "Sides & Fries",
    price: 219,
    description: "Bite-sized tender boneless chicken morsels marinated in garlic herbs, tossed in secret spice rub, and fried to golden crunchy perfection.",
    image: "/images/louis_dish_1.webp",
    dietary: "non-veg",
    ingredientsHighlight: ["Boneless Chicken", "Louis Secret Rub", "Garlic Herbs"],
    tags: ["Snack", "Crispy"]
  },
  {
    id: "chicken-tenders",
    name: "Crispy Chicken Tenders (3 Pcs)",
    category: "Sides & Fries",
    price: 249,
    description: "Three large hand-breaded chicken tenders with crunchy batter, seasoned with Louis house spice blend, served with garlic truffle dip.",
    image: "/images/sohna_road_food_1.jpg",
    dietary: "non-veg",
    ingredientsHighlight: ["Hand-Breaded Tenders", "Garlic Truffle Dip", "House Spices"],
    tags: ["3 Pieces", "Truffle Dip"]
  },

  // Beverages & Shakes
  {
    id: "cold-coffee",
    name: "Signature Cold Coffee",
    category: "Beverages & Shakes",
    price: 199,
    description: "Slow-brewed dark roast espresso blended with creamy vanilla ice cream and chilled milk. Thick, velvety, and energizing.",
    image: "/images/louis_dish_3.webp",
    dietary: "veg",
    ingredientsHighlight: ["Dark Roast Espresso", "Vanilla Bean Ice Cream", "Chilled Milk"],
    tags: ["Cold Brewed", "Thick"]
  },
  {
    id: "belgian-chocolate-shake",
    name: "Belgian Chocolate Shake",
    category: "Beverages & Shakes",
    price: 249,
    description: "Rich dark Belgian chocolate ganache blended with double cream vanilla ice cream and topped with cocoa crunch.",
    image: "/images/sohna_road_banner.jpg",
    dietary: "veg",
    ingredientsHighlight: ["Dark Belgian Chocolate", "Double Cream", "Cocoa Crunch"],
    tags: ["Indulgent", "Chocolate"]
  },
  {
    id: "salted-caramel-shake",
    name: "Salted Caramel Shake",
    category: "Beverages & Shakes",
    price: 239,
    description: "House butterscotch caramel reduction, Maldon sea salt flakes, and rich whole cream blended to silky perfection.",
    image: "/images/louis_sohna_road_official.jpg",
    dietary: "veg",
    ingredientsHighlight: ["Butterscotch Caramel", "Maldon Sea Salt", "Thick Shake"],
    tags: ["Sweet & Salty"]
  },
  {
    id: "coke-zero",
    name: "Coca-Cola Zero Can (330ml)",
    category: "Beverages & Shakes",
    price: 69,
    description: "Chilled 330ml aluminum can of zero-calorie Coca-Cola.",
    image: "/images/louis_dish_3.webp",
    dietary: "veg",
    ingredientsHighlight: ["Zero Sugar", "Chilled Can 330ml"],
    tags: ["Chilled Can"]
  },

  // Desserts
  {
    id: "choco-lava-cake",
    name: "Choco Lava Cake",
    category: "Desserts",
    price: 169,
    description: "Warm individual Belgian chocolate cake with a molten, gooey hot ganache center, dusted with powdered sugar.",
    image: "/images/louis_dish_3.webp",
    dietary: "veg",
    isBestseller: true,
    ingredientsHighlight: ["Molten Belgian Ganache", "Warm Sponge", "Powdered Sugar"],
    tags: ["Molten Center", "Warm"]
  }
];

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: "rev-1",
    author: "Kabir Malhotra",
    location: "Vipul Greens, Sohna Road",
    rating: 5,
    source: "Swiggy",
    quote: "Easily the best gourmet burgers on Sohna Road. The milk-washed bun is insanely soft and the truffle mayo in the Truffletake is on par with fine-dining restaurants.",
    favoriteDish: "Truffletake Burger & Peri Peri Fries",
    date: "Verified Delivery"
  },
  {
    id: "rev-2",
    author: "Ananya Sengupta",
    location: "Sector 49, Gurugram",
    rating: 5,
    source: "Google",
    quote: "Ordered late night at 2:30 AM after work. The food arrived within 30 minutes, packaging was completely tamper-proof, and the Korean Fried Chicken burger still had an incredible crunch.",
    favoriteDish: "Korean Fried Chicken Burger",
    date: "Verified Review"
  },
  {
    id: "rev-3",
    author: "Rohan Verma",
    location: "South City II, Gurugram",
    rating: 4,
    source: "Magicpin",
    quote: "Zorawar Kalra's Massive team knocked it out of the park with Louis Burger. The 11mm skin-on fries have genuine potato substance unlike skinny frozen fries, and the animal sauce is killer.",
    favoriteDish: "Monster Cheeseburger & 11mm OG Fries",
    date: "Verified Diner"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "The Craft Burger Masterpiece",
    caption: "Milk-washed cloud-light buns, aged cheddar, and double seared patties.",
    category: "Burger",
    image: "/images/louis_hero_craft.webp",
    aspect: "landscape"
  },
  {
    id: "gal-2",
    title: "Signature Gold Warak",
    caption: "The limited-edition Louis Grand Royale & Truffletake adorned with 24K edible gold.",
    category: "Craft",
    image: "/images/louis_dish_2.webp",
    aspect: "square"
  },
  {
    id: "gal-3",
    title: "11mm Skin-On Signature Fries",
    caption: "Thick house-cut russets with sea salt and bespoke Louis kraft packaging.",
    category: "Sides",
    image: "/images/louis_dish_3.webp",
    aspect: "portrait"
  },
  {
    id: "gal-4",
    title: "Double Stacked Smash Seared",
    caption: "Seared on screaming hot planchas for ultra-crispy lace edges.",
    category: "Burger",
    image: "/images/louis_dish_1.webp",
    aspect: "square"
  },
  {
    id: "gal-5",
    title: "Sohna Road Outlet Special",
    caption: "Freshly assembled orders at Eros City Square, Sector 49 Gurugram.",
    category: "Outlet",
    image: "/images/louis_sohna_road_official.jpg",
    aspect: "landscape"
  },
  {
    id: "gal-6",
    title: "Crispy Buttermilk Chicken",
    caption: "Fermented hot sauce, pickled cucumber, and house spiced mayo.",
    category: "Burger",
    image: "/images/sohna_road_food_1.jpg",
    aspect: "portrait"
  },
  {
    id: "gal-7",
    title: "Late Night Delivery Pack",
    caption: "Engineered heat-vented boxes keeping every bun cloud-light and fries crispy till 4 AM.",
    category: "Sides",
    image: "/images/sohna_road_food_2.jpg",
    aspect: "landscape"
  },
  {
    id: "gal-8",
    title: "Urban Gurugram After Dark",
    caption: "Fueling late-night hustle across Cyber City, Golf Course Road, and Sohna Road.",
    category: "Craft",
    image: "/images/sohna_road_banner.jpg",
    aspect: "landscape"
  }
];

export const BRAND_PILLARS = [
  {
    number: "01",
    title: "Milk-Washed Buns",
    tagline: "Cloud-Light & Freshly Baked",
    description: "Every bun is custom-baked daily, washed with whole milk before baking for a glossy, cloud-light pillowy texture that never turns soggy under rich sauces."
  },
  {
    number: "02",
    title: "Mature English Cheddar",
    tagline: "Exclusively Sourced",
    description: "No processed plastic squares. We melt genuine aged mature cheddar and imported Swiss Emmental for complex sharp notes and rich pull."
  },
  {
    number: "03",
    title: "11mm Skin-On Fries",
    tagline: "True Potato Substance",
    description: "Cut strictly to 11mm with skin left intact. Twice-fried for a shattering exterior and fluffy baked-potato interior, finished with crushed rock sea salt."
  },
  {
    number: "04",
    title: "Tribute to 1900",
    tagline: "Invented by Louis Lassen",
    description: "Honoring Louis Lassen, who assembled the first hamburger in New Haven in 1900. Crafted by Zorawar Kalra and the culinary innovators at Massive Restaurants."
  }
];
