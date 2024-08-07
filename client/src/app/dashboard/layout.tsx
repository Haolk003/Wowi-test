import React from "react";
import LoggedInOnly from "@/components/hoc/LoggedInOnly";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <LoggedInOnly>{children}</LoggedInOnly>
    </div>
  );
}
