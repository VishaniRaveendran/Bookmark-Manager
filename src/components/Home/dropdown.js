import React from 'react';
import styled from 'styled-components';

const Dropdown = () => {
    const [colors, setColors] = React.useState([
        'red',
        'green',
        'blue',
        'yellow',
        'pink',
    ]);
    const [selectedColor, setSelectedColor] = React.useState('');

    const handleSelectColor = (color) => {
        setSelectedColor(color);
    };

    return (
        <Wrapper>
            <Select>
                {colors.map((color) => (
                    <option key={color} value={color}>
                        {color}
                    </option>
                ))}
            </Select>
            <SelectedColor>{selectedColor}</SelectedColor>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 5px;
  outline: none;
`;

const SelectedColor = styled.div`
  background-color: ${(props) => props.children};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 10px;
`;

export default Dropdown;
