import { cn } from "@/utils";
import { ReactNode } from "react";

interface JourneyCardProps {
  altJourContStyles?: string;
  altJourTxtStyles?: string;
  children: ReactNode;
}

export default function JourneyCard({
  altJourContStyles,
  children,
}: JourneyCardProps) {
  return (
    <div
      className={cn(
        "flex min-h-50 min-w-full gap-2 p-5 hover:border hover:border-zinc-500",
        altJourContStyles,
      )}
    >
      {children}
    </div>
  );
}
