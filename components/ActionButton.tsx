import React from 'react';
import Button from '../components/Button';

interface ActionButtonProps {
  text: string;
  onPress: () => void;
  color: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  onPress,
  color,
}) => {
  return <Button text={text} onPress={onPress} color={color} />;
};

export default ActionButton;
