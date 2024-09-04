import Shop from "@/data/shop.json";
import { ref } from "vue";
const allProducts = [...Shop.shop];
function items() {
  if (typeof window !== "undefined") {
    return localStorage.getItem("cartProducts");
  }
  return [];
}

export const cartProducts = ref(items()?.length ? JSON.parse(items()) : []);
const updateLocalStorage = (val) => {
  if (typeof window !== "undefined") {
    localStorage?.setItem("cartProducts", JSON.stringify(cartProducts.value));
  }
};
export const setCartProducts = (val) => {
  cartProducts.value = val;
  updateLocalStorage(val);
  document.getElementById("cart")?.classList.add("cart-sidenav-menu-active");
  document.getElementById("cartContent")?.classList.add("side-menu-active");
};

export const addProductsToCart = (id) => {
  if (!cartProducts.value.filter((elm) => elm.id == id)[0]) {
    const item = {
      ...allProducts.filter((elm) => elm.id == id)[0],
      quantity: 1,
    };

    setCartProducts([...cartProducts.value, item]);
  }
};

export const addProductsToCartWithQuantity = (id, quantity) => {
  if (!cartProducts.value.filter((elm) => elm.id == id)[0]) {
    const item = {
      ...allProducts.filter((elm) => elm.id == id)[0],
      quantity: quantity ? quantity : 1,
    };

    setCartProducts([...cartProducts.value, item]);
  }
};

export const removeFromProductCart = (id) => {
  cartProducts.value = cartProducts.value.filter((elm) => elm.id != id);
  updateLocalStorage(cartProducts.value);
};
export const increaseQuantityProduct = (i) => {
  const item = cartProducts.value[i];
  item.quantity += 1;
  const items = [...cartProducts.value];
  items[i] = item;
  cartProducts.value = items;
  updateLocalStorage();
};
export const decreaseQuantityProduct = (i) => {
  const item = cartProducts.value[i];
  if (item.quantity > 1) {
    item.quantity -= 1;
    const items = [...cartProducts.value];
    items[i] = item;
    cartProducts.value = items;
    updateLocalStorage();
  }
};
export const isAddedToCartProducts = (id) => {
  if (cartProducts.value.filter((elm) => elm.id == id)[0]) {
    return true;
  }
  return false;
};
export const totalPriceProduct = computed(() =>
  cartProducts.value.reduce(
    (accumulator, currentValue) =>
      accumulator + (currentValue.price / 1) * (currentValue.quantity / 1),
    0
  )
);
