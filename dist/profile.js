
const profile  = () => {
// Retrieve the authentication token from local storage
const authToken = localStorage.getItem('token');

// Check if the token exists

if(authToken) {
    // Fetch user details using the authentication token
    fetch('https://fresh-foods-alpha.vercel.app/api/v1/user', {
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
        
        // Update profile information
        const username = document.querySelector(".font-semibold");
        if (username) {
            username.textContent = data.username;
        }
  
        const userEmail = document.querySelector(".useremail");
        if (userEmail) {
            userEmail.textContent = data.email;
        }
  
        const coverImage = document.querySelector(".cover-image");
        if (coverImage) {
            coverImage.src = data.coverImage;
        }

    })
    .catch(error => {
        console.error('Error fetching user details:', error);
    });
} else {
    console.error('Authentication token not found in local storage');
}

}

profile()