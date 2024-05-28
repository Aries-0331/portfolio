import { Outlet } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import './index.scss'

const Layout = () => {
  const largeScreen = useMediaQuery({ query: '(min-width: 768px)' })
  return (
    <div className="page">
      {!largeScreen ? <Navbar /> : <Sidebar />}
      <div className="container">
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
