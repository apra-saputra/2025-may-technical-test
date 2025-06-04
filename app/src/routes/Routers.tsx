import MainLayout from "@/features/shared/components/layouts/MainLayout";
import HomePage from "@/features/home/HomePage";
import { Routes, Route } from "react-router";

export const Routers = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};
