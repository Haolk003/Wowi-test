"use client";

import React from "react";
import { useLoadUserQuery } from "@/services/api";
import GradientCircularProgress from "@/components/loader/Loader";
const Custom: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoading } = useLoadUserQuery(undefined);
  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen ">
          <GradientCircularProgress />
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Custom;
