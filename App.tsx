import { store } from "@/store";
import { Provider } from "react-redux";
import Application from "./Application";
import { RNUIDevKitProvider } from "react-native-ui-devkit";
export default function App() {
  return (
    <Provider store={store}>
      <RNUIDevKitProvider theme="auto" backgroundColor="both">
        <Application />
      </RNUIDevKitProvider>
    </Provider>
  );
}
