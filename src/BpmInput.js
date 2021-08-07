import React, { useRef, useState } from 'react';
import { FormGroup, NumericInput } from '@blueprintjs/core';

export default function BPM() {
    const [beats, setBeats] = useState(250);
    const beatsRef = useRef();
    
    return (
        <FormGroup
            label='Beats Per Minute'
        >
        <NumericInput
                allowNumericCharactersOnly={true}
                leftIcon="music"
                defaultValue={250}
                inputRef={beatsRef}
                onValueChange={setBeats}
                min={0}
            />
        </FormGroup>
    )
}
