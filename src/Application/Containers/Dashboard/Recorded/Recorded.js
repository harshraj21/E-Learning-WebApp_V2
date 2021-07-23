import React from 'react'
import globalstyles from '../../Global.module.css';
import styles from './Recorded.module.css'
import { getFormattedDate } from '../../../../shared/dateFormatter'
import Card from '../../../Components/Card/Card'

const Recorded = (props) => {
    const dataz = {
        1: {
            date: new Date(),
            1: {
                heading: 'Chemistry',
                title: 'Chemical Kinetics',
                text: 'learn about different chemicals and their properties',
                available: true,
                availabletime: '2021-12-12 01:26:58',
                expiretime: '2021-12-12 01:26:58',
                videoid: 'yuifgaif',
            },
            2: {
                heading: 'Physics',
                title: 'Current Electricity',
                text: 'learn about diffrent cell types',
                available: false,
                availabletime: '2021-06-20 23:28:00',
                expiretime: '2021-12-12 01:26:58',
                videoid: 'ehioashgni',
            },
            3: {
                heading: 'Chemistry',
                title: 'Chemical Kinetics',
                text: 'learn about different chemicals and their properties',
                available: true,
                availabletime: '2021-12-12 01:26:58',
                expiretime: '2021-12-12 01:26:58',
                videoid: 'ihlanlfa',
            },
            4: {
                heading: 'Physics',
                title: 'Current Electricity',
                text: 'learn about diffrent cell types',
                available: false,
                availabletime: '2021-06-20 23:28:00',
                expiretime: '2021-12-12 01:26:58',
                videoid: 'ahieiglnkg',
            },
            5: {
                heading: 'Chemistry',
                title: 'Chemical Kinetics',
                text: 'learn about different chemicals and their properties',
                available: true,
                availabletime: '2021-12-12 01:26:58',
                expiretime: '2021-12-12 01:26:58',
                videoid: 'ihlanlfa',
            },
            6: {
                heading: 'Physics',
                title: 'Current Electricity',
                text: 'learn about diffrent cell types',
                available: false,
                availabletime: '2021-06-20 23:28:00',
                expiretime: '2021-12-12 01:26:58',
                videoid: 'ahieiglnkg',
            },
            7: {
                heading: 'Chemistry',
                title: 'Chemical Kinetics',
                text: 'learn about different chemicals and their properties',
                available: true,
                availabletime: '2021-12-12 01:26:58',
                expiretime: '2021-12-12 01:26:58',
                videoid: 'ihlanlfa',
            },
            8: {
                heading: 'Physics',
                title: 'Current Electricity',
                text: 'learn about diffrent cell types',
                available: false,
                availabletime: '2021-06-20 23:28:00',
                expiretime: '2021-12-12 01:26:58',
                videoid: 'ahieiglnkg',
            },
        },
        2: {
            date: new Date(),
            1: {
                heading: 'Chemistry',
                title: 'Chemical Kinetics',
                text: 'learn about different chemicals and their properties',
                available: true,
                availabletime: '2021-12-12 01:26:58',
                expiretime: '2021-12-12 01:26:58',
                videoid: 'jsenmsg',
            },
            2: {
                heading: 'Physics',
                title: 'Current Electricity',
                text: 'learn about diffrent cell types',
                available: false,
                availabletime: '2021-06-20 23:28:00',
                expiretime: '2021-12-12 01:26:58',
                videoid: 'lishgosn',
            },
        },
    };
    const prep = Object.entries(dataz).map((data, idx) => {
        return (
            <div key={idx} className={'shadow-lg p-3 bg-body rounded ' + styles.adjust}>
                <div className={'shadow-lg p-1 mb-3 rounded ' + styles.align}>
                    <p className={styles.adjust2}>{getFormattedDate(data[1]['date'])}</p>
                </div>
                <div>
                    <Card videos={data[1]} />
                </div>
            </div>
        );
    });
    return (
        <div className={globalstyles.border}>
            {prep}
        </div>
    );
};

//.toLocaleDateString()

export default Recorded;