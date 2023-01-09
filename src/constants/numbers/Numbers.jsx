import React from 'react'
import './number.css';

const Numbers = (props) => {
  return (
    <div className="flex  flex-row items-center gap-3 w-72 m-4">
      <div className="numberHead text-white font-semibold text-4xl">{props.num}</div>
      <div className="NumberText text font-medium text-xl">{props.line}</div>
    </div>
  );
}

export default Numbers