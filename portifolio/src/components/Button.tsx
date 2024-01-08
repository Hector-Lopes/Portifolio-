import React, { ReactNode } from 'react';
type Props = {
    children: ReactNode;
};
const Button: React.FC<Props> = ({ children }) => {
  return <button className="upmnenu-buttons"><span>{children}</span></button>
};



export default Button