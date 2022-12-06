import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Scene: React.FC<Props> = ({ children }) => {
  return <main>{children}</main>;
};

export default Scene;
