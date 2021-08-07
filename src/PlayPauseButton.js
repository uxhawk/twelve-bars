import React, { useState, useRef } from 'react';
import '@blueprintjs/core/lib/css/blueprint.css';
import { Button } from '@blueprintjs/core';
import { useBeats } from './BeatContext';

export default function PlayPauseButton(props) {
    const { loopBars, resetBeats } = useBeats();

    const [playing, setPlaying] =useState({
        isPlaying: false,
        icon: 'play',
        btnIntent: 'success',
        btnText: 'Play'
    });

    var playerID = useRef(null);
    function handleClick() {
        if (playing.isPlaying === false) {
            playerID.current = setInterval(loopBars, props.bpm);
            setPlaying({
                isPlaying: true,
                icon: 'pause',
                btnIntent: 'danger',
                btnText: 'Pause'
            });
        } else {
            clearInterval(playerID.current);
            resetBeats();
            setPlaying({
                isPlaying: false,
                icon: 'play',
                btnIntent: 'success',
                btnText: 'Play'
            });
            return;
        }
    }
    
    return (
        <Button rightIcon={playing.icon} intent={playing.btnIntent} text={playing.btnText} onClick={handleClick}/>
    )
}
