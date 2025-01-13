import { OrbConfig } from "./types";

export const orbConfigs: OrbConfig[] = [
  {
    gradient: "linear-gradient(120deg, #0070f3 0%, #00a8ff 100%)",
    size: "50vw",
    position: {
      top: "-10%",
      left: "50%",
    },
    opacity: 0.15,
    animation: {
      scale: [1, 1.05, 1],
      direction: {
        axis: "x",
        values: [0, 20, 0],
      },
      duration: 15,
    },
  },
  {
    gradient: "linear-gradient(120deg, #2d3748 0%, #4a5568 100%)",
    size: "45vw",
    position: {
      top: "40%",
      left: "-10%",
    },
    opacity: 0.12,
    animation: {
      scale: [1, 1.03, 1],
      direction: {
        axis: "x",
        values: [0, -15, 0],
      },
      duration: 18,
    },
  },
  {
    gradient: "linear-gradient(120deg, #0070f3 0%, #00a8ff 100%)",
    size: "40vw",
    position: {
      top: "60%",
      left: "60%",
    },
    opacity: 0.1,
    animation: {
      scale: [1, 1.08, 1],
      direction: {
        axis: "y",
        values: [0, -15, 0],
      },
      duration: 20,
    },
  },
];
