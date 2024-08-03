import { products } from "@/constants";

export async function fetchProducts() {
  try {
    // We artificially delay a response for demo purposes.
    // Don't do this in production :)
    console.log("Fetching products data...");
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const data = products;

    console.log("Data fetch completed after 1 second.");

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch products data.");
  }
}

export async function fetchProduct(productName: string) {
  try {
    // We artificially delay a response for demo purposes.
    // Don't do this in production :)
    console.log("Fetching product data...");
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const data = products.find(({ name }) => name === productName);

    console.log("Data fetch completed after 1 second.");

    return data;
  } catch (error) {
    console.error("Failed to fetch product data.:", error);
    // throw new Error("Failed to fetch product data.");
  }
}
