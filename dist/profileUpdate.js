

const updateCoverImage = async (formData) => {
  try {
    const authToken = localStorage.getItem('token');
    // console.log(authToken)
    
    const response = await fetch('http://localhost:3020/api/v1/profile/update-cover-image', {
        method: 'POST',
        headers: {
          'authorization': `Bearer ${authToken}`, // Include authentication token if needed
          

        },
        body: formData
      });

      const data = await response.json();
        // console.log(data);

       
    } catch (error) {
      console.error('Error updating cover image:', error);
    }
  };
  
  // Update Avatar
  const updateAvatar = async (formData) => {
    try {
      const authToken = localStorage.getItem('token');
      // console.log('authToken from avatar',authToken);

      const response = await fetch('http://localhost:3020/api/v1/profile/update-avatar', {
        method: 'POST',
        headers: {
          'authorization': `Bearer ${authToken}`, // Include authentication token if needed
          
        },
        body: formData
      });
      const data = await response.json();
      // console.log('Updated avatar:', data);
     

      // Handle success or error responses from the backend
    } catch (error) {
      console.error('Error updating avatar:', error);
    }
  };
  
  // Event listener for updating cover image
  document.getElementById('cover-image-form').addEventListener('submit', function(event) {
    
    event.preventDefault();
    

    const formData = new FormData();
    // console.log(' --- --  > > Reached formData',formData);

    const file = event.target.elements['coverImage'].files[0];

    formData.append('coverImage', file);

    // if (file) {
    //   // console.log('File:', file);
      
    //   // Now you can proceed to upload the file using fetch or any other method
    //   // Call your function to upload the file here, passing formData if needed
    // } else {
    //   // console.log('No file selected.');
    // }

    // const file = event.target

    // console.log(' --- --  > > Reached',file);
    
    
    // console.log(file, ".........");
    
    updateCoverImage(formData);
});

// Event listener for updating avatar
document.getElementById('avatar-input').addEventListener('change', (event) => {
    const formData = new FormData();
    const file = event.target.files[0];
    formData.append('avatar', file);
    // console.log(file, "..............");
    updateAvatar(formData);
});