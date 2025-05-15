import './App.css'
import { useState } from 'react'
import Confetti from "react-confetti"

function App() {
  const [guess, setGuess] = useState('');
  const [submittedGuess, setSubmittedGuess] = useState(''); // New state to store the last submitted guess
  const [message, setMessage] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const correctAnswer = 'Costco';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedGuess(guess); // Store the current guess as the submitted guess
    if (guess.toLowerCase() === correctAnswer.toLowerCase()) {
      setMessage(`Correct! it IS ${correctAnswer}! WOOHOO!`);
      setIsCorrect(true);
    } else {
      setMessage(`It is NOT ${guess}`);
      setIsCorrect(false);
    }
  };

  return (
    <>
      <div>
        <h1 className="text-2xl">GUESS MY FAVORITE</h1>
        <h1 className="text-2xl text-red-500">SUPERMARKET</h1>
      </div>
      {message && (
        <div className="mt-4 text-center text-lg font-medium">
          {isCorrect ? (
            <>
            <Confetti />
              Correct! it IS{' '}
              <span className="text-green-500">{correctAnswer}</span>! WOOHOO!
            </>
          ) : (
            <>
              It is NOT{' '}
              <span className="text-red-500">{submittedGuess}</span>
            </>
          )}
        </div>
      )}
      <form 
        onSubmit={handleSubmit} 
        className="mt-4 p-6 border-2 border-gray-300 rounded-lg shadow-lg bg-white max-w-sm mx-auto"
      >
        <label className="block mb-2 text-lg font-medium text-gray-700">
          Enter your guess:
          <input 
            type="text"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <button className="bg-blue-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-blue-600 transition-colors">
          Submit
        </button>
      </form>
    </>
  )
}

export default App