import React, {  } from 'react';
import { Card } from '@blueprintjs/core';
import { useBeats } from './BeatContext';



export default function TwelveBars() {
    const { position } = useBeats();
    
    return (
        <>
        <h1 className="bp3-heading mb-3">Twelve Bar Blues</h1>
        <Card className="text-center mb-3">
            <p>Beat: {position.beat}</p>
            <p>Bar: {position.bar}</p>
            <div>
                <h3 className="bp3-heading">1-1-1-1</h3>
            </div>
            <div>
                <h3 className="bp3-heading">4-4-1-1</h3>
            </div>
            <div>
                <h3 className="bp3-heading">5-4-1-5</h3>
            </div>
          </Card>
        </>
    )
}

