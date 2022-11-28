import React, { useState } from 'react'
import styles from './style.module.css'

function Appbar() {
  const [active, setActive] = useState<string>('Home');
  const [active1, setActive1] = useState<string>('Home1');

  const toggleMenu = (available:string, disable:string) => {
    if(available[available.length-1] === '1'){
      setActive1(available)
      document.getElementById(available)?.classList.toggle(`${styles.active}`);
      document.getElementById(disable)?.classList.toggle(`${styles.active}`); 
    }else{
      setActive(available)
      document.getElementById(available)?.classList.toggle(`${styles.active}`);
      document.getElementById(disable)?.classList.toggle(`${styles.active}`);
    }
    if(available === 'Home' || available === 'Home1'){
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
  console.log(window.innerWidth)
  const toggleVerticalMenu = () => {
    document.getElementById("menu")?.classList.toggle(`${styles.hide}`)
  }

  return (
    <div id='HomePage' className={styles.barContainer}>
      
      {
        window.innerWidth <= 280 &&
        <div className={styles.menu}>
        <div className={styles.menuIcon} onClick={toggleVerticalMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <div id='menu' className={`${styles.menuContainer} ${styles.hide}`}>
          <ul className={styles.listVertical}>
            <li><a href='#HomePage' className={styles.a}><span id='Home1' className={`${styles.span} ${styles.active}`} onClick={()=>{toggleMenu('Home1', active1);toggleVerticalMenu()}}>Home</span></a></li>
            <li><a href='#HighlightProjects' className={styles.a}><span id='Projects1' className={styles.span} onClick={()=>{toggleMenu('Projects1', active1);toggleVerticalMenu()}}>Projects</span></a></li>
            <li><a href='#MyCV' className={styles.a}><span id='CV1' className={styles.span} onClick={()=>{toggleMenu('CV1', active1);toggleVerticalMenu()}}>CV</span></a></li>
            <li><a href='#UsedTechnologies' className={styles.a}><span id='Technologies1' className={styles.span} onClick={()=>{toggleMenu('Technologies1', active1);toggleVerticalMenu()}}>Technologies</span></a></li>
            <li><a href='#Contact' className={styles.a}><span id='Contactme1' className={styles.span} onClick={()=>{toggleMenu('Contactme1', active1);toggleVerticalMenu()}}>Contact</span></a></li>
          </ul>
        </div>
      </div>
      }
      {
         window.innerWidth > 280 && 
        <ul className={styles.list}>
        <li><a href='#HomePage' className={styles.a}><span id='Home' className={`${styles.span} ${styles.active}`} onClick={()=>{toggleMenu('Home', active)}}>Home</span></a></li>
        <li><a href='#HighlightProjects' className={styles.a}><span id='Projects' className={styles.span} onClick={()=>{toggleMenu('Projects', active)}}>Projects</span></a></li>
        <li><a href='#MyCV' className={styles.a}><span id='CV' className={styles.span} onClick={()=>{toggleMenu('CV', active)}}>CV</span></a></li>
        <li><a href='#UsedTechnologies' className={styles.a}><span id='Technologies' className={styles.span} onClick={()=>{toggleMenu('Technologies', active)}}>Technologies</span></a></li>
        <li><a href='#Contact' className={styles.a}><span id='Contactme' className={styles.span} onClick={()=>{toggleMenu('Contactme', active)}}>Contact</span></a></li>
      </ul>
      }
    </div>
  )
}

export default Appbar