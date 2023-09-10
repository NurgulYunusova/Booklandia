const { default: mongoose } = require("mongoose");

const quizSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
  },
  totalQuestions: {
    type: Number,
    required: true,
  },
  perQuestionScore: {
    type: Number,
    required: true,
  },
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
    },
  ],
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = {
  Quiz,
};

// export const bookQuiz = {
//   topic: "Books",
//   level: "Beginner",
//   totalQuestions: 8,
//   perQuestionScore: 5,
//   questions: [
//     {
//       question: "Who wrote the 'Harry Potter' book series?",
//       choices: ["J.R.R. Tolkien", "J.K. Rowling", "George Orwell", "Stephen King"],
//       type: "MCQs",
//       correctAnswer: "J.K. Rowling",
//     },
//     {
//       question: "Which book is the first in 'The Chronicles of Narnia' series?",
//       choices: ["The Lion, the Witch and the Wardrobe", "The Hobbit", "Matilda", "Charlotte's Web"],
//       type: "MCQs",
//       correctAnswer: "The Lion, the Witch and the Wardrobe",
//     },
//     {
//       question: "Who is the protagonist of 'The Hunger Games' trilogy?",
//       choices: ["Katniss Everdeen", "Hermione Granger", "Bella Swan", "Elizabeth Bennet"],
//       type: "MCQs",
//       correctAnswer: "Katniss Everdeen",
//     },
//     {
//       question: "Which book is considered a classic written by Jane Austen?",
//       choices: ["Pride and Prejudice", "The Catcher in the Rye", "1984", "Lord of the Flies"],
//       type: "MCQs",
//       correctAnswer: "Pride and Prejudice",
//     },
//     {
//       question: "In 'Alice's Adventures in Wonderland', who is the main character?",
//       choices: ["Alice", "Cinderella", "Rapunzel", "Snow White"],
//       type: "MCQs",
//       correctAnswer: "Alice",
//     },
//     {
//       question: "Which novel by F. Scott Fitzgerald is a classic of American literature?",
//       choices: ["The Great Gatsby", "Moby-Dick", "To Kill a Mockingbird", "Dracula"],
//       type: "MCQs",
//       correctAnswer: "The Great Gatsby",
//     },
//     {
//       question: "Who wrote the 'Lord of the Rings' trilogy?",
//       choices: ["J.R.R. Tolkien", "J.K. Rowling", "George R.R. Martin", "C.S. Lewis"],
//       type: "MCQs",
//       correctAnswer: "J.R.R. Tolkien",
//     },
//     {
//       question: "Which book tells the story of a young orphan girl raised by her uncle in the English countryside?",
//       choices: ["Matilda", "Anne of Green Gables", "Little Women", "The Secret Garden"],
//       type: "MCQs",
//       correctAnswer: "Anne of Green Gables",
//     },
//   ],
// };

// export const bookQuiz = {
//   topic: "Books",
//   level: "Medium",
//   totalQuestions: 8,
//   perQuestionScore: 10,
//   questions: [
//     {
//       question: "In which book does the character Holden Caulfield appear?",
//       choices: ["To Kill a Mockingbird", "Catcher in the Rye", "The Great Gatsby", "1984"],
//       type: "MCQs",
//       correctAnswer: "Catcher in the Rye",
//     },
//     {
//       question: "Which novel by Jane Austen tells the story of Emma Woodhouse?",
//       choices: ["Pride and Prejudice", "Sense and Sensibility", "Emma", "Northanger Abbey"],
//       type: "MCQs",
//       correctAnswer: "Emma",
//     },
//     {
//       question: "Who wrote the novel 'Brave New World'?",
//       choices: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Jules Verne"],
//       type: "MCQs",
//       correctAnswer: "Aldous Huxley",
//     },
//     {
//       question: "In 'The Lord of the Rings', what is the name of Frodo's sword?",
//       choices: ["Anduril", "Orcrist", "Sting", "Glamdring"],
//       type: "MCQs",
//       correctAnswer: "Sting",
//     },
//     {
//       question: "Which book is a memoir by Maya Angelou?",
//       choices: ["The Color Purple", "I Know Why the Caged Bird Sings", "Beloved", "The Joy Luck Club"],
//       type: "MCQs",
//       correctAnswer: "I Know Why the Caged Bird Sings",
//     },
//     {
//       question: "What is the title of Harper Lee's second novel, published in 2015?",
//       choices: ["Go Set a Watchman", "To Kill a Mockingbird: Part II", "Atticus", "The Reckoning"],
//       type: "MCQs",
//       correctAnswer: "Go Set a Watchman",
//     },
//     {
//       question: "Which novel is set in the dystopian society of Panem?",
//       choices: ["The Maze Runner", "Divergent", "The Hunger Games", "The Giver"],
//       type: "MCQs",
//       correctAnswer: "The Hunger Games",
//     },
//     {
//       question: "Who wrote the classic science fiction novel 'Fahrenheit 451'?",
//       choices: ["Kurt Vonnegut", "Isaac Asimov", "Arthur C. Clarke", "Ray Bradbury"],
//       type: "MCQs",
//       correctAnswer: "Ray Bradbury",
//     },
//   ],
// };

