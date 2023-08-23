import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getRestaurantDishes } from "../../api/restaurantDetails";
import { Dish } from "../../helpers/interfaces";

export const fetchRestaurantDishes = createAsyncThunk(
  "dishes/fetchRestaurants",
  async () => {
    const response = await getRestaurantDishes();
    return response[0];
  }
);

interface RestaurantDetailsState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  categoriesAndDishes: any | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dishes: any | null;
  error: string | null;
  status: string;
}

const initialState: RestaurantDetailsState = {
  categoriesAndDishes: null,
  dishes: null,
  error: null,
  status: "idle",
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

export const { clearRestaurantDetails, setDishes, setError } = restaurantDetailsSlice.actions;

export default restaurantDetailsSlice.reducer;
