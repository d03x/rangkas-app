import { store } from "@/store";
import { Provider } from "react-redux";
import Application from "./Application";
export default function App() {
  return (
    <Provider store={store}>
        <Application />
    </Provider>
  );
}
