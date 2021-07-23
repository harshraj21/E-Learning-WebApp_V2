import React from 'react';
import styles from './Notice.module.css';
import { Alert } from 'react-bootstrap';
import globalstyles from '../../Global.module.css';

const Notice = () => {
    const colors = ['primary','secondary','success','danger','warning','info']
    // useEffect(()=>{
    //     console.log('triggered');
    // })
    const msg = {
        1: {
            date: new Date(),
            toppic: 'Important Notice 1',
            message: 'Your classes have been rescheduled for today on this coming sunday'
        },
        2: {
            date: new Date(),
            toppic: 'Important Notice 2',
            message: 'Greetings students hope you all are doing well in this pandemic stay healthy and stay safe'
        },
        3: {
            date: new Date(),
            toppic: 'Important Notice 3',
            message: 'The results have been out for your previous test'
        },
        4: {
            date: new Date(),
            toppic: 'Important Notice 1',
            message: 'Your classes have been rescheduled for today on this coming sunday'
        },
        5: {
            date: new Date(),
            toppic: 'Important Notice 2',
            message: 'Greetings students hope you all are doing well in this pandemic stay healthy and stay safe'
        },
        6: {
            date: new Date(),
            toppic: 'Important Notice 3',
            message: 'The results have been out for your previous test'
        },
        7: {
            date: new Date(),
            toppic: 'Important Notice 3',
            message: 'The results have been out for your previous test'
        },
        8: {
            date: new Date(),
            toppic: 'Important Notice 3',
            message: 'The results have been out for your previous test'
        },
        9: {
            date: new Date(),
            toppic: 'Important Notice 3',
            message: 'The results have been out for your previous test'
        },
    }

    let ctr = 0;
    const prepare = Object.entries(msg).map((el, key) => {
        if (ctr >= 6) {
            ctr = 0;
        }
        return (
            <Alert className={styles.alertz + ' overflow-auto'} key={key} variant={colors[ctr++]}>
                <h5 className={styles.textadj}>{el[1]['toppic']}</h5>
                <small className={styles.textadj2}>{el[1]['date'].toLocaleString()}</small>
                {el[1]['message']}</Alert>
        );
    });

    return (
        <div className={globalstyles.border}>
            {prepare}
        </div>
    );
};

export default Notice;