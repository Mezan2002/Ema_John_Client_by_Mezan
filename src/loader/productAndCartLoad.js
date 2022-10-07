import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoad = async () => {
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  const savedCart = getStoredCart();
  const orderCart = [];
  for (const id in savedCart) {
    const matchWithId = products.find((product) => product.id === id);
    if (matchWithId) {
      const quantity = savedCart[id];
      matchWithId.quantity = quantity;
      orderCart.push(matchWithId);
    }
  }
  return { products, orderCart };
};
