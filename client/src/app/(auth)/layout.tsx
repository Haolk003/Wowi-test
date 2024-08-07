import NotLoggedInOnly from "@/components/hoc/NotLoggedInOnly";
import React from "react";
import LoggedInOnly from "@/components/hoc/LoggedInOnly";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NotLoggedInOnly>{children}</NotLoggedInOnly>
    </div>
  );
}
