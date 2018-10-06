import React from 'react';
import Animals from '../Animals/Animals';
import Images from '../Images/Images';

import styles from './Main.css';

class Main extends React.PureComponent {
    state = {
        animals: [],
    };

    fetchAnimals () {
        const url = "http://localhost:3000/animals"
        return fetch(url,{
            method: 'get',
        })
        .then(response => response.json())
        .catch(error => {
            console.log("Incorrect data from server", error)
        });
    }
    componentDidMount() {
        this.fetchAnimals().then(data => {
            this.setState({ animals: data.animals })
        });
    }

    render() {
        return (
            <div className={styles.mainPage}>
                <header className={styles.welcome}>
                    <h1>Welcome to my weird site!</h1>
                </header>
                <Animals animals={ this.state.animals }/>
                <Images />
            </div>
        )
    }
}

export default Main;