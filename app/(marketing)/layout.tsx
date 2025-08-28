import { PropsWithChildren } from "react";

type MarketingLayoutProps = PropsWithChildren;

function MarketingLayout({ children }: MarketingLayoutProps) {
  return <div>{children}</div>;
}

export default MarketingLayout;
