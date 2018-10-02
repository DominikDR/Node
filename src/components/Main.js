import React from 'react';
import Animals from './Animals';
import Images from './Images';

import styles from './Main.css';

class Main extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            animals: [],
        };
    };

    fetchAnimals () {
        const url = "http://localhost:3000/animals?amount=5"
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
            console.log("state", data)
            this.setState({ animals: data.animals })
        });
    }

    render() {
        return (
            <div className={styles.mainPage}>
                <div className="container">
                    <header className={styles.welcome}>
                        <h1>Welcome on my weird site!</h1>
                    </header>
                    <Animals animals={ this.state.animals }/>
                    <Images />
                </div>
            </div>
        )
    }
}

export default Main;