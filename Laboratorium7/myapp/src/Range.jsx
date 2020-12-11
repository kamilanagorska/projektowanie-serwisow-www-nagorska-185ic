import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

export default function RangeSlider() {
  const [value, setValue] = React.useState([20, 30]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div style={{width: 300, marginLeft: '5px', marginTop: '10px'}}>
      <Typography id="range-slider" gutterBottom>
        Age range
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        //wyswietla liczby nad
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
    </div>
  );
}