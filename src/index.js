import React from "react";
import ReactDOM from "react-dom";

import styles from "./Main.css"

const Index = () => {
  return <div className={styles.welcome}>Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));