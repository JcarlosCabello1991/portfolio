import React from 'react'
import styles from './style.module.css'

function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.description}>
        <span>Hi, I am</span>
        <h1 className={styles.h1Name}>Juan Carlos Cabello</h1>
        <p>And I am a <span className={styles.title}>Full Stack Developer</span></p>
        <p className={styles.legend}>focused on frontend with one year of experience. I have been preparing and developing projects, for the last 8 months in a real working environment using React, Next, Js, Typescript, Node and more</p>
        {/*  */}
        <div className={styles.gridSkillsContainer}>
          <div className={styles.boxGithub}>
            <i className="fa-brands fa-github" style={{color:'purple'}}></i>
            <span className={styles.boxesSpan}> Over 30</span>
          </div>
          <div className={styles.boxScrum}>
            <i className="fa-solid fa-people-roof" style={{color:'green'}}></i>
            <span className={styles.boxesSpan}>SCRUM</span>
          </div>
          <div className={styles.boxEmpathetic}>
          <i className="fa-solid fa-people-carry-box" style={{color:'darkorange'}}></i>
            <span className={styles.boxesSpan}>Empathetic</span>
          </div>
          <div className={styles.boxPersevering}>
            <i className="fa-solid fa-arrow-trend-up"></i>
            <span className={styles.boxesSpan}>Persevering</span>
          </div>
        </div>
        <a href='https://github.com/JcarlosCabello1991' style={{marginBottom:'1rem'}}><span className={styles.title}>Click to My GitHub</span></a>
        <button className={styles.btnContact}><a href='#Contact' className={styles.a}><span>Contact Me</span></a></button>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src='../../../Juan Carlos-circle.png' alt='juan carlos cabello'/>
      </div>
    </div>
  )
}

export default Hero