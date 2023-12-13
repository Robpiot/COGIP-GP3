import { useEffect, useState } from "react";

useEffect(() => {
  const registerUser = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  };

  fetch("https://cogip-990e44950882.herokuapp.com/users", registerUser)
    .then((response) => response.json())
    .then((data) => this.setState({ postId: data.id }));
}, []);
