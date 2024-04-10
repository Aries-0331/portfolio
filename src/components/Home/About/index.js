import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faGithub,
  faLinux,
} from '@fortawesome/free-brands-svg-icons'
import AnimatedLetters from '../../AnimatedLetters'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="about-container">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={'About me'.split('')}
                idx={15}
              />
            </h1>
            <p>
              🌱 With a 7-year software development journey, I've evolved from
              specializing in audio/video security to cultivating a deep-seated
              passion for front-end development. My pursuit now lies in pushing
              the boundaries of web design innovation.
            </p>
            <p>
              🌟My distinct background harmonizes security acumen with creative
              front-end prowess, anchoring my efforts on delivering user-centric
              innovations and technological services.
            </p>
            <p>
              🔥 Now, I'm deeply fascinated with front-end technologies and
              looking for a role in established IT company with the opportunity
              to work with the latest technologies on challenging and diverse
              projects.
            </p>
          </div>
          <div className="cube-container">
            <div className="stage-cube-cont">
              <div className="cubespinner">
                <div className="face1">
                  <FontAwesomeIcon icon={faJs} color="#FDD700" />
                </div>
                <div className="face2">
                  <FontAwesomeIcon icon={faReact} color="#28A4D9" />
                </div>
                <div className="face3">
                  <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className="face4">
                  <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                </div>
                <div className="face5">
                  <FontAwesomeIcon icon={faGithub} color="#333" />
                </div>
                <div className="face6">
                  <FontAwesomeIcon icon={faLinux} color="#333" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
