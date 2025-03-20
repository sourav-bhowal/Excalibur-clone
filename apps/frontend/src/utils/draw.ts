import { Shape } from "../types/shapes";
import { clearCanvasAndRedraw } from "./clearCanvasAndRedraw";
import { getExistingShapes } from "./functions";

// Draw props
interface DrawProps {
  canvas: HTMLCanvasElement;
  roomId: string;
  socket: WebSocket;
  token: string;
  getShapeToDraw: () => string | null;
  getShapeColor: () => string;
}

// Function to draw shapes on the canvas
export function draw({
  canvas,
  roomId,
  socket,
  token,
  getShapeToDraw,
  getShapeColor,
}: DrawProps): () => void {
  // Get the 2d context
  const context = canvas?.getContext("2d");

  // If no context, return
  if (!context)
    return () => {
      console.error("Canvas context not found");
    };

  // AbortController to cleanup the event listeners
  const controller = new AbortController();

  // Signal from the controller to pass to the event listeners
  const { signal } = controller;

  // Existing shapes array
  let existingShapes: Shape[] = [];

  // Get the existing shapes from the server for the given room
  (async () => {
    // IIFE to fetch the existing shapes
    try {
      // Get the existing shapes from the server for the given room
      existingShapes = await getExistingShapes(roomId, token);
      // Clear the canvas and redraw all the existing shapes
      clearCanvasAndRedraw(existingShapes, context);
    } catch (error) {
      console.error("Error fetching existing shapes", error);
    }
  })();

  // Socket message event
  socket.onmessage = (event) => {
    const parsedData = JSON.parse(event.data); // Parse the data to a JSON object
    const type = parsedData.type; // Get the type of the message
    if (type === "chat") {
      // If the type is chat
      const parsedShape = JSON.parse(parsedData.message); // Parse the shape message
      existingShapes.push(parsedShape); // Add the shape to the existing shapes
      clearCanvasAndRedraw(existingShapes, context); // Clear the canvas and redraw all the existing shapes
    }
  };

  // DRAW LOGIC HERE
  let startDrawing = false; // Flag to indicate if the user is drawing
  let startX = 0; // Start position of the rectangle to draw
  let startY = 0; // Start position of the rectangle to draw

  // Mouse down event
  const handleMouseDown = (event: MouseEvent) => {
    // Set the startDrawing flag to true
    startDrawing = true;
    // Set the start position of the rectangle to draw
    startX = event.clientX;
    startY = event.clientY;
  };

  // Mouse up event
  const handleMouseUp = (event: MouseEvent) => {
    // Get the shape to draw
    const shapeToDraw = getShapeToDraw();

    const shapeColor = getShapeColor();

    // Set the startDrawing flag to false
    startDrawing = false;

    // Get the width and height of the rectangle to draw based on the mouse position by subtracting the start position from the current position
    const width = event.clientX - startX;
    const height = event.clientY - startY;

    // Create a new shape object
    let newShape: Shape | null = null;

    // Create a new shape based on the shapeToDraw
    if (shapeToDraw === "rectangle") {
      newShape = {
        type: "rectangle",
        color: shapeColor,
        x: startX,
        y: startY,
        width,
        height,
      };
    } else if (shapeToDraw === "circle") {
      const width = event.clientX - startX;
      const height = event.clientY - startY;
      const radius = Math.min(Math.abs(width), Math.abs(height)) / 2;
      const centerX = startX + width / 2;
      const centerY = startY + height / 2;
      newShape = {
        type: "circle",
        color: shapeColor,
        centerX,
        centerY,
        radius,
      };
    } else if (shapeToDraw === "line") {
      newShape = {
        type: "line",
        color: shapeColor,
        x1: startX,
        y1: startY,
        x2: event.clientX,
        y2: event.clientY,
      };
    }

    // If newShape is not null
    if (newShape) {
      // Add the new shape to the existing shapes array
      existingShapes.push(newShape);
      // Send the shape as a string to the ws server
      socket.send(
        JSON.stringify({
          type: "chat",
          message: JSON.stringify(newShape),
          roomId,
        })
      );
    }
  };

  // Mouse move event
  const handleMouseMove = (event: MouseEvent) => {
    // Get the shape to draw
    const shapeToDraw = getShapeToDraw();

    // Get the shape color
    const shapeColor = getShapeColor();

    // If the user is drawing
    if (startDrawing) {
      // Clear the canvas and redraw all the existing shapes
      clearCanvasAndRedraw(existingShapes, context);

      // Get the width and height of the rectangle to draw based on the mouse position by subtracting the start position from the current position
      const width = event.clientX - startX;
      const height = event.clientY - startY;

      // Draw the rectangle on the canvas
      if (shapeToDraw === "rectangle") {
        context.strokeStyle = `${shapeColor}`; // strokeStyle is the color of the rectangle
        context.strokeRect(startX, startY, width, height); // Draw the rectangle on the canvas
      } else if (shapeToDraw === "circle") {
        const width = event.clientX - startX;
        const height = event.clientY - startY;
        const radius = Math.min(Math.abs(width), Math.abs(height)) / 2;
        const centerX = startX + width / 2;
        const centerY = startY + height / 2;
        context.strokeStyle = `${shapeColor}`;
        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        context.stroke();
      } else if (shapeToDraw === "line") {
        context.strokeStyle = `${shapeColor}`;
        context.beginPath(); // Begin a new path
        context.moveTo(startX, startY); // Move the starting point of the line
        context.lineTo(event.clientX, event.clientY); // Draw a line to the end point
        context.stroke(); // Stroke the line
      }
    }
  };

  // Add event listeners for mouse down, mouse up, and mouse move
  canvas.addEventListener("mousedown", handleMouseDown, { signal });
  canvas.addEventListener("mouseup", handleMouseUp, { signal });
  canvas.addEventListener("mousemove", handleMouseMove, { signal });

  // Cleanup function to remove the event listeners
  const cleanup = () => {
    controller.abort();
    canvas.removeEventListener("mousedown", handleMouseDown);
    canvas.removeEventListener("mouseup", handleMouseUp);
    canvas.removeEventListener("mousemove", handleMouseMove);
  };

  // Return the cleanup function
  return cleanup;
}
