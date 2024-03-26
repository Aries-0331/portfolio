import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoA from '../../../assets/images/A.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .fromTo(
        outlineLogoRef.current,
        { duration: 1, drawSVG: '0%' },
        { duration: 3, drawSVG: '60%' },
        'start'
      )

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 2,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoA}
        alt="JavaScript Developer"
      />

      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="875.000000pt"
        height="875.000000pt"
        viewBox="0 0 875.000000 875.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,875.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        ></g>
      </svg>
    </div>
  )
}

export default Logo
