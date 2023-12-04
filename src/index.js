import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import { Provider } from "react-redux";
import { store } from "./store/store";

const LazyMenu = React.lazy(() => import("./pages/Menu/Menu"));
const LazyLogin = React.lazy(() => import("./pages/Login/Login"));
const LazyAbout = React.lazy(() => import("./pages/About/About"));
const LazyContact = React.lazy(() => import("./pages/Contact/Contact"));
const LazyCart = React.lazy(() => import("./pages/Cart/Cart"));
const LazyNewProduct = React.lazy(() => import("./pages/NewProduct/NewProduct"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route
        path='menu/:filterBy'
        element={
          <Suspense fallback='Loading...'>
            <LazyMenu />
          </Suspense>
        }
      />
      <Route
        path='about'
        element={
          <Suspense fallback='Loading...'>
            <LazyAbout />
          </Suspense>
        }
      />
      <Route
        path='contact'
        element={
          <Suspense fallback='Loading...'>
            <LazyContact />
          </Suspense>
        }
      />
      <Route
        path='login'
        element={
          <Suspense fallback='Loading...'>
            <LazyLogin />
          </Suspense>
        }
      />
      <Route
        path='cart'
        element={
          <Suspense fallback='Loading..'>
            <LazyCart />
          </Suspense>
        }
      />
      <Route
        path='newProduct'
        element={
          <Suspense fallback='Loading...'>
            <LazyNewProduct />
          </Suspense>
        }
      />
      <Route path='signup' element={<SignUp />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
