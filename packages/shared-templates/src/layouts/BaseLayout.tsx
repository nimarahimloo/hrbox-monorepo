import {AppHeader , AppDocs , AppMessengerButton , AppSideBar} from "@hrbox/shared-components/src";
import { GetMenuConfig } from "@/helpers/menuConfig.tsx";
import { useDarkMode } from "@/context/DarkMode.tsx";

export const HRBOXLayout = ({ props }: { props: any }) => {
    const { children } = props;
    const { darkMode } = useDarkMode();

    return (
        <>
            <AppHeader />
            <div className="flex flex-col h-full gap-4">
                <div className="flex gap-4 h-full min-h-fit">
                    <AppSideBar menu={GetMenuConfig(location.pathname, darkMode)} />
                    <div className="flex-1 min-h-fit h-full">{children}</div>
                </div>
                <div className="flex flex-col h-full min-h-fit gap-8 w-full">
                    <AppDocs />
                </div>
                <div/>
                <AppMessengerButton/>
            </div>
        </>
    );
};
