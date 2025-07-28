import { Button } from "@heroui/react";
import { useNavigate } from "react-router-dom";

export default function PageHeaderTab({ props }: { props: any }) {
  const { icon, title, path, isActive } = props;
  const navigate = useNavigate();

  const classNames = `w-fit flex gap-2 px-3 py-1 !rounded-4 ${isActive ? "text-white bg-primary dark:bg-surface-200" : "text-secondary-1000 bg-transparent dark:text-white"}`;
  const handleNavigatePage = (path: string) => {
    if (!path) return;
    navigate(path.startsWith("/") ? path : "/" + path);
  };

  return (
    <Button className={classNames} onPress={() => handleNavigatePage(path)}>
      <span>{icon}</span>
      <span className="text-xl">{title}</span>
    </Button>
  );
}
