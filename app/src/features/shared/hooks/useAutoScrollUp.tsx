import React from "react";
import { useLocation } from "react-router-dom";

const useAutoScrollUp = () => {
  let location = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
  return null;
};

export default useAutoScrollUp;
