import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "flex h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none backdrop-blur-xl transition placeholder:text-slate-400 focus:border-cyan-300/50 focus:bg-white/8",
        className,
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
