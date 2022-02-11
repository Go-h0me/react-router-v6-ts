import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Invoices from "./pages/Invoices";
import Invoice from "./pages/Invoice";
import Expenses from "./pages/Expenses";
import NotFound from "./pages/NotFound";
import NewInvoice from "./pages/NewInvoice";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='invoices' element={<Invoices />}>
            <Route
              index
              element={
                <h2 style={{ padding: '1rem' }}>Please select an Invoice</h2>
              }
            />
            <Route path=':invoiceId' element={<Invoice />} />
              <Route path="new" element={<NewInvoice/>} />
          
          </Route>
          <Route path='expenses' element={<Expenses />} />
          {/*No other routes match */}

          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
