"use client";
import React, { useEffect } from "react";
import type { ReactNode } from "react";
import Preloader from "./Preloader";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const AppWrapper = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    require("/public/js/bootstrap.min.js");
  });
  return (
    <div className="page-wrapper">
      <Preloader />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
