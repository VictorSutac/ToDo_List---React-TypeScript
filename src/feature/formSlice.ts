import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  value: string;
}

const initialState: FormState = {
  value: "",
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    clearValue: (state) => {
      state.value = "";
    },
  },
});

export const { setValue, clearValue } = formSlice.actions;
export default formSlice.reducer;
