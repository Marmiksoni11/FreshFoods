// Update Cover Image
const authToken = localStorage.getItem('token');
console.log(authToken,"ProfileUpdate.js");



const updateCoverImage = async (formData) => {

  try {
      const response = await fetch('http://localhost:4008/api/v1/profile/update-cover-image', {
        method: 'POST',
        headers: {
          'authorization': `Bearer ${authToken}` // Include authentication token if needed
        },
        body: formData
      });

      const data = await response.json();
      console.log('Updated cover image:', data);
      // Handle success or error responses from the backend
    } catch (error) {
      console.error('Error updating cover image:', error);
    }
  };
  
  // Update Avatar
  const updateAvatar = async (formData) => {
    try {
      const response = await fetch('http://localhost:4008/api/v1/profile/update-avatar', {
        method: 'POST',
        headers: {
          'authorization': `Bearer ${authToken}` // Include authentication token if needed
        },
        body: formData
      });
      const data = await response.json();
      console.log('Updated avatar:', data);
      // Handle success or error responses from the backend
    } catch (error) {
      console.error('Error updating avatar:', error);
    }
  };
  
  // Event listener for updating cover image
  document.getElementById('cover-image-input').addEventListener('change', (event) => {
    const formData = new FormData();
    const file = event.target.files[0];
    formData.append('coverImage', file);
    console.log(file, ".........");
    updateCoverImage(formData);
});

// Event listener for updating avatar
document.getElementById('avatar-input').addEventListener('change', (event) => {
    const formData = new FormData();
    const file = event.target.files[0];
    formData.append('avatar', file);
    console.log(file, "..............");
    updateAvatar(formData);
});