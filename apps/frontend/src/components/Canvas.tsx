"use client";
import { useEffect, useRef, useState } from "react";
import { useSocket } from "@/hooks/useSocket";
import { draw } from "@/utils/draw";
import { User } from "next-auth";
import { Loader2 } from "lucide-react";
import { shapes } from "@/utils/shapes";

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

  // Shape to draw ref to update the shape
  const shapeRef = useRef(shapeToDraw);

  // Update ref when shape changes
  useEffect(() => {
    shapeRef.current = shapeToDraw;
  }, [shapeToDraw]);

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
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
      />
    </div>
  );
}
