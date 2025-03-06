"use client";
import { Home, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function RoomSelectionPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-3xl mx-auto text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Welcome to Rooms
        </h1>
        <p className="mt-4 text-muted-foreground">
          Choose an option to continue
        </p>
      </div>

      <div className="grid w-full max-w-3xl gap-6 sm:grid-cols-2">
        <div className="flex flex-col h-full shadow-md hover:shadow-lg transition-shadow">
          <div className="text-center">
            <Home className="w-12 h-12 mx-auto mb-4 text-blue-500" />
            <h1 className="text-xl">Create Room</h1>
            <h3>Start a new room and invite others to join</h3>
          </div>
          <div className="flex-grow">
            <p className="text-sm text-gray-800 text-center">
              Create a private room where you can collaborate with your team or
              friends.
            </p>
          </div>
          <footer>
            <Button
              className="w-full"
              onClick={() => {
                router.push("/room/create-room");
              }}
            >
              Create Room
            </Button>
          </footer>
        </div>

        <div className="flex flex-col h-full shadow-md hover:shadow-lg transition-shadow">
          <header className="text-center">
            <Users className="w-12 h-12 mx-auto mb-4 text-blue-500" />
            <h1 className="text-xl">Join Room</h1>
            <h3>Join an existing room using a code</h3>
          </header>
          <div className="flex-grow">
            <p className="text-sm text-gray-800 text-center">
              Enter a room slug to join an existing session with others.
            </p>
          </div>
          <footer>
            <Button
              className="w-full"
              variant="outline"
              onClick={() => {
                router.push("/room/join-room");
              }}
            >
              Join Room
            </Button>
          </footer>
        </div>
      </div>
    </div>
  );
}
