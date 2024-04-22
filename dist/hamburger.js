let menuToggle = document.querySelector(".menuToggle");
let navigation = document.querySelector(".hamburgerManu");
menuToggle.onclick = function () {
  navigation.classList.toggle("active");
};


  // Retrieve the authentication token from local storage
  const authToken = localStorage.getItem('token');

  // Check if the token exists
  if (authToken) {
      // Fetch user details using the authentication token
      fetch('http://localhost:4008/user', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${authToken}` // Include the authentication token in the headers
          }
      })
          .then(response => {
              if (response.ok) {
                  return response.json();
              }
              throw new Error('Failed to fetch user details');
          })
          .then(data => {
              console.log('User details:', data);
              
              // Update profile information
              document.querySelector("#uname").textContent = data.username;
             
             // Update avatar image
              document.querySelector("#avatarImage").src = data.avatar;
              
             
          })
          .catch(error => {
              console.error('Error fetching user details:', error);
          });
          
  } else {
      console.error('Authentication token not found in local storage');
  }
// new 