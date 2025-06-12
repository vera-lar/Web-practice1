



    const nameInput = document.getElementById("name");
    const feedbackInput = document.getElementById("feedback");
    const submitBtn = document.getElementById("submitBtn");
    const message = document.getElementById("message");

    submitBtn.addEventListener("click", function() {
      const name = nameInput.value.trim();
      const feedback = feedbackInput.value.trim();

      if (name && feedback) {
        message.textContent = "Thank you for your feedback, " + name + "!";
        
        // Clear input fields using DOM manipulation
        nameInput.value = "";
        feedbackInput.value = "";
      } else {
        message.textContent = "Please fill out all fields.";
        message.style.color = "red";
      }

      // Reset color after a moment
      setTimeout(() => {
        message.style.color = "green";
      }, 2000);
    });
 
