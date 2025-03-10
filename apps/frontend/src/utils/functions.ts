import axios from "axios";
import { config } from "../../config";

// get roomBySlug function
export const getRoomBySlug = async (slug: string, token: string) => {
  try {
    // Make a GET request to the server to get the room
    const response = await axios
      .get(`${config.HTTP_BACKEND_URL}/room/${slug}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        return res.data.room;
      })
      .catch(() => {
        return null;
      });

    // Return the room
    return response;
  } catch (error) {
    console.log(error);
    alert("Error getting room by slug");
    return null;
  }
};

// Get the existing shapes from the server for a given room
export const getExistingShapes = async (roomId: string, token: string) => {
  try {
    // Make a GET request to the server to get the shapes
    const response = await axios.get(
      `${config.HTTP_BACKEND_URL}/room/chats/${roomId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // Get the shapes from the response
    const shapesFromServer = response.data.chats;

    // Map the shapes to the existing shapes format
    const existingShapes = shapesFromServer.map(
      (shape: { message: string }) => {
        // Parse the shape message
        const shapeData = JSON.parse(shape.message);
        // Return the shape data
        return shapeData;
      }
    );

    // Return the existing shapes
    return existingShapes;
  } catch (error) {
    console.log(error);
    alert("Error getting existing shapes");
    return [];
  }
};
