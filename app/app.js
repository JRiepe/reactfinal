import React from 'react';
import styles from './App.css';
var Home = require('./Home');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div className={styles.app}>
            <Home />
      </div>
    );
  }
}
