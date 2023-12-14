import { useEffect, useState } from "react";

useEffect(() => {
  const registerUser = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  };

  fetch(import.meta.env.VITE_API_LINK, registerUser)
    .then((response) => response.json())
    .then((data) => this.setState({ postId: data.id }));
}, []);
