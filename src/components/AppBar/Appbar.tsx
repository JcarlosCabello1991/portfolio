import React, { useState } from 'react'
import styles from './style.module.css'

function Appbar() {
  const [active, setActive] = useState<string>('Home');

  const toggleMenu = (available:string, disable:string) => {
    setActive(available);
    document.getElementById(available)?.classList.toggle(`${styles.active}`);
    document.getElementById(disable)?.classList.toggle(`${styles.active}`);
    if(available === 'Home'){
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  const toggleVerticalMenu = () => {
    document.getElementById("menu")?.classList.toggle(`${styles.hide}`)
  }

  return (
    <div id='HomePage' className={styles.barContainer}>
      <div className={styles.menu}>
        <div className={styles.menuIcon} onClick={toggleVerticalMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <div id='menu' className={`${styles.menuContainer} ${styles.hide}`}>
          <ul className={styles.listVertical}>
            <li><a href='#HomePage' className={styles.a}><span id='Home' className={`${styles.span} ${styles.active}`} onClick={()=>{toggleMenu('Home', active);toggleVerticalMenu()}}>Home</span></a></li>
            <li><a href='#HighlightProjects' className={styles.a}><span id='Projects' className={styles.span} onClick={()=>{toggleMenu('Projects', active);toggleVerticalMenu()}}>Projects</span></a></li>
            <li><a href='#MyCV' className={styles.a}><span id='CV' className={styles.span} onClick={()=>{toggleMenu('CV', active);toggleVerticalMenu()}}>CV</span></a></li>
            <li><a href='#UsedTechnologies' className={styles.a}><span id='Technologies' className={styles.span} onClick={()=>{toggleMenu('Technologies', active);toggleVerticalMenu()}}>Technologies</span></a></li>
            <li><a href='#Contact' className={styles.a}><span id='Contactme' className={styles.span} onClick={()=>{toggleMenu('Contactme', active);toggleVerticalMenu()}}>Contact</span></a></li>
          </ul>
        </div>
      </div>
      <ul className={styles.list}>
        <li><a href='#HomePage' className={styles.a}><span id='Home' className={`${styles.span} ${styles.active}`} onClick={()=>{toggleMenu('Home', active)}}>Home</span></a></li>
        <li><a href='#HighlightProjects' className={styles.a}><span id='Projects' className={styles.span} onClick={()=>{toggleMenu('Projects', active)}}>Projects</span></a></li>
        <li><a href='#MyCV' className={styles.a}><span id='CV' className={styles.span} onClick={()=>{toggleMenu('CV', active)}}>CV</span></a></li>
        <li><a href='#UsedTechnologies' className={styles.a}><span id='Technologies' className={styles.span} onClick={()=>{toggleMenu('Technologies', active)}}>Technologies</span></a></li>
        <li><a href='#Contact' className={styles.a}><span id='Contactme' className={styles.span} onClick={()=>{toggleMenu('Contactme', active)}}>Contact</span></a></li>
      </ul>
    </div>
  )
}

export default Appbar