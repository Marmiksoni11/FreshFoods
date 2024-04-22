
// Retrieve the authentication token from local storage
const authTokens = localStorage.getItem('token');

// Check if the token exists
if (authToken) {
    // Fetch user details using the authentication token
    fetch('http://localhost:4008/api/v1/user', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authTokens}` // Include the authentication token in the headers
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
        document.querySelector(".font-semibold").textContent = data.username;
        document.querySelector(".useremail").textContent = data.email;

        // Update cover image
        document.querySelector(".cover-image").src = data.coverImage;

        // Update avatar image
        document.querySelector(".avatar-image").src = data.avatar;
        
        // Update full name
        document.querySelector(".userfullname").textContent = data.fullname;
    })
    .catch(error => {
        console.error('Error fetching user details:', error);
    });
} else {
    console.error('Authentication token not found in local storage');
}