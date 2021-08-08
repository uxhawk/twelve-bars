import React from 'react';
import { Icon, Colors } from '@blueprintjs/core';
import { useBeats } from './BeatContext';




export default function BeatIcons() {
    const { position } = useBeats();

    return (
        <div style={{width: '80%', display: 'flex', justifyContent: 'space-between', position: 'absolute', marginTop: '45px'}} >
            <Icon icon={position.beat <= 1 ? 'full-circle' : 'circle'} iconSize={'10px'} style={{ color: Colors.BLUE3}}/>
            <Icon icon={position.beat === 2 ? 'full-circle' : 'circle'} iconSize={'10px'} style={{ color: Colors.BLUE3}}/>
            <Icon icon={position.beat === 3 ? 'full-circle' : 'circle'} iconSize={'10px'} style={{ color: Colors.BLUE3}}/>
            <Icon icon={position.beat === 4 ? 'full-circle' : 'circle'} iconSize={'10px'} style={{ color: Colors.BLUE3}}/>
    </div>
    )
}
