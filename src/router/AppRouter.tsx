import { HomePage } from "@/home/pages/HomePage";
import { ProductRoutes } from "@/products/routes/ProductRoutes";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<ProductRoutes />} />
    </Routes>
  );
};
