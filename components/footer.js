import Link from 'next/link'
import { Button } from '@material-ui/core'

export default function Footer() {
    return (
      <footer className="footer">
        <nav className="footer-nav">
          <ul className="menu-nav">
            <li className="menu-nav__item">
              <Link href="/" className="menu-nav__link">
                Home
              </Link>
            </li>
            <div className="footer__products">
            <h3 className="footer__products__title">Products</h3>
            <li className="menu-nav__item">
              <Link href="/leather"  className="menu-nav__link">
                Leather Products
              </Link>
            </li>
            <li className="menu-nav__item">
              <Link href="/wood"  className="menu-nav__link">
                Wood Products
              </Link>
            </li>
            </div>
            <li className="menu-nav__contact">
            <Link href="/contact"  className="menu-nav__link">
              {/* <button className="btn">      */}
                  Contact
              {/* </button> */}
                </Link>
            </li>
          </ul>
          <div className="footer__text">
          <h3 className="footer__header">Tuani LLC. All Rights Reserved.</h3>
            <p className="footer__copyright">Copyright &copy; 2020 Tuani LLC</p>
        </div>
        </nav>
        
      </footer>
    )
}
