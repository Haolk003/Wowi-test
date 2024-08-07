import React from "react";

import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/sidebar/Sidebar";
import CryptoHeader from "@/components/dashboard/CryptoHeader";
import Chart from "@/components/dashboard/chart/Chart";
import CryptoTractionForm from "@/components/dashboard/CryptoTransactionForm";
import OrderActivities from "@/components/dashboard/OrderActitvties";
const DashboardPage = () => {
  return (
    <div>
      <div>
        <Sidebar />
        <div className="w-[calc(100%-240px)] ml-[240px]">
          <Header />
          <div className="p-5 bg-body min-h-screen">
            <CryptoHeader />
            <div className="flex gap-4 mt-5">
              <Chart />
              <CryptoTractionForm />
            </div>
            <OrderActivities />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
