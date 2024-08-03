import { products } from "@/constants";

export async function fetchProducts() {
  try {
    // We artificially delay a response for demo purposes.
    // Don't do this in production :)
    console.log("Fetching revenue data...");
    await new Promise((resolve) => setTimeout(resolve, 5000));

    const data = products;

    console.log("Data fetch completed after 2 seconds.");

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch products data.");
  }
}
