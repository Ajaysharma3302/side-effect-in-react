import React, { useEffect, useState } from 'react';

const EventListenerComponent = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [keyPressed, setKeyPressed] = useState('');

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleKeyPress = (event) => {
      setKeyPressed(event.key);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('keypress', handleKeyPress);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, []);

  return (
    <div>
      <h2>Mouse Position: ({mousePosition.x}, {mousePosition.y})</h2>
      <h2>Last Key Pressed: {keyPressed}</h2>
    </div>
  );
};
export default EventListenerComponent;