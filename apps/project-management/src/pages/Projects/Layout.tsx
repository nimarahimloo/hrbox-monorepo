import { HRBOXLayout } from "@/layouts/HRBOXLayout.tsx";
import HRBOXContentLayout from "@/layouts/HRBOXContentLayout.tsx";

export const ProjectLayout = ({ props }: { props: any }) => {
  const { children } = props;

  return (
    <HRBOXLayout
      props={{
        children: (
          <div className="flex gap-[26px] shadow-tight h-full min-h-fit">
            <HRBOXContentLayout props={{ children }} />
          </div>
        ),
      }}
    />
  );
};
