import { ReactNode } from "react";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(37,99,235,0.22),transparent_32%),radial-gradient(circle_at_bottom,rgba(56,189,248,0.12),transparent_28%)]" />
      <div className="absolute inset-0 bg-grid bg-[size:72px_72px] opacity-[0.06]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
