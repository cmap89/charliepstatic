import { cn } from "@/utils";
import Image from "next/image";
import { ReactNode } from "react";

interface ProjectCardProps {
  altProjContStyles?: string;
  src?: string;
  alt?: string;
  altProjImgStyles?: string;
  altProjTxtStyles?: string;
  children: ReactNode;
}

export default function ProjectCard({
  altProjContStyles,
  src,
  alt = "",
  altProjTxtStyles,
  altProjImgStyles,
  children,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "flex min-w-full gap-2 p-5 hover:border hover:border-zinc-500",
        altProjContStyles,
      )}
    >
      {src && (
        <Image
          src={`/images/${src}`}
          alt={alt}
          height={1000}
          width={1000}
          className={cn("h-2/5 w-1/5", altProjImgStyles)}
        />
      )}
      <div
        className={cn("flex flex-col justify-between gap-2", altProjTxtStyles)}
      >
        {children}
      </div>
    </div>
  );
}
