import { cn } from "@/utils";
import Image from "next/image";

interface ImageCardProps {
  src: string;
  altImgStyles?: string;
  altImgTxtStyles?: string;
  altImgContStyles?: string;
}

export default function ImageCard({
  src,
  altImgStyles,
  altImgTxtStyles,
  altImgContStyles,
}: ImageCardProps) {
  return (
    <div className={cn("flex w-full justify-evenly", altImgContStyles)}>
      <div
        className={cn(
          "flex w-1/2 flex-col justify-center p-10",
          altImgTxtStyles,
        )}
      >
        <p>
          Developer. Musician. Problem Solver. Building thoughtful experiences
          that resonate. I build things that connect with people.
        </p>
        <p>Composing with code. Designing with intention.</p>
      </div>
      <Image
        className={cn("w-1/2 bg-zinc-500", altImgStyles)}
        src={`/images/${src}`}
        height={1080}
        width={900}
        alt="img"
        loading="lazy"
      />
    </div>
  );
}
