
**Trigram Analysis and Text Generation from Text Files**

**Overview**
This project processes text files containing books, cleans and formats the content, performs trigram analysis to identify the most frequent trigrams (sequences of three characters), and generates text based on the trigram model. It includes functionality to remove preamble and postamble metadata (such as Project Gutenberg-specific markers), clean text data, generate trigrams, merge trigram models, analyze results, and export the trigram model to a JSON file.

**Features**

**Text Cleaning**
- Removes preamble and postamble (e.g., "START OF THE PROJECT GUTENBERG EBOOK" and "END OF THE PROJECT GUTENBERG EBOOK").
- Converts all text to uppercase.
- Retains only uppercase letters, spaces, and periods.

**Trigram Generation**
- Extracts trigrams (sequences of three characters) from cleaned text.
- Counts the frequency of each trigram.

**Model Merging**
- Combines trigram frequency data from multiple books into a single model.

**Text Generation**
- Generates text using the trigram model, starting with a specified string (default: "TH").
- Allows customization of the generated text's length (default: 10,000 characters).

**Generated Text Analysis**
- Splits the generated text into words.
- Counts the number of valid English words in the text.
- Calculates the percentage of valid English words compared to the total word count.

**Model Export**
- Exports the final trigram model to a JSON file (`trigrams.json`) for further analysis or use.

**File Output**
- Writes the cleaned content of a book to a file for further inspection (`test.txt`).
- Saves the generated text to a file (`generated_text.txt`).

Prerequisites
- Python 3.8 or higher.
- Text files named `book1.txt`, `book2.txt`, `book3.txt`, `book4.txt`, and `book5.txt` stored in a `texts` folder within the project directory.
- A file named `words.txt` containing a list of valid English words, one word per line.

Setup Instructions
1. Clone or download this repository.
2. Ensure that the required text files are in the `texts` directory.
3. Add the `words.txt` file to the project directory.
4. Install Python if not already installed.

Usage

Step 1: Text Cleaning and Trigram Analysis
Run the script:
python script_name.py

The script will:
1. Read and clean text from the files.
2. Perform trigram analysis.
3. Display the top 10 trigrams and their counts.
4. Save the cleaned version of the fourth book to `test.txt` in the project root.

Step 2: Text Generation
The script generates text based on the trigram model:
- Starts with the default string `"TH"` (customizable).
- Default length: 10,000 characters (adjustable).

Step 3: Analyze Generated Text
The script evaluates the generated text against the English word list:
1. Counts valid English words.
2. Calculates the percentage of valid words.

Step 4: Export Trigram Model to JSON
The trigram model is exported to a JSON file for further use or inspection:
- Default filename: `trigrams.json`.

Code Structure

- remove_preamble_postamble(text):
  Removes Project Gutenberg metadata from the text.

- clean_and_format_text(text):
  Cleans and formats the text by removing unwanted characters.

- generate_trigrams(text):
  Generates trigrams and counts their frequency.

- merge_trigram_models(models):
  Merges multiple trigram models into one.

- generate_string_from_trigram_model(model, start_string, length):
  Generates text using the trigram model starting with a specified string.

- load_word_list(file_path):
  Loads a list of valid English words from a file.

- analyze_generated_text(generated_text, valid_words):
  Analyzes the generated text for valid English words and calculates the percentage.

- export_model_to_json(model, filename):  Exports the trigram model to a JSON file.

Example Output

Console:
plaintext
Top 10 Trigrams and their Counts:
THE: 14567
AND: 13245

Generated Text Analysis:
Total words in generated text: 1200
Valid English words found: 950
Percentage of valid English words: 79.17%

Trigram model exported to trigrams.json.

File Output:
- Cleaned text: `words.txt`
- Generated text: `generated_text.txt`
- Trigram model: `trigrams.json`


**ELIZA Chatbot**

**Overview**
- ELIZA is a simple chatbot designed to simulate a conversation partner. It responds to user input with predefined responses, mimicking a basic therapeutic conversation.

**Features**
- Conversation Handling

  Provides responses based on user input related to emotions, work, hobbies, and relationships.
  Includes general responses for greetings, farewells, and casual conversation.
  Dynamic Responses
  Uses functions to extract details from user input and incorporate them into responses, creating a more personalized interaction.

**ELIZA Chatbot:**

  1. Navigate to https://davidoc23.github.io/Emerging_Technologies/ 

  2. Interact with ELIZA through the provided chat interface.

License
This project is open-source and available for educational or personal use.
