import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Loader from 'react-loaders'
import AnimatedLetters from '../../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="contact-page">
        <div className="contact-container">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={'Contact me'.split('')}
                idx={15}
              />
            </h1>
            <div className="info-map">
              Aries,
              <br />
              China,
              <br />
              Chaoyang , Bei Jing, 102218
              <br />
              <span>urchinzhou@gmail.com</span>
            </div>
            <div className="contact-form">
              <form>
                <ul>
                  <li className="half">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    ></input>
                  </li>
                  <li className="half">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    ></input>
                  </li>
                  <li>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      required
                    ></input>
                  </li>
                  <li>
                    <textarea
                      name="message"
                      placeholder="Message"
                      required
                    ></textarea>
                  </li>
                  <li>
                    <input
                      type="submit"
                      className="flat-button"
                      value="SEND"
                    ></input>
                  </li>
                </ul>
              </form>
            </div>
          </div>
          <div className="map-wrap">
            <MapContainer center={[40.033851, 116.412391]} zoom={13}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[40.033851, 116.412391]}>
                <Popup>
                  Aries lives here, come over for a cup of coffee :)
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
