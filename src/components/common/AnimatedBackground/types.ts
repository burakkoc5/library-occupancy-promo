export interface OrbConfig {
  gradient: string;
  size: string;
  position: {
    top: string;
    left: string;
  };
  opacity: number;
  animation: {
    scale: number[];
    direction: {
      axis: "x" | "y";
      values: number[];
    };
    duration: number;
  };
}
