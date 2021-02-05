import Link from 'next/link'
import { Button } from '@material-ui/core'

export default function Header() {
    return (
        <header className="header">
        {/* <h1 className="title">Tuani</h1> */}
            {/* <div className="menu-btn">
                <span className="menu-btn__burger"></span>
            </div> */}
            <nav className="nav">
                <ul className="menu-nav">
                    <li className="menu-nav__item">
                        <Link href="/" className="menu-nav__link">
                            Home
                        </Link>
                    </li>
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
                    <li className="menu-nav__item">
                        {/* <Button> */}
                        <a href="/contact"  className="menu-nav__link">
                            Contact
                        </a>
                        {/* </Button> */}
                    </li>
                </ul>
            </nav>
            <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="main__svg"
                  >
                     {/** Polygon below modifies the line transition
                      * between the Tuani image and the rest of the card
                      */}

                    <polygon
                      points= "-40,85 583,65 583,65"
                      className="leather_poly"
                    ></polygon>
                  </svg>
        </header>
    )
}