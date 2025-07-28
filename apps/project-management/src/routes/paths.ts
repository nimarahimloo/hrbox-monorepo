function path(root: string, subPath: string) {
  return `${root}${subPath}`;
}

const ROOTS_PAYROLL = "/project-management";

export const PATH_PAYROLL = {
  Root: ROOTS_PAYROLL,
  Dashboard: path(ROOTS_PAYROLL, "/dashboard"),
};
