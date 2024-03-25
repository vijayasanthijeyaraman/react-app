import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import AboutPage from "./pages/About";
import ChatBotPage from "./pages/Chatbot";
import HomePage from "./pages/Home";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="chatbot" element={<ChatBotPage />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
