import { PropsWithChildren } from "react";

import Navigation from "./components/Navigation";

type DashboardLayoutProps = PropsWithChildren;

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pl-16 md:pl-64 pt-0 min-h-screen">
        <div className="max-w-6xl mx-auto p-4 md:p-8">{children} </div>
      </main>
    </div>
  );
}
