import { Outlet } from 'react-router-dom'
import MediaQuery, { useMediaQuery } from 'react-responsive'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import './index.scss'

const Layout = () => {
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1224px)' })
  return isLargeScreen ? (
    <div className="page">
      <Sidebar />
      <div className="large-screen-container">
        <span className="tags top-tags">
          <span className="top-tag-html">&lt;/html&gt;</span>
          <br />
          &lt;body&gt;
        </span>

        <Outlet />

        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  ) : (
    <div className="page">
      <Navbar />
      <div className="small-screen-container">
        <span className="tags top-tags">
          <span className="top-tag-html">&lt;/html&gt;</span>
          <br />
          &lt;body&gt;
        </span>

        <Outlet />

        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
