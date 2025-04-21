import './App.css'
import { useState } from 'react'

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
        <h1 className="text-2xl">GUESS MY FAVORITE SUPERMARKET</h1>
      </div>
      {message && (
        <div className="mt-4 text-center text-lg font-medium">
          {isCorrect ? (
            <>
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
        <button 
          type="submit" 
          className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </>
  )
}

export default App