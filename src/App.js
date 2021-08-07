import React, { useRef, useState } from 'react';
import PlayPauseButton from './PlayPauseButton';
import { Card, Elevation, FormGroup, NumericInput } from '@blueprintjs/core';
import './App.css';
import TwelveBars  from './TwelveBars';
import { BeatProvider } from './BeatContext';

function App() {
  const [beats, setBeats] = useState(450);
  const beatsRef = useRef();


  return (
    <BeatProvider>
      <div style={{ display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
      <Card elevation={Elevation.THREE}
      className="custom-width">
        <TwelveBars />
        <FormGroup
            label='Beats Per Minute'
        >
        <NumericInput
                allowNumericCharactersOnly={true}
                leftIcon="music"
                defaultValue={beats}
                inputRef={beatsRef}
                onValueChange={setBeats}
                min={0}
            />
        </FormGroup>
        <PlayPauseButton bpm={beats}/>
      </Card>
      </div>
    </BeatProvider>


  );
}

export default App;
