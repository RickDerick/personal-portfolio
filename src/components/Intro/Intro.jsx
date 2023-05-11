import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import {themeContext} from '../../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'
const Intro = () => {
   const transition= {duration : 2, type: 'spring'}
const theme=useContext(themeContext)
const darkMode=theme.state.darkMode
  return (
    <div className='intro'>
      <div className="i-left">
        <div className="i-name">
          <span style={{color: darkMode? 'white':''}}> Hello, I Am </span>
          <span style={{color: darkMode? 'white':''}}> Derick H. Alukwe </span>
          <span> Am a professional Fronted Developer with high level of experience
             in web design <br />for past 2 years. I have Fluent grip on HTML, CSS and Javascript concepts including<br />Understanding of core react concepts like DOM
manipulation, Babel transpiler and <br /> directory structure. Also Knows how to sync workflows from different modules. </span>
        </div>

        <button className=' button i-button'>Hire Me</button>
        <div className="i-icons">
          <a href='https://github.com/RickDerick'>
          <img src={Github} alt="" />
          </a>
          <a href='https://www.linkedin.com/in/derick-haron-42715525a/'>
          <img src={LinkedIn} alt="" />
          </a>
          <a href='https://www.instagram.com/rick_bigfish/'>
          <img src={Instagram} alt="" />
          </a>
         
        </div>
      </div>
      <div className="i-right">
      <div className="profile-picture">
      <div className='profile-picture-background'>
      </div> 
      </div>
      
      {/*blur divs */}
      <div className="blur" style={{ background: "rgb(236 210 255)"}}></div>
      <div className="blur" style={{background:'#C1F5FF', top:'17rem', width:'21rem',height:'11rem', left:'-9rem'}}></div>
    </div>
    </div>
  )
}

export default Intro