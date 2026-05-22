import { cn } from "@/utils";
import Image from "next/image";
import StackTag from "./StackTag";

interface ProjectCardProps {
  altProjContStyles?: string;
  src?: string;
  alt?: string;
  altProjImgStyles?: string;
  altProjTxtStyles?: string;
  title: string;
  description: string;
}

export default function ProjectCard({
  altProjContStyles,
  src,
  alt = "",
  altProjTxtStyles,
  altProjImgStyles,
  title,
  description,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "flex min-w-full gap-2 p-5 hover:border hover:border-zinc-500",
        altProjContStyles,
      )}
    >
      <div className={cn("h-2/5 w-1/5", altProjImgStyles)}>
        {src && (
          <Image src={`/images/${src}`} alt={alt} height={1000} width={1000} />
        )}
      </div>
      <div
        className={cn("flex flex-col justify-between gap-2", altProjTxtStyles)}
      >
        <h3 className="font-bold">{title}</h3>
        <p>{description}</p>
        <StackTag />
      </div>
    </div>
  );
}
