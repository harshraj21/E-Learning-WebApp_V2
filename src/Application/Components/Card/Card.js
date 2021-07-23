import React from 'react';
import styles from './Card.module.css'
import FlipCountdown from '@rumess/react-flip-countdown';
import { Card } from 'react-bootstrap';
import Aux from '../../../hoc/Aux/Aux'

const Cards = (props) => {
    const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];
    let ctr = 0;
    const prepare = Object.entries(props.videos).map((video, idx) => {
        if (ctr >= 6) {
            ctr = 0;
        }
        if(video[0]==='date'){
            return(null);
        }
        return (
            <Card bg={colors[ctr++]} key={idx} text={'white'} className={styles.resize} >
                <Card.Header>{video[1]['heading']}</Card.Header>
                <Card.Body className='overflow-auto'>
                    <Card.Title>{video[1]['title']}</Card.Title>
                    <Card.Text>{video[1]['text']}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small>{video[1]['available'] ? 'Expires In: ' : 'Available In: '}</small>
                    <FlipCountdown size='extra-small' theme='dark' dayTitle=' ' hourTitle=' ' minuteTitle=' ' secondTitle=' ' endAtZero hideYear hideMonth endAt={video[1]['available'] ? video[1]['expiretime'] : video[1]['availabletime']} />
                </Card.Footer>
            </Card>
        );
    });
    return (
        <Aux>
            {prepare}
        </Aux>
    );
};

// videos
// heading, title, text, available, availabletime, expiretime
//'2021-12-12 01:26:58' date format

export default Cards;