import CourseDetails from "@/data/course-details/courseData.json";
import { ref } from "vue";
const allCourses = [
  ...CourseDetails.courseDetails,
  ...CourseDetails.courseTab,
  ...CourseDetails.languageAcademy,
];
function items() {
  if (typeof window !== "undefined") {
    return localStorage.getItem("cartItems");
  }
  return [];
}

export const cartCourses = ref(items()?.length ? JSON.parse(items()) : []);
const updateLocalStorage = (val) => {
  if (typeof window !== "undefined") {
    localStorage?.setItem("cartItems", JSON.stringify(cartCourses.value));
  }
};
export const setCartCourses = (val) => {
  cartCourses.value = val;
  updateLocalStorage(val);
  document.getElementById("cart")?.classList.add("cart-sidenav-menu-active");
  document.getElementById("cartContent")?.classList.add("side-menu-active");
};

export const addCoursesToCart = (id) => {
  if (!cartCourses.value.filter((elm) => elm.id == id)[0]) {
    const item = {
      ...allCourses.filter((elm) => elm.id == id)[0],
      quantity: 1,
    };

    setCartCourses([...cartCourses.value, item]);
  }
};

export const removeFromCourseCart = (id) => {
  cartCourses.value = cartCourses.value.filter((elm) => elm.id != id);
  updateLocalStorage(cartCourses.value);
};
export const increaseQuantityCourse = (i) => {
  const item = cartCourses.value[i];
  item.quantity += 1;
  const items = [...cartCourses.value];
  items[i] = item;
  cartCourses.value = items;
  updateLocalStorage();
};
export const decreaseQuantityCourse = (i) => {
  const item = cartCourses.value[i];
  if (item.quantity > 1) {
    item.quantity -= 1;
    const items = [...cartCourses.value];
    items[i] = item;
    cartCourses.value = items;
    updateLocalStorage();
  }
};
export const isAddedToCartCourses = (id) => {
  if (cartCourses.value.filter((elm) => elm.id == id)[0]) {
    return true;
  }
  return false;
};
export const totalPriceCourse = computed(() =>
  cartCourses.value.reduce(
    (accumulator, currentValue) =>
      accumulator + (currentValue.price / 1) * (currentValue.quantity / 1),
    0
  )
);
