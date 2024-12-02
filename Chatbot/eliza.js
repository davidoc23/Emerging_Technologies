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
  "i'm angry": (input) => `I'm sorry you're feeling angry. What happened that made you feel this way?`,
  "i'm excited": (input) => `That's awesome! What's making you feel excited?`,
  "i'm lonely": (input) => `I'm here to talk if you need someone. Would you like to share what's on your mind?`,

  // Work and Hobbies
  "work": (input) => `How's work going? Are you enjoying it?`,
  "i hate my job": (input) => `That sounds really hard. What do you dislike about your job?`,
  "i love my job": (input) => `That's wonderful! What do you enjoy most about it?`,
  "i'm looking for a job": (input) => `Job hunting can be challenging. What kind of role are you looking for?`,
  "hobbies": (input) => `What are your hobbies? It's great to have activities you enjoy.`,
  "i like to": (input) => `That sounds fun! How long have you been ${extractDetail(input, "i like to")}?`,
  "i play": (input) => `Playing ${extractDetail(input, "i play")} sounds enjoyable! How long have you been doing it?`,
  "i read": (input) => `Reading is a great hobby! What kind of books do you enjoy?`,

  // Relationships
  "my friend": (input) => `Tell me more about your friend. How's your relationship with them?`,
  "my family": (input) => `Family is important. Do you have a close relationship with them?`,
  "my partner": (input) => `Would you like to share more about your relationship with your partner?`,
  "i miss someone": (input) => `Missing someone can be tough. Want to share more about them?`,
  "i'm in love": (input) => `That's wonderful! What do you love most about them?`,
  "i had an argument": (input) => `Arguments can be difficult. Would you like to talk about what happened?`,

  // General Conversation
  "how are you": (input) => `I'm just a program, but thank you for asking! How are you?`,
  "what's your name": (input) => `I'm ELIZA, your virtual conversation partner.`,
  "tell me a joke": (input) => `Why don't scientists trust atoms? Because they make up everything!`,
  "what do you think": (input) => `I'm here to listen to you. What are your thoughts?`,

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
