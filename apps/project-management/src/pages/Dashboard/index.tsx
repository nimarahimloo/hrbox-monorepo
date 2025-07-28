import { DashboardLayout } from "@/pages/Dashboard/Layout.tsx";
import AppTasksList from "@/components/AppTaskList.tsx";
import { AppDashboardChart } from "@/components/AppDashboardChart.tsx";
import { AppTaskProgressChart } from "@/components/AppTaskProgressChart.tsx";
import { AppCoWorks } from "@/components/AppCoWorks.tsx";


export default function Dashboard() {
  
  return (
    <DashboardLayout
      props={{
        children: (
          <div className="w-full h-full flex gap-3">
            <div className="w-[40%]">
              <AppDashboardChart/>
            </div>
            <div className="w-[30%]">
              <AppTasksList/>
            </div>
            <div className="w-[30%]">
              <div className="flex flex-col gap-3 h-full">
                <div className="h-2/3">
                  <AppTaskProgressChart/>
                </div>
                <div className="h-1/3">
                  <AppCoWorks/>
                </div>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}
