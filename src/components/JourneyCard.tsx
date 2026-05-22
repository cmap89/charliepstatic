import { cn } from "@/utils";

interface JourneyCardProps {
  altJourContStyles?: string;
  altJourTxtStyles?: string;
  dateFrom: string;
  dateTo: string;
  title: string;
  desc: string;
}

export default function JourneyCard({
  altJourContStyles,
  dateFrom,
  dateTo,
  title,
  desc,
}: JourneyCardProps) {
  return (
    <div
      className={cn(
        "flex min-w-full gap-2 p-5 hover:border hover:border-zinc-500",
        altJourContStyles,
      )}
    >
      <div className="w-1/3 text-2xl font-bold">{`${dateFrom} - ${dateTo}`}</div>
      <div className="w-2/3">
        <h3 className="text-2xl font-bold">{title}</h3>
        <div>
          {desc}
          {/* <StackTag /> */}
        </div>
      </div>
    </div>
  );
}
