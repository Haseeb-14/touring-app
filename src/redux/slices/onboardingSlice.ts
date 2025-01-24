import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppDispatch } from '../store'; // Assuming you have your store setup

// Define the state interface
interface OnboardingState {
  isFirstLaunch: boolean;
}
// Initial state
const initialState: OnboardingState = {
  isFirstLaunch: true, // Default to true, assuming it's the first launch
};
// Create the slice
const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setFirstLaunch: (state, action: PayloadAction<boolean>) => {
      state.isFirstLaunch = action.payload; // Set isFirstLaunch state
    },
  },
});
// Action creators
export const { setFirstLaunch } = onboardingSlice.actions;
export default onboardingSlice.reducer;
