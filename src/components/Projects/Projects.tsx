import React from 'react'
import styles from './style.module.css'
import {dataImages} from '../../dataImages/dataImages.ts'

type Image = {
  url:string,
  name: string,
  description: string,
  title: string,
  technologies:[string],
  web:string
}

function Projects() {

  return (
    <section id='HighlightProjects' style={{textAlign:'center', display:'flex', flexDirection:'column', paddingTop:'2rem', alignItems:'center'}}>
      <h2>Highlight Projects</h2>
      <div className={styles.projectsContainer}>
        {
          dataImages.map((image:Image, index:number) => {
            return(
            <div className={styles.projectDiv}>
              <div className={styles.pictureProject}>
                <img id={`${index}`} className={`${styles.image}`} key={index} src={`${image.url}`} alt={`${image.name}`}/>
              </div>
              <div className={styles.descriptionProject}>
                <h3 className={styles.h3}>{image.title}</h3>
                <p>{image.description}</p>
                <h4 className={styles.h3}>Used technologies</h4>
                <div className={styles.techContainer}>
                  {
                    image.technologies.map((tech:string, index:number) => {
                      return(
                          <img key={`${tech}${index}`} src={`${tech}`} style={{width:'3rem'}}/>                    
                      )
                    }
                  )}
                </div>
                {
                  image.web && 
                  <div>
                    <h4><a href={`${image.web}`} target='_blanck' style={{color:'rgb(0, 136, 255)'}}>Click here to go</a></h4>
                  </div>
                }
                
              </div>
            </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects