import React from "react";

interface Props {
  className?: string;
  children: string;
}
const Header = ({ className, children }: Props) => {
  return (
    <h1 className={`bg-orange-600 text-white text-center py-2 ${className}`}>
      {children}
    </h1>
  );
};

export default Header;
