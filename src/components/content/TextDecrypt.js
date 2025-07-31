import React, { useState, useEffect } from "react";

const useDecryptEffect = (text, glitchDuration = 2000) => {
  const [displayText, setDisplayText] = useState("");
  const [isGlitching, setIsGlitching] = useState(true);
  const [showLine, setShowLine] = useState(false);
  const [revealedChars, setRevealedChars] = useState(0);
  
  const randomChars = "!@#$%^&*()_+-=[]{}|;:,.<>?0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  
  useEffect(() => {
    let glitchInterval;
    let revealInterval;
    
    // Reset state when text changes
    setDisplayText("");
    setIsGlitching(true);
    setShowLine(false);
    setRevealedChars(0);
    
    // Phase 1: Initial glitch effect with all random characters
    glitchInterval = setInterval(() => {
      const randomText = Array(text.length)
        .fill(0)
        .map(() => randomChars[Math.floor(Math.random() * randomChars.length)])
        .join("");
      setDisplayText(randomText);
    }, 50);
    
    // Phase 2: Progressive reveal - each character transitions from random to actual
    setTimeout(() => {
      clearInterval(glitchInterval);
      
      let currentIndex = 0;
      revealInterval = setInterval(() => {
        if (currentIndex < text.length) {
          // Create text where first 'currentIndex' characters are actual, rest are random
          const actualPart = text.slice(0, currentIndex + 1);
          const randomPart = Array(text.length - currentIndex - 1)
            .fill(0)
            .map(() => randomChars[Math.floor(Math.random() * randomChars.length)])
            .join("");
          
          setDisplayText(actualPart + randomPart);
          setRevealedChars(currentIndex + 1);
          currentIndex++;
        } else {
          // All characters revealed - show line briefly before clean transition
          setDisplayText(text);
          setShowLine(true);
          
          // Remove line and transition to clean state after brief delay
          setTimeout(() => {
            setShowLine(false);
            setIsGlitching(false);
          }, 500); // Line shows for 500ms before clean transition
          
          clearInterval(revealInterval);
        }
      }, 150); // Slightly slower for better visual effect
    }, glitchDuration);
    
    return () => {
      clearInterval(glitchInterval);
      clearInterval(revealInterval);
    };
  }, [text, glitchDuration]);
  
  return { displayText, isGlitching, showLine, revealedChars };
};

export const TextDecrypt = (props) => {
  const { displayText, isGlitching, showLine } = useDecryptEffect(props.text || "", 2000);
  
  return (
    <span style={{ 
      fontFamily: isGlitching ? 'monospace' : 'inherit',
      color: isGlitching ? '#ff6b6b' : 'inherit',
      transition: 'color 0.3s ease',
      position: 'relative'
    }}>
      {displayText}
      {showLine && (
        <span style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          height: '2px',
          backgroundColor: '#ff6b6b',
          transform: 'translateY(-50%)',
          zIndex: 1,
          transition: 'opacity 0.3s ease'
        }} />
      )}
    </span>
  );
};
