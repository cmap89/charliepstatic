import { cn } from "@/utils";

interface SectionDividerProps {
  /** Position of the divider */
  position?: "top" | "bottom";
  /** Shape variant to use */
  variant?: "wave1" | "wave2" | "wave3";
  /** Fill color for the SVG shape */
  color?: string;
  /** Flip the shape vertically */
  flip?: boolean;
  /** Custom height (default varies by variant) */
  height?: string;
  /** Additional classes */
  className?: string;
}

const SVG_SHAPES = {
  wave1: {
    // Single smooth symmetrical wave - elegant and professional
    path: "M0,60 C300,20 450,20 600,60 C750,100 900,100 1200,60 L1200,120 L0,120 Z",
    defaultHeight: "80px",
  },
  wave2: {
    // Layered symmetrical waves - depth with balance
    paths: [
      {
        d: "M0,50 C300,10 450,10 600,50 C750,90 900,90 1200,50 L1200,120 L0,120 Z",
        opacity: "0.5",
      },
      {
        d: "M0,70 C300,30 450,30 600,70 C750,110 900,110 1200,70 L1200,120 L0,120 Z",
        opacity: "1",
      },
    ],
    defaultHeight: "100px",
  },
  wave3: {
    // Double peak symmetrical wave - dynamic yet balanced
    path: "M0,80 C150,60 250,60 300,40 C450,10 550,10 600,30 C650,10 750,10 900,40 C950,60 1050,60 1200,80 L1200,120 L0,120 Z",
    defaultHeight: "90px",
  },
};

export default function SectionDivider({
  position = "bottom",
  variant = "wave1",
  color = "currentColor",
  flip = false,
  height,
  className,
}: SectionDividerProps) {
  const shapeConfig = SVG_SHAPES[variant];
  const svgHeight = height || shapeConfig.defaultHeight;

  // Position classes
  const positionClasses = {
    top: "top-0",
    bottom: "bottom-0",
  };

  // Transform classes for flipping vertically
  const transformClasses = flip ? "scale-y-[-1]" : "";

  // Check if this variant has multiple paths (layered)
  const isLayered = "paths" in shapeConfig;

  return (
    <div
      className={cn(
        "pointer-events-none absolute left-0 w-full overflow-hidden leading-0",
        positionClasses[position],
        className,
      )}
      style={{ height: svgHeight }}
    >
      <svg
        className={cn("relative block h-full w-full", transformClasses)}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isLayered ? (
          // Render multiple paths for layered effect
          shapeConfig.paths.map((pathData, index) => (
            <path
              key={index}
              d={pathData.d}
              fill={color}
              opacity={pathData.opacity}
            />
          ))
        ) : (
          // Render single path
          <path d={shapeConfig.path} fill={color} />
        )}
      </svg>
    </div>
  );
}
