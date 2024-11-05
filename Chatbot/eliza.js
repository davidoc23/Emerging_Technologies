const responses = {
    "hello": "Hello! How can I assist you today?",
    "i feel": "Why do you feel that way?",
    "i am": "Can you tell me more about why you are feeling that way?",
    "bye": "Goodbye! Take care."
  };
  
  function sendMessage() {
    const userInput = document.getElementById('user-input').value.toLowerCase();
    const conversation = document.getElementById('conversation');
  
    // Display user message
    conversation.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
    
    // Find a response
    let response = "I'm not sure I understand.";
    for (let key in responses) {
      if (userInput.includes(key)) {
        response = responses[key];
        break;
      }
    }
  
    // Display ELIZA's response
    conversation.innerHTML += `<p><strong>ELIZA:</strong> ${response}</p>`;
    
    // Clear input field
    document.getElementById('user-input').value = "";
    
    // Scroll to the bottom of the conversation
    conversation.scrollTop = conversation.scrollHeight;
  }
  