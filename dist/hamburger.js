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
      fetch('https://fresh-food-flame.vercel.app/api/v1/user', {
          method: 'GET',
          headers: {
              'Authorization': `Bearer ${authToken}`, // Include the authentication token in the headers
              'Content-Type': 'application/json',
            
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
              console.log('Avatar Image',data.avatar);
              
              // Update profile information
              document.querySelector("#uname").textContent = data.username;
             
             // Update avatar image
              document.querySelector(".avatarlogo").src = data.avatar;
              
             
          })
          .catch(error => {
              console.error('Error fetching user details:', error);
          });
          
  } else {
      console.error('Authentication token not found in local storage');
  }




  


// Check if the token exists

if(authToken) {
    // Fetch user details using the authentication token
    fetch('https://fresh-food-flame.vercel.app/api/v1/user', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${authToken}`, // Include the authentication token in the headers
            'Content-Type': 'application/json',
            
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Failed to fetch user details');
    })
    .then(data => {
        console.log("User Details profile.js:",data,"FRom Profile.js ");

            console.log(data.coverImage,"https:");
        // console.log('User details:', data.coverImage);
        // console.log('User details:', data.avatar);

        
        // Update profile information
        document.querySelector(".font-semibold").textContent = data.username;
        document.querySelector(".useremail").textContent = data.email;
        

        // Update cover image
        document.querySelector(".cover-image").src = data.coverImage;
        
        // Update Avatar image
        
        document.querySelector(".avatar-image").src = data.avatar;

        // // Update full name
        // document.querySelector(".userfullname").textContent = data.fullname;
    })
    .catch(error => {
        console.error('Error fetching user details:', error);
    });
} else {
    console.error('Authentication token not found in local storage');
}


