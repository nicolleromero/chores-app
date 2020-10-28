import React, { useRef, useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import Confetti from 'react-confetti';
import { getCompletedGoalsList, getIncompleteGoalsList } from '../redux/selectors';

export function ConfettiAction(props) {
  const completedGoalsList = useSelector(getCompletedGoalsList);
  const incompleteGoalsList = useSelector(getIncompleteGoalsList);
  const currentCompleteCount = completedGoalsList.length;
  const currentIncompleteCount = incompleteGoalsList.length;
  const prevCompleteCountRef = useRef(currentCompleteCount);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (currentCompleteCount > prevCompleteCountRef.current) {
      setShowConfetti(true);
    }
    prevCompleteCountRef.current = currentCompleteCount;
  }, [currentCompleteCount, currentIncompleteCount]);

  return showConfetti && (
    <Confetti
      recycle={false}
      style={{ position: 'fixed' }}
      numberOfPieces={1500}
      onConfettiComplete={() => setShowConfetti(false)}
    />
  )
}