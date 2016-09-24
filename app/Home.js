import React from 'react';
import styles from './App.css';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div className={styles.app}>
        <div className="panel panel-default">Home Now!</div>
      </div>
    );
  }
}
