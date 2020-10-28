import React, { useRef, useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import Confetti from 'react-confetti';
import { getCompletedGoalsList } from '../redux/selectors';

export function ConfettiAction(props) {
  const completedGoalsList = useSelector(getCompletedGoalsList);
  const currentCount = completedGoalsList.length;
  const prevCountRef = useRef(currentCount);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (currentCount > prevCountRef.current) {
      prevCountRef.current = currentCount;
      setShowConfetti(true);
    }
  }, [currentCount]);

  return showConfetti && (
    <Confetti
      recycle={false}
      style={{ position: 'fixed' }}
      numberOfPieces={1500}
      onConfettiComplete={() => setShowConfetti(false)}
    />
  )
}