import React from 'react';
import AuthLink from '../components/AuthLink';

interface AuthLinkComponentProps {
  onPress: () => void;
  message: string;
  linkText: string;
}

const AuthLinkComponent: React.FC<AuthLinkComponentProps> = ({
  onPress,
  message,
  linkText,
}) => {
  return <AuthLink onPress={onPress} message={message} linkText={linkText} />;
};

export default AuthLinkComponent;
