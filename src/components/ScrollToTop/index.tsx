import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Prop } from "./types";

const ScrollToTop: React.FC<Prop> = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return <>{children}</>;
};

export default ScrollToTop;
