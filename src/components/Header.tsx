import Image from "next/image";
import React from "react";

interface image {
  src: string;
}

const imgLoader = ({ src }: image) => {
  return `../assets/images/common/${src}`;
};

const Header = () => {
  return (
    <>
      <h1>
        <a href='#'>
          <Image
            loader={imgLoader}
            src='logo.png'
            width={155}
            height={42}
            alt='노랑풍선'
          />
        </a>
      </h1>
    </>
  );
};

export default Header;
