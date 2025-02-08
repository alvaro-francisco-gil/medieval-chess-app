import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Board from './Board';
import MoveList from './MoveList';

const GameScreen = () => {
  const [boardState, setBoardState] = useState(initialBoardState);
  const [moveHistory, setMoveHistory] = useState([]);

  const handleMove = (from, to) => {
    // Send move to backend for validation or AI processing
    // Update board state and move history based on response
    const newBoardState = makeMove(boardState, from, to); // Example function
    setBoardState(newBoardState);
    setMoveHistory([...moveHistory, { from, to }]);
  };

  return (
    <View>
      <Board boardState={boardState} onMove={handleMove} />
      <MoveList moves={moveHistory} />
    </View>
  );
};

export default GameScreen;
