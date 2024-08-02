export interface Product {
  id: number;
  name: string;
  category: "t-shirt" | "longslive t-shirt" | "sticker" | "knit-cap" | "flask";
  shortDescription: string;
  price: number;
  priceUnit?: string;
  oldPrice?: number;
  link?: string;
  image: string;
}
