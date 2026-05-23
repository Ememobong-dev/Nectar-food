export type Product = {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  image: any;
  description: string;
  category: string;
};

export const products: Product[] = [
  {
    id: "1",
    category: "Beverages",
    name: "Natural Red Apple",
    subtitle: "1kg, Price",
    price: "$4.99",
    image: require("../assets/images/apple.png"),
    description:
      "Apples are nutritious and refreshing fruits. They are great for healthy snacks, juices, salads, and everyday meals.",
  },
  {
    id: "2",
    category: "Beverages",
    name: "Organic Bananas",
    subtitle: "7pcs, Price",
    price: "$4.99",
    image: require("../assets/images/banana.png"),
    description:
      "Fresh organic bananas packed with natural sweetness and energy.",
  },
  {
    id: "3",
    category: "Beverages",
    name: "Bell Pepper Red",
    subtitle: "1kg, Price",
    price: "$4.99",
    image: require("../assets/images/pepper.png"),
    description:
      "Crisp red bell peppers perfect for cooking, salads, and sauces.",
  },
  {
    id: "4",
    category: "Beverages",
    name: "Ginger",
    subtitle: "250gm, Price",
    price: "$4.99",
    image: require("../assets/images/ginger.png"),
    description:
      "Fresh ginger with a strong aroma, suitable for tea, cooking, and seasoning.",
  },
  {
    id: "5",
    name: "Diet Coke",
    subtitle: "355ml, Price",
    price: "$1.99",
    image: require("../assets/images/coke.png"),
     description:
      "Fresh ginger with a strong aroma, suitable for tea, cooking, and seasoning.",
    category: "Beverages",
  },
  {
    id: "6",
    name: "Sprite Can",
    subtitle: "325ml, Price",
    price: "$1.50",
    image: require("../assets/images/sprite.png"),
     description:
      "Fresh ginger with a strong aroma, suitable for tea, cooking, and seasoning.",
    category: "Beverages",
  },
  {
    id: "7",
    name: "Egg Chicken Red",
    subtitle: "4pcs, Price",
    price: "$1.99",
    image: require("../assets/images/egg.png"),
     description:
      "Fresh ginger with a strong aroma, suitable for tea, cooking, and seasoning.",
    category: "Dairy & Eggs",
  },
  {
    id: "8",
    name: "Egg Pasta",
    subtitle: "30gm, Price",
    price: "$15.99",
    image: require("../assets/images/pasta.png"),
     description:
      "Fresh ginger with a strong aroma, suitable for tea, cooking, and seasoning.",
    category: "Groceries",
  },
];