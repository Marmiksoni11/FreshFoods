

const updateCoverImage = async (formData) => {
  try {
    const authToken = localStorage.getItem('token');
    const response = await fetch('https://fresh-food-flame.vercel.app/api/v1/profile/update-cover-image', {
        method: 'POST',
        headers: {
            'authorization': `Bearer ${authToken}`, // Include authentication token if needed

        },
        body: formData
      });

      const data = await response.json();
    } catch (error) {
      console.error('Error updating cover image:', error);
    }
  };
  
  // Update Avatar
  const updateAvatar = async (formData) => {
    try {
      const authToken = localStorage.getItem('token');

      const response = await fetch('https://fresh-food-flame.vercel.app/api/v1/profile/update-avatar', {
        method: 'POST',
        headers: {
          'authorization': `Bearer ${authToken}`, // Include authentication token if needed
          
        },
        body: formData
      });
      const data = await response.json();

     

      // Handle success or error responses from the backend
    } catch (error) {
      console.error('Error updating avatar:', error);
    }
  };
  
  // Event listener for updating cover image
  
  document.getElementById('cover-image-form').addEventListener('submit', function(event) {
    
    event.preventDefault();

    const formData = new FormData();

    const file = event.target.elements['coverImage'].files[0];

    formData.append('coverImage', file);
    
    updateCoverImage(formData);
});

// Event listener for updating avatar
document.getElementById('avatar-input').addEventListener('change', (event) => {
    const formData = new FormData();
    const file = event.target.files[0];
    formData.append('avatar', file);
    updateAvatar(formData);
});