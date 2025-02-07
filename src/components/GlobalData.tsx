interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export const cartItems: CartItem[] = [];

export const handleAddToCart = (
  product: { id: number; name: string; price: number },
  quantity: number
) => {
  const existingItemIndex = cartItems.findIndex(
    (item) => item.id === product.id
  );

  if (existingItemIndex !== -1) {
    cartItems[existingItemIndex].quantity += quantity;
  } else {
    cartItems.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
    });
  }

  console.log(cartItems);
};
