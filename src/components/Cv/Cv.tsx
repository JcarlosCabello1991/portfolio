import React from 'react'
import styles from './style.module.css'

function Cv() {
  return (
    <div id='MyCV' className={styles.cvContainer}>
      <h2>My CV</h2>
      <button className={styles.buttonCVNav}><a href='/Currículum Profesional JCCABELLO_Cursing.pdf' download='/Currículum Profesional JCCABELLO_Cursing.pdf'>Download my CV</a></button>
    </div>
  )
}

export default Cv