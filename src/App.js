import logo from "./logo.svg";
import "./App.css";
import Product from "./Pages/Product";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../src/store/index";
import Cart from "./Pages/Cart";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <div className="font-[poppins] tracking-wider">
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={true}
          pauseOnFocusLoss={false}
          transition={Zoom}
        />
        <Routes>
          <Route element={<Product />} path="/" />
          <Route element={<Cart />} path="/cart" />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
