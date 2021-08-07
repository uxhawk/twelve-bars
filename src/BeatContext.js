import React, { useContext, useState } from 'react';
import Tick from './MessageClick.mp3';
import { Howl } from 'howler';
// import { auth } from '../firebase';

const BeatContext = React.createContext();

export function useBeats() {
    return useContext(BeatContext);
}

export function BeatProvider({ children }) {
    const [position, setPosition] = useState({
        beat: -1,
        bar: 1
}); 

    const audioClips = [{sound: Tick, label: 'Metronome Click'}];
    function soundPlay(src) {
    const sound = new Howl ({
        src,
        html5: true
    });
    sound.play();
    }

    function loopBars() {
        soundPlay(audioClips[0].sound);
        position.beat++;
        setPosition({...position, beat: position.beat})
        // var resetBar;

        if (position.bar === 12 && position.beat === 4) {
            setPosition({...position, bar: position.bar});
            position.bar = 1;
            position.beat = 0;
        } else if (position.beat === 4 && position.bar < 12) {
            setPosition({...position, bar: position.bar++});
            position.beat = 0;
        }
        else  {
            return
        }

    }
    
    
    function resetBeats() {
        setPosition({
            beat: -1,
            bar: 1})
    }

    const value = {
        loopBars,
        resetBeats, 
        position
    }
    
    return (
        <BeatContext.Provider value={value}>
            { children }
        </BeatContext.Provider>
    )
}
