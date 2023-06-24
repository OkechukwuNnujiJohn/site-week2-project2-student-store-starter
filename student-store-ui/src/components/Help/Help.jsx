import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

const HelpLink = ({ url, text }) => {
  return (
    <div>
      <Link to={url}>
        {text}Help
        <AiOutlineQuestionCircle style={{ marginLeft: '5px' }} />
      </Link>
    </div>
  );
};

export default HelpLink;
