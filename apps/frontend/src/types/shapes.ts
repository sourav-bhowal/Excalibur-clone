// Types of shapes to draw
export type Shape =
  | {
      type: "rectangle";
      color: string;
      x: number;
      y: number;
      width: number;
      height: number;
    }
  | {
      type: "circle";
      color: string;
      centerX: number;
      centerY: number;
      radius: number;
    }
  | {
      type: "line";
      color: string;
      x1: number;
      y1: number;
      x2: number;
      y2: number;
    };
