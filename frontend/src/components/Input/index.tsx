import React, { InputHTMLAttributes, useCallback } from "react";

import { currency } from "./masks";

// import "./styles.css";

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    currency(e);
  }, []);

  return (
    <div>
      <input {...props} onKeyUp={handleKeyUp} />
    </div>
  );
};

export default Input;
