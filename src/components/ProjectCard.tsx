import { cn } from "@/utils";
import Image from "next/image";
import StackTag from "./StackTag";

export default function ProjectCard() {
  return (
    <div
      className={cn(
        "flex min-h-50 min-w-full gap-2 p-5 hover:border hover:border-zinc-500",
      )}
    >
      <Image
        src="/images/cmapofficial_site_thumbnail.png"
        alt="cmap official website"
        height={1000}
        width={1000}
        className="h-2/5 w-1/5"
      />
      <div className="flex flex-col justify-between gap-2">
        <h3>Project Title</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          officia quia excepturi blanditiis, natus dolore accusamus nobis
          ducimus eaque similique quaerat voluptate adipisci? Unde eaque fuga
          perferendis fugiat sint asperiores?
        </p>
        <StackTag />
      </div>
    </div>
  );
}
