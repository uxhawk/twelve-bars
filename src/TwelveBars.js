import React, {  } from 'react';
import { Card, Elevation } from '@blueprintjs/core';
import { useBeats } from './BeatContext';
import BeatIcons from './BeatIcons';


export default function TwelveBars() {
    const { position } = useBeats();
    
    return (
        <>
        <h1 className="bp3-heading mb-3">Twelve Bar Blues</h1>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px'}}>
            <Card className='bar-card' elevation={(position.bar === 1 ? Elevation.THREE : Elevation.ZERO )} style={{position: 'relative'}}>
                <div style={{position: 'absolute', marginTop: '-15px'}}>
                    <p>1</p>
                </div>
                {position.bar <=1 ? <BeatIcons /> : <div></div>}
            </Card>
            <Card className='bar-card' elevation={(position.bar === 2 ? Elevation.THREE : Elevation.ZERO )} style={{position: 'relative'}}>
                <div style={{position: 'absolute', marginTop: '-15px'}}>
                    <p>1</p>
                </div>
                {position.bar === 2 ? <BeatIcons /> : <div></div>}
            </Card>
            <Card className='bar-card' elevation={(position.bar === 3 ? Elevation.THREE : Elevation.ZERO )} style={{position: 'relative'}}>
                <div style={{position: 'absolute', marginTop: '-15px'}}>
                    <p>1</p>
                </div>
                {position.bar === 3 ? <BeatIcons /> : <div></div>}
            </Card>
            <Card className='bar-card' elevation={(position.bar === 4 ? Elevation.THREE : Elevation.ZERO )} style={{position: 'relative'}}>
                <div style={{position: 'absolute', marginTop: '-15px'}}>
                    <p>1</p>
                </div>
                {position.bar === 4 ? <BeatIcons /> : <div></div>}
            </Card>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px'}}>
            <Card className='bar-card' elevation={(position.bar === 5 ? Elevation.THREE : Elevation.ZERO )}style={{position: 'relative'}}>
                <div style={{position: 'absolute', marginTop: '-15px'}}>
                    <p>4</p>
                </div>
                {position.bar === 5 ? <BeatIcons /> : <div></div>}
            </Card>
            <Card className='bar-card' elevation={(position.bar === 6 ? Elevation.THREE : Elevation.ZERO )} style={{position: 'relative'}}>
                <div style={{position: 'absolute', marginTop: '-15px'}}>
                    <p>4</p>
                </div>
                {position.bar === 6 ? <BeatIcons /> : <div></div>}
            </Card>
            <Card className='bar-card' elevation={(position.bar === 7 ? Elevation.THREE : Elevation.ZERO )} style={{position: 'relative'}}>
                <div style={{position: 'absolute', marginTop: '-15px'}}>
                    <p>1</p>
                </div>
                {position.bar === 7 ? <BeatIcons /> : <div></div>}
            </Card>
            <Card className='bar-card' elevation={(position.bar === 8 ? Elevation.THREE : Elevation.ZERO )} style={{position: 'relative'}}>
                <div style={{position: 'absolute', marginTop: '-15px'}}>
                    <p>1</p>
                </div>
                {position.bar === 8 ? <BeatIcons /> : <div></div>}
            </Card>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px'}}>
            <Card className='bar-card' elevation={(position.bar === 9 ? Elevation.THREE : Elevation.ZERO )} style={{position: 'relative'}}>
                <div style={{position: 'absolute', marginTop: '-15px'}}>
                    <p>5</p>
                </div>
                {position.bar === 9 ? <BeatIcons /> : <div></div>}
            </Card>
            <Card className='bar-card' elevation={(position.bar === 10 ? Elevation.THREE : Elevation.ZERO )} style={{position: 'relative'}}>
                <div style={{position: 'absolute', marginTop: '-15px'}}>
                    <p>4</p>
                </div>
                {position.bar === 10 ? <BeatIcons /> : <div></div>}
            </Card>
            <Card className='bar-card' elevation={(position.bar === 11 ? Elevation.THREE : Elevation.ZERO )} style={{position: 'relative'}}>
                <div style={{position: 'absolute', marginTop: '-15px'}}>
                    <p>1</p>
                </div>
                {position.bar === 11 ? <BeatIcons /> : <div></div>}
            </Card>
            <Card className='bar-card' elevation={(position.bar === 12 ? Elevation.THREE : Elevation.ZERO )} style={{position: 'relative'}}>
                <div style={{position: 'absolute', marginTop: '-15px'}}>
                    <p>5 </p>
                </div>
                {position.bar === 12 ? <BeatIcons /> : <div></div>}
            </Card>
        </div>
        </>
    )
}

