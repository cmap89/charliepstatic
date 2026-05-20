import { ReactNode } from "react";
import { cn } from "@/utils";

interface PageSectionProps {
  children: ReactNode;
  altSectStyle?: string;
  altContStyle?: string;
}

export default function PageSection({
  children,
  altSectStyle,
  altContStyle,
}: PageSectionProps) {
  return (
    <section className={cn("flex w-full flex-col items-center", altSectStyle)}>
      <div className={cn("w-3/4", altContStyle)}>{children}</div>
    </section>
  );
}
