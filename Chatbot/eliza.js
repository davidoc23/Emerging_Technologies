const responses = {
  // Greetings
  "hello": (input) => `Hello! How can I assist you today?`,
  "hi": (input) => `Hi there! How are you feeling today?`,
  "hey": (input) => `Hey! What's on your mind?`,

  // Feelings
  "i feel": (input) => `Why do you feel ${extractDetail(input, "i feel")}?`,
  "i am feeling": (input) => `It's okay to feel that way. Want to talk more about why you're feeling ${extractDetail(input, "i am feeling")}?`,
  "i'm sad": (input) => `I'm sorry to hear that. Would you like to talk about what's making you sad?`,
  "i'm happy": (input) => `That's great! What made you feel happy today?`,
  "i'm stressed": (input) => `Stress can be tough. What's been bothering you?`,

  // Work and Hobbies
  "work": (input) => `How's work going? Are you enjoying it?`,
  "i hate my job": (input) => `That sounds really hard. What do you dislike about your job?`,
  "i love my job": (input) => `That's wonderful! What do you enjoy most about it?`,
  "hobbies": (input) => `What are your hobbies? It's great to have activities you enjoy.`,
  "i like to": (input) => `That sounds fun! How long have you been ${extractDetail(input, "i like to")}?`,

  // Relationships
  "my friend": (input) => `Tell me more about your friend. How's your relationship with them?`,
  "my family": (input) => `Family is important. Do you have a close relationship with them?`,
  "my partner": (input) => `Would you like to share more about your relationship with your partner?`,

  // General Conversation
  "how are you": (input) => `I'm just a program, but thank you for asking! How are you?`,
  "what's your name": (input) => `I'm ELIZA, your virtual conversation partner.`,
  "tell me a joke": (input) => `Why don't scientists trust atoms? Because they make up everything!`,

  // Goodbye
  "bye": (input) => `Goodbye! Take care.`,
  "goodbye": (input) => `Goodbye! I hope to chat with you again soon.`,
  "see you": (input) => `See you later! Take care.`,

  // Catch-all fallback
  "i don't understand": (input) => `Can you tell me more about that?`,
  "not sure": (input) => `That's okay, take your time. We can talk about anything you'd like.`
};

// Function to extract details from user input
function extractDetail(input, key) {
  return input.substring(input.indexOf(key) + key.length).trim();
}

function sendMessage() {
  const userInput = document.getElementById('user-input').value.toLowerCase();
  const conversation = document.getElementById('conversation');

  // Display user message
  conversation.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
  
  // Find a response
  let response = "I'm not sure I understand.";
  for (let key in responses) {
    if (userInput.includes(key)) {
      response = responses[key](userInput);  // Call the function for dynamic response
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

// Function to check if the Enter key was pressed
function checkEnter(event) {
  if (event.key === "Enter") {  // Check if Enter key is pressed
    sendMessage();
  }
}
