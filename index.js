// Add your code here

function submitData(name, email) {
    const formData = {
      name: name,
      email: email,
    };
  
    const postDataObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(formData),
    };
  
    const responseContainer = document.getElementById("response-container");
  
    return fetch("http://localhost:3000/users", postDataObject)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((user) => {
        const userId = user.id;

        responseContainer.innerHTML = '';

        const successMessage = document.createElement("p");
        successMessage.textContent = `User successfully added with ID: ${userId} :Refresh the page to to see the addition`;
        responseContainer.appendChild(successMessage);
        return user;
      })
      .catch((error) => {
        const errorMessage = document.createElement("p");
        errorMessage.textContent = `Error: ${error.message}`;
        responseContainer.appendChild(errorMessage);
      });
      
  }

  submitData("John Doe", "johndoe@example.com");
