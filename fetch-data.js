document.addEventListener("DOMContentLoaded", function() {
  async function fetchUserData() {
      const apiUrl = 'https://jsonplaceholder.typicode.com/users';
      const dataContainer = document.getElementById('api-data');
      
      try {
          // Fetch the data from the API
          const response = await fetch(apiUrl);
          const users = await response.json();
          
          // Clear the loading message
          dataContainer.innerHTML = '';
          
          // Create a list element to display the user names
          const userList = document.createElement('ul');
          
          // Loop through the users array and create list items
          users.forEach(user => {
              const listItem = document.createElement('li');
              listItem.textContent = user.name;
              userList.appendChild(listItem);
          });
          
          // Append the user list to the data container
          dataContainer.appendChild(userList);
      } catch (error) {
          // In case of an error, show a message
          dataContainer.innerHTML = 'Failed to load user data.';
      }
  }

  // Invoke the function after the DOM content is loaded
  fetchUserData();
});