// export const bookQuiz = {
//   topic: "Books",
//   level: "Hard",
//   totalQuestions: 10,
//   perQuestionScore: 15,
//   questions: [
//     {
//       question: "Which novel is often considered a precursor to the science fiction genre?",
//       choices: ["Frankenstein", "Moby-Dick", "War and Peace", "Wuthering Heights"],
//       type: "MCQs",
//       correctAnswer: "Frankenstein",
//     },
//     {
//       question: "In the play 'Hamlet', who says the famous line 'To be, or not to be: that is the question'?",
//       choices: ["Polonius", "Laertes", "Ophelia", "Hamlet"],
//       type: "MCQs",
//       correctAnswer: "Hamlet",
//     },
//     {
//       question: "Who wrote the epic fantasy series 'A Song of Ice and Fire'?",
//       choices: ["J.R.R. Tolkien", "George R.R. Martin", "Terry Pratchett", "Brandon Sanderson"],
//       type: "MCQs",
//       correctAnswer: "George R.R. Martin",
//     },
//     {
//       question: "In 'Pride and Prejudice', who is the youngest Bennet sister?",
//       choices: ["Jane", "Lydia", "Elizabeth", "Mary"],
//       type: "MCQs",
//       correctAnswer: "Lydia",
//     },
//     {
//       question: "Which classic novel begins with the famous line 'It is a truth universally acknowledged, that a single man in possession of a good fortune must be in want of a wife'?",
//       choices: ["Emma", "Sense and Sensibility", "Pride and Prejudice", "Mansfield Park"],
//       type: "MCQs",
//       correctAnswer: "Pride and Prejudice",
//     },
//     {
//       question: "In 'The Lord of the Rings', what creature is Gollum?",
//       choices: ["Hobbit", "Elf", "Dwarf", "Hobgoblin"],
//       type: "MCQs",
//       correctAnswer: "Hobbit",
//     },
//     {
//       question: "Which book is the first in the 'Harry Potter' series?",
//       choices: ["Harry Potter and the Chamber of Secrets", "Harry Potter and the Prisoner of Azkaban", "Harry Potter and the Goblet of Fire", "Harry Potter and the Philosopher's Stone"],
//       type: "MCQs",
//       correctAnswer: "Harry Potter and the Philosopher's Stone",
//     },
//     {
//       question: "Who is the author of the novel 'The Picture of Dorian Gray'?",
//       choices: ["Oscar Wilde", "Mark Twain", "Charles Dickens", "Emily Bronte"],
//       type: "MCQs",
//       correctAnswer: "Oscar Wilde",
//     },
//     {
//       question: "Which classic novel features the character of Captain Ahab?",
//       choices: ["Treasure Island", "Moby-Dick", "Twenty Thousand Leagues Under the Sea", "Robinson Crusoe"],
//       type: "MCQs",
//       correctAnswer: "Moby-Dick",
//     },
//     {
//       question: "What is the title of the first book in J.K. Rowling's 'Fantastic Beasts' series?",
//       choices: ["Fantastic Beasts and Where to Find Them", "The Crimes of Grindelwald", "The Sorcerer's Stone", "The Cursed Child"],
//       type: "MCQs",
//       correctAnswer: "Fantastic Beasts and Where to Find Them",
//     },
//   ],
// };
