import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  selectedGenre: string | null;
}

const initialState: FilterState = {
  selectedGenre: null,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setGenre: (state, action: PayloadAction<string | null>) => {
      state.selectedGenre = action.payload;
    },
  },
});

export const { setGenre } = filterSlice.actions;

export default filterSlice.reducer;
