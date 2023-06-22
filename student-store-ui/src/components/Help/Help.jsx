import React from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

const HelpLink = ({ url, text }) => {
  return (
    <div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {text}Help
        <AiOutlineQuestionCircle style={{ marginLeft: '5px' }} />
      </a>
    </div>
  );
};

export default HelpLink;
