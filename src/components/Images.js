import React from 'react';
import image1 from '../../assets/suchar1.jpg';
import image2 from '../../assets/suchar2.jpg';
import image3 from '../../assets/suchar3.jpg';

import styles from './Images.css';
import commonStyles from '../common.css';

/* ????
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('./images', false, '/\.png/'));

<img src={images['0.png']} />
 */
const Images = () => {
    return (
        <div className={`${commonStyles.column} ${styles.imageContainer}`}>
            <img className={styles.image} src={image1} alt="memBurger1"></img>
            <img className={styles.image} src={image2} alt="memBurger2"></img>
            <img className={styles.image} src={image3} alt="memBurger3"></img>
        </div>
    )
}

export default Images;