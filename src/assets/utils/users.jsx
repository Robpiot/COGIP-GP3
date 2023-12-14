import { useEffect, useState } from "react";

export const useFetchUsers = (data) => {
  useEffect(() => {
    fetch(import.meta.env.VITE_API_LINK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          console.error("Server response:", response);
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((text) => {
        console.log("Server response text:", text);
        return JSON.parse(text);
      })
      .then((data) => {})
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, [data]); // Add data as a dependency so the effect runs whenever data changes
};
