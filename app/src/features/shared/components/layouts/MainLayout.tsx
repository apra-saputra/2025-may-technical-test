import { Outlet } from "react-router";
import Navbar from "../Navbar";
import { Suspense } from "react";
import SplashScreen from "../SplashScreen";
import Footer from "../Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<SplashScreen />}>
        <main className="w-full min-h-[90dvh] flex flex-col items-center mt-28 mx-auto">
          <div className="container">
            <Outlet />
          </div>
        </main>
      </Suspense>
      <Footer />
    </>
  );
};

export default MainLayout;
