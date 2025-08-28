import { PropsWithChildren } from "react";

type DashboardLayoutProps = PropsWithChildren;

function DashboardLayout({ children }: DashboardLayoutProps) {
  return <div>{children}</div>;
}

export default DashboardLayout;
