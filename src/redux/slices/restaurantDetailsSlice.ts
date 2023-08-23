import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getRestaurantDishes } from "../../api/restaurantDetails";
import { Dish, TableMenuList } from "../../helpers/interfaces";

export const fetchRestaurantDishes = createAsyncThunk(
  "dishes/fetchRestaurants",
  async () => {
    const response = await getRestaurantDishes();
    return response[0];
  }
);

interface RestaurantDetailsState {
  categoriesAndDishes: TableMenuList | null;
  dishes: Dish[] | null;
  error: string | null;
  status: string;
  cartCount: number;
}

const initialState: RestaurantDetailsState = {
  categoriesAndDishes: null,
  dishes: null,
  error: null,
  status: "idle",
  cartCount: 0,
};

const restaurantDetailsSlice = createSlice({
  name: "restaurantDetails",
  initialState,
  reducers: {
    clearRestaurantDetails: (state) => {
      state.categoriesAndDishes = null;
    },
    setDishes: (state, action: PayloadAction<Dish[]>) => {
      state.dishes = action.payload;
    },
    setCount: (state, action: PayloadAction<number>) => {
      state.cartCount = action.payload;
    },
    clearCount: (state) => {
      state.cartCount = 0;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurantDishes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRestaurantDishes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categoriesAndDishes = action.payload;
      })
      .addCase(fetchRestaurantDishes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });
  },
});

export const { clearRestaurantDetails, setDishes, setCount, clearCount, setError } =
  restaurantDetailsSlice.actions;
export default restaurantDetailsSlice.reducer;
