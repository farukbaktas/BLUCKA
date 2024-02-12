import React from 'react';

interface HighlightedTextProps {
  text: string;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({ text }) => {
  const characters = text.split('');

  return (
    <div className="">
      {characters.map((char, index) => (
        <span key={index} className=" text-white">
          {char}
        </span>
      ))}
    </div>
  );
};

export default HighlightedText;
