import { Shape } from "@/types/shapes";

// Clear the canvas and redraw all the existing shapes
export function clearCanvasAndRedraw(
  existingShapes: Shape[],
  context: CanvasRenderingContext2D
) {
  // Clear the canvas
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  // Redraw all the existing shapes
  existingShapes.forEach((shape) => {
    if (shape.type === "rectangle") {
      context.strokeStyle = `${shape.color}`; // strokeStyle is the color of the rectangle
      context.strokeRect(shape.x, shape.y, shape.width, shape.height); // Draw the rectangle on the canvas
    } else if (shape.type === "circle") {
      context.strokeStyle = `${shape.color}`;
      context.beginPath(); // Begin a new path
      context.arc(shape.centerX, shape.centerY, shape.radius, 0, 2 * Math.PI); // Draw a circle
      context.stroke(); // Stroke the circle
    } else if (shape.type === "line") {
      context.strokeStyle = `${shape.color}`;
      context.beginPath(); // Begin a new path
      context.moveTo(shape.x1, shape.y1); // Move the starting point of the line
      context.lineTo(shape.x2, shape.y2); // Draw a line to the end point
      context.stroke(); // Stroke the line
    }
  });
}
