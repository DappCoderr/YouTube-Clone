import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "../utils/store";

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Body />
      </div>
    </Provider>
  );
}
