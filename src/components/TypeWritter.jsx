// Typewriter.js
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for blinking cursor
const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

// Styled component for the cursor
const Cursor = styled.span`
  font-weight: bold;
  animation: ${blink} 1s infinite;
`;

// Styled component for the typewriter text
const TypewriterText = styled.span`
  display: inline;
`;

// Fisher-Yates shuffle algorithm
const shuffleArray = (array) => {
  let newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const Typewriter = ({ sentences, typingSpeed: typingSpeedProp = 50, deletingSpeed = 50, pauseDuration = 1000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [shuffledSentences, setShuffledSentences] = useState([]);

  useEffect(() => {
    setShuffledSentences(shuffleArray(sentences));
  }, [sentences]);

  useEffect(() => {
    const handleTyping = () => {
      const currentSentence = shuffledSentences[sentenceIndex];
      
      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayedText(currentSentence.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setSentenceIndex((sentenceIndex + 1) % shuffledSentences.length);
        }
      } else {
        if (charIndex < currentSentence.length) {
          setDisplayedText(currentSentence.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      }
    };

    const speed = isDeleting ? deletingSpeed : typingSpeedProp;
    const timeout = setTimeout(handleTyping, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, shuffledSentences, sentenceIndex, typingSpeedProp, deletingSpeed, pauseDuration]);

  return (
        <>
            <TypewriterText>{displayedText}</TypewriterText>
            <Cursor>|</Cursor>
        </>

  );
};

export default Typewriter;
