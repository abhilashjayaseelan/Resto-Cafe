import { MenuCategory } from "./interfaces";

export const findDishes = (data: Array<MenuCategory>, cat: string) => {
    const matchedCategory = data.find(details => details.menu_category === cat);
    return matchedCategory ? matchedCategory : null;
}

