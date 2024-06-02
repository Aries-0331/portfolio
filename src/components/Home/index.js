import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import LogoTitle from '../../assets/images/A.png'
import AnimatedLetters from '../AnimatedLetters'
import portfolioData from '../../data/portfolio.json'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = 'ries'.split('')
  const jobArray = 'A Software Engineer.'.split('')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  const renderPortfolio = (portfolio) => {
    return (
      <div className="card-container">
        {portfolio.map((port, index) => {
          return (
            <div className="card" key={index}>
              <img
                className="portfolio-image"
                src={port.cover}
                alt="portfolio"
              />
              <div className="content">
                <p className="title">{port.title}</p>
                <h4 className="description">{port.description}</h4>
                <button className="btn" onClick={() => window.open(port.url)}>
                  View
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div className="home-container">
        <div className="greet-container">
          <div className="title-wrapper">
            <h1 className="text-title">
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>{' '}
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
              <img className={'text-img'} src={LogoTitle} alt="developer" />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={15}
              />
            </h1>
            <h2 className="subtitle">
              Frontend Developer / Software Developer / Life-Long Learner.
            </h2>
          </div>
          <div className="button-wrapper">
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </div>
        </div>

        <div className="projects-container">
          {renderPortfolio(portfolioData.portfolio)}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
