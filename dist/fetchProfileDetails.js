
if (authToken) {
    // Fetch user details using the authentication token
    fetch('https://fresh-food-r6dlb3vu7-smit-trivedis-projects.vercel.app/api/v1/profile/update-avatar', {
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
        // console.log('User details:', data.avatar);
        console.log(data,"got Avatar");

        // Construct the URL for the avatar image
        
        // console.log(avatarUrl,"kjsfkjhsdkjfhsdkhsdkj");
        // Update avatar image
        document.querySelector(".avatar-image").src = data.avatar;
    })
    .catch(error => {
        console.error('Error fetching user details:', error);
    });
} else {
    console.error('Authentication token not found in local storage');
}

// COVER IMAGE
if (authToken) {
    // Fetch user details using the authentication token
    fetch('https://fresh-food-r6dlb3vu7-smit-trivedis-projects.vercel.app/api/v1/profile/update-cover-image', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json',
            // Include the authentication token in the headers
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Failed to fetch user details');
    })
    .then(data => {
        // console.log('User details:', data.avatar);
        console.log(data,"got CoverImage from profile.js");
        // Construct the URL for the avatar image
       
        // console.log(avatarUrl,"kjsfkjhsdkjfhsdkhsdkj");
        // Update avatar image
        document.querySelector(".avatar-image").src = data.avatar ;
    })
    .catch(error => {
        console.error('Error fetching user details:', error);
    });
} else {
    console.error('Authentication token not found in local storage');
}
