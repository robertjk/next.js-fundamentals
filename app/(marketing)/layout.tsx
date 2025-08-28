interface MarketingLayoutProps {
  children: React.ReactNode;
}

function MarketingLayout({ children }: MarketingLayoutProps) {
  return <div>{children}</div>;
}

export default MarketingLayout;
