import React from "react";

const Logo = () => {
  return (
    <>
      <h1 className="flex h1-bold">FinTalk</h1>
      <img
        src="/assets/images/logo.svg"
        alt="logo"
        className="flex"
        height={48}
        width={48}
      />
    </>
  );
};

export default Logo;
