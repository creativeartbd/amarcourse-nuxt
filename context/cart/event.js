import Events from "@/data/events.json";
import { ref } from "vue";
const allEvents = [...Events.events];
function items() {
  if (typeof window !== "undefined") {
    return localStorage.getItem("cartItems");
  }
  return [];
}

export const cartEvents = ref(items()?.length ? JSON.parse(items()) : []);
const updateLocalStorage = (val) => {
  if (typeof window !== "undefined") {
    localStorage?.setItem("cartItems", JSON.stringify(cartEvents.value));
  }
};
export const setCartEvents = (val) => {
  cartEvents.value = val;
  updateLocalStorage(val);
  document.getElementById("cart")?.classList.add("cart-sidenav-menu-active");
  document.getElementById("cartContent")?.classList.add("side-menu-active");
};

export const addEventsToCart = (id) => {
  if (!cartEvents.value.filter((elm) => elm.id == id)[0]) {
    const item = {
      ...allEvents.filter((elm) => elm.id == id)[0],
      quantity: 1,
    };

    setCartEvents([...cartEvents.value, item]);
  }
};

export const removeFromEventCart = (id) => {
  cartEvents.value = cartEvents.value.filter((elm) => elm.id != id);
  updateLocalStorage(cartEvents.value);
};
export const increaseQuantityEvent = (i) => {
  const item = cartEvents.value[i];
  item.quantity += 1;
  const items = [...cartEvents.value];
  items[i] = item;
  cartEvents.value = items;
  updateLocalStorage();
};
export const decreaseQuantityEvent = (i) => {
  const item = cartEvents.value[i];
  if (item.quantity > 1) {
    item.quantity -= 1;
    const items = [...cartEvents.value];
    items[i] = item;
    cartEvents.value = items;
    updateLocalStorage();
  }
};
export const isAddedToCartEvents = (id) => {
  if (cartEvents.value.filter((elm) => elm.id == id)[0]) {
    return true;
  }
  return false;
};
export const totalPriceEvent = computed(() =>
  cartEvents.value.reduce(
    (accumulator, currentValue) =>
      accumulator + (currentValue.price / 1) * (currentValue.quantity / 1),
    0
  )
);
