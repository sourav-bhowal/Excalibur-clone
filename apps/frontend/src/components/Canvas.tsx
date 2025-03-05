"use client";
import { useEffect, useRef, useState } from "react";
import { useSocket } from "@/hooks/useSocket";
import { draw } from "@/utils/draw";
import { User } from "next-auth";
import { Loader2 } from "lucide-react";
import { shapes, colors } from "@/utils/shapes";

// Canvas component props
interface CanvasProps {
  roomId: string;
  user: User;
}

// Canvas component
export default function Canvas({ roomId, user }: CanvasProps) {
  // Get the token from the user
  const token = user.token as string;

  // Ref to the canvas element
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Get the Web Socket connection
  const { socket, isLoading } = useSocket(token, roomId);

  // State for the shape to be drawn
  const [shapeToDraw, setShapeToDraw] = useState<string | null>("rectangle");

  // State for color of the shape
  const [shapeColor, setShapeColor] = useState<string>("#000000");

  // Shape to draw ref to update the shape
  const shapeRef = useRef(shapeToDraw);

  // color ref to update the color
  const colorRef = useRef(shapeColor);

  // Update ref when shape changes
  useEffect(() => {
    shapeRef.current = shapeToDraw;
    colorRef.current = shapeColor;
  }, [shapeColor, shapeToDraw]);

  // useEffect to draw on the canvas
  useEffect(() => {
    // Cleanup function for the draw function
    let cleanup: () => void;

    // If the canvas element and socket are available, draw on the canvas
    if (canvasRef.current && socket) {
      cleanup = draw({
        canvas: canvasRef.current,
        roomId,
        socket,
        token,
        getShapeToDraw: () => shapeRef.current,
        getShapeColor: () => colorRef.current,
      });
    }

    // Return the cleanup function to remove the event listener when the component is unmounted
    return () => {
      if (cleanup) cleanup();
    };
  }, [canvasRef, roomId, socket, token]);

  // If loading, return loading message
  if (isLoading || !socket)
    return (
      <div className="h-screen flex justify-center items-center">
        <Loader2 className="animate-spin" size={50} />
        <p className="ml-2">Loading...</p>
      </div>
    );

  // Return the canvas element and shape selection buttons
  return (
    <div className="relative overflow-hidden">
      <div className="flex gap-3 mb-4 z-10 p-2 rounded-lg absolute top-2 right-1/2 bg-white bg-opacity-50">
        {shapes.map((shape) => (
          <button
            key={shape.name}
            onClick={() => setShapeToDraw(shape.name)}
            className={`px-4 py-2 rounded-lg ${shapeToDraw === shape.name ? "bg-blue-500 text-white" : "bg-white text-black"}`}
          >
            {shape.shape}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4 z-10 p-2 rounded-lg absolute top-2 right-2 bg-white bg-opacity-50">
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => setShapeColor(color.value)}
            className={`px-4 py-2 rounded-lg ${shapeColor === color.value ? "bg-blue-500 text-white" : "bg-white text-black"}`}
          >
            <div
              className="w-6 h-6 rounded-full"
              style={{ backgroundColor: color.value }}
            />
          </button>
        ))}
      </div>
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
      />
    </div>
  );
}
