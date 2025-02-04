"use client";

import React, { useState, useEffect } from "react";
import { useAppSelector } from "@/store/hook";
import { redirect } from "next/navigation";

const NotLoggedInOnly = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  } else if (user) {
    return redirect("/dashboard");
  } else {
    return <>{children}</>;
  }
};

export default NotLoggedInOnly;
