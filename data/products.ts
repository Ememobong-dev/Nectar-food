export type Product = {
    id: string;
    name: string;
    subtitle: string;
    price: string;
    image: any;
    description: string;
  };
  
  export const products: Product[] = [
    {
      id: "1",
      name: "Natural Red Apple",
      subtitle: "1kg, Price",
      price: "$4.99",
      image: require("../assets/images/apple.png"),
      description:
        "Apples are nutritious and refreshing fruits. They are great for healthy snacks, juices, salads, and everyday meals.",
    },
    {
      id: "2",
      name: "Organic Bananas",
      subtitle: "7pcs, Price",
      price: "$4.99",
      image: require("../assets/images/banana.png"),
      description:
        "Fresh organic bananas packed with natural sweetness and energy.",
    },
    {
      id: "3",
      name: "Bell Pepper Red",
      subtitle: "1kg, Price",
      price: "$4.99",
      image: require("../assets/images/pepper.png"),
      description:
        "Crisp red bell peppers perfect for cooking, salads, and sauces.",
    },
    {
      id: "4",
      name: "Ginger",
      subtitle: "250gm, Price",
      price: "$4.99",
      image: require("../assets/images/ginger.png"),
      description:
        "Fresh ginger with a strong aroma, suitable for tea, cooking, and seasoning.",
    },
  ];