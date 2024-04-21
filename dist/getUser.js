// Retrieve the authentication token from local storage
const authToken = localStorage.getItem("token");
if (authToken) {
  fetch("http://localhost:3020/api/v1/user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Failed to fetch user details");
    })
    .then((data) => {
      document.querySelector(".font-semibold").textContent = data.username;
      document.querySelector(".useremail").textContent = data.email;
      document.querySelector(".cover-image").src = data.coverImage;
      document.querySelector(".avatar-image").src = data.avatar;
      document.querySelector(".userfullname").textContent = data.fullname;
    })
    .catch((error) => {
      console.error("Error fetching user details:", error);
    });
} else {
  console.error("Authentication token not found in local storage");
}
