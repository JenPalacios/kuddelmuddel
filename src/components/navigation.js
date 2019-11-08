import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import logo from '../images/logo.png'

console.log(styles);

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">
          <img src={logo} alt="Logo" className={styles.logo}></img>
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/about/">About</Link>
      </li>
    </ul>
  </nav>
)
