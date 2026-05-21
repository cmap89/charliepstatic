import { cn } from "@/utils";
import Image from "next/image";

interface ImageCardProps {
  src: string;
  altImgStyles?: string;
}

export default function ImageCard({ src, altImgStyles }: ImageCardProps) {
  return (
    <div className="flex w-full gap-2">
      <div className="flex w-1/2 flex-col justify-center p-2 text-center">
        <p>
          Developer. Musician. Problem Solver. Building thoughtful experiences
          that resonate.
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
