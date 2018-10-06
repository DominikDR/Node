import React from 'react';

import styles from './Animals.css';

const Animals= ({animals}) => {
    const animalList = animals.map((animal, index) => {
        return (
            <div className={styles.animal} key={index}>
                { animal }
            </div>
        )
    })
    return (
        <div className={styles.animalList}>
            { animalList }
        </div>
    )
}

export default Animals;