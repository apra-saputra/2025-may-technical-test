import MainLayout from "@/features/shared/components/layouts/MainLayout";
import HomePage from "@/features/home/HomePage";
import { Routes, Route } from "react-router";
import DetailDairyPage from "@/features/detailDairy/DetailDairyPage";

export const Routers = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/details" element={<DetailDairyPage />} />
        <Route path="/details/:id" element={<DetailDairyPage />} />
      </Route>
    </Routes>
  );
};
