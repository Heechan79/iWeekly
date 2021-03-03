import React from 'react';
import styles from './Layout.module.css';

// TODO: Props need some typing
const Layout: React.FunctionComponent<unknown> = (props) => {
  return <div className={styles.Layout}>{props.children}</div>;
};

export default Layout;
