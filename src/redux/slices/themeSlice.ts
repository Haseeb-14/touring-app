// themeSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Appearance, ColorSchemeName } from 'react-native';

interface ThemeState {
  mode: ColorSchemeName; // ColorSchemeName can be 'light', 'dark', or null
}
// Get the system default theme (light/dark)
const initialTheme: ColorSchemeName = Appearance.getColorScheme();
const initialState: ThemeState = {
  mode: initialTheme || 'light', // Default to 'light' if no system preference
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ColorSchemeName>) => {
      state.mode = action.payload; // Set theme based on action payload
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
