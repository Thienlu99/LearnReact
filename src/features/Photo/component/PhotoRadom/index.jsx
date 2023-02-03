import React from 'react';
import './style.css';
PhotoRadom.propTypes = {};

function PhotoRadom(props) {
  const { hobbyList, activeId, onHobbyClick } = props;
  const handleClick = (hobby) => {
    if (onHobbyClick) {
      onHobbyClick(hobby);
    }
  };
  return (
    <div>
      <ul className="hobby-list">
        {hobbyList.map((hobby) => (
          <li
            key={hobby.id}
            className={hobby.id === activeId ? 'active' : ''}
            onClick={() => {
              handleClick(hobby);
            }}
          >
            {hobby.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PhotoRadom;
