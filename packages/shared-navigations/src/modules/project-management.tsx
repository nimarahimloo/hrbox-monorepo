import { Index } from "@/icons/Index";
import {JSX} from "react";
export interface MenuItem {
    icon: JSX.Element;
    name: string;
    route: string;
    children?: MenuItem[];
}
export const getProjectManagementMenu = (pathname: string, darkMode: boolean): MenuItem[] => {
    const getColor = (route: any) => {
        const isActive = pathname.startsWith(route);
        return darkMode ? (isActive ? "#DDBA69" : "#fff") : isActive ? "#0A9AD7" : "#04070E";
    };

    return [
        {
            icon: <Index.LinearChart color={getColor("/payroll/dashboard")} />,
    name: "dashboard",
        route: "/payroll/dashboard",
},
    {
        icon: <Index.Code color={getColor("/payroll/judgment-issued")} />,
        name: "judgmentIssued",
            route: "/payroll/judgment-issued",
    },
];
};
