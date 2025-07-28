import { useTranslation } from "react-i18next";
import { getProjectManagementMenu } from "./src/modules/project-management";

import {JSX} from "react";
export interface MenuItem {
    icon: JSX.Element;
    name: string;
    route: string;
    children?: MenuItem[];
}
const localizeMenu = (
    menu: MenuItem[],
    t: (key: string) => string
): MenuItem[] => {
    return menu.map((item) => ({
        ...item,
        name: t(item.name),
        children: item.children ? localizeMenu(item.children, t) : undefined,
    }));
};

export const getMenuConfig = (
    module: string,
    pathname: string,
    darkMode: boolean
): MenuItem[] => {
    const { t } = useTranslation();

    switch (module) {
        case "project-management":
            return localizeMenu(getProjectManagementMenu(pathname, darkMode), t);
        default:
            return [];
    }
};
