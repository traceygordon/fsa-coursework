/* eslint-disable react/prop-types */
import { useState } from 'react';

const Color = ({ color, selectColor, selectedColor }) => {
  const isSelected = selectedColor === color ? 'selected' : '';

  return (
    <div
      className={`${color} ${isSelected}`}
      onClick={() => selectColor(color)}
    />
  );
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState('');

  const selectColor = (colorName) => {
    setSelectedColor(colorName);
  };

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color
          color="yellow"
          selectColor={selectColor}
          selectedColor={selectedColor}
        />
        <Color
          color="green"
          selectColor={selectColor}
          selectedColor={selectedColor}
        />
        <Color
          color="black"
          selectColor={selectColor}
          selectedColor={selectedColor}
        />
      </div>
    </div>
  );
};

export default App;
