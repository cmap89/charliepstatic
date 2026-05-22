import { cn } from "@/utils";
import Image from "next/image";
import { ReactNode } from "react";

interface ImageCardProps {
  src?: string;
  altImgStyles?: string;
  altImgTxtStyles?: string;
  altImgContStyles?: string;
  imgCardText?: string;
  children?: ReactNode;
}

export default function ImageCard({
  src,
  altImgStyles,
  altImgTxtStyles,
  altImgContStyles,
  children,
}: ImageCardProps) {
  return (
    <div className={cn("flex w-full justify-evenly", altImgContStyles)}>
      <div
        className={cn(
          "flex w-1/2 flex-col justify-center p-10",
          altImgTxtStyles,
        )}
      >
        {children}
      </div>
      {src && (
        <Image
          className={cn("w-1/2 bg-zinc-300", altImgStyles)}
          src={`/images/${src}`}
          height={1080}
          width={900}
          alt="img"
          loading="lazy"
        />
      )}
    </div>
  );
}
