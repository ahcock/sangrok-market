import React from 'react';
import Directory from '../../components/directory/directory.component';
import './homepage.styles.scss';

const Homepage = () => (
  <div className="homepage">
    <div className="directory-menu"></div>
    <Directory />
  </div>
);

export default Homepage;