let cart = [];
if (localStorage.getItem("cart")) {
  cart = JSON.parse(localStorage.getItem("cart"));
}

export const addToCart = (newProduct) => {
  const existProduct = cart.find((item) => item.id == newProduct.id);
  if (!existProduct) {
    cart.push(newProduct);
  } else {
    existProduct.quantity += newProduct.quantity;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};
export const increaseQuantity = (id, next) => {
  cart.find((item) => item.id == id).quantity++;
  localStorage.setItem("cart", JSON.stringify(cart));
  next();
};
export const decreaseQuantity = (id, next) => {
  const currentProduct = cart.find((item) => item.id == id);
  currentProduct.quantity--;
  if (currentProduct.quantity < 1) {
    const confirm = window.confirm("Bạn có muốn xóa không");
    if (confirm) {
      cart = cart.filter((item) => item.id !== id);
    } else {
      cart.find((e) => e.id == id).quantity = 1;
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  next();
};
export const removeItemInCart = (id, next) => {
  const confirm = window.confirm("Bạn có muốn xóa không");
  if (confirm) {
    cart = cart.filter((item) => item.id != id);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  next();
};
