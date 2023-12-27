import React from 'react';

const Wrapper = ({ children, title, description, styles }) => (
  <div style={styles.container}>
    <h1 style={styles.subheading}>{title}</h1>
    <p style={styles.paragraph}>{description}</p>
    <div style={styles.linkList}>{children}</div>
  </div>
);

export default Wrapper;
