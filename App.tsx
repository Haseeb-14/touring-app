import React, { useEffect, useState } from "react";
import AppNavigator from "./src/navigation";
import { Provider } from "react-redux";
import { persistor, store } from "./src/redux/store";
import BootSplash from "react-native-bootsplash";
import { PersistGate } from "redux-persist/integration/react";
import { initializeI18n } from "./src/localization/i18";
import { Text, View } from "react-native";

function App(): React.JSX.Element {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  useEffect(() => {
    const initialize = async () => {
      await initializeI18n(); // Wait for i18n initialization
      setIsInitialized(true); // Set state to render the app after initialization
    };

    initialize();

    const init = async () => {
      // …do multiple sync or async tasks
    };
    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log("BootSplash has been hidden successfully");
    });
  }, []);

  if (!isInitialized) {
    return (
      <View>
        <Text>Initializing...</Text>
      </View>
    );
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
}

export default App;
