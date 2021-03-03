import React, { Component } from 'react';
import Column from './components/column';

import styles from './Board.module.css';

export default class Board extends Component {
  render() {
    return (
      <div className={styles.Board}>
        <Column />
        <Column />
        <Column />
        <Column />
      </div>
    );
  }
}
