import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { DARK_THEME, LIGHT_THEME } from "../utlis/colors";

export const useTheme = (): any => {
  const { mode } = useSelector((state: RootState) => state.theme);
  const theme : any = mode === 'light' ? LIGHT_THEME : DARK_THEME;
  
  return theme;
};
