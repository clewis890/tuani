import React from 'react'
import Link from 'next/link'
import { Button } from '@material-ui/core'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {

  },
  copyright: {
    fontFamily: 'Cormorant',
    fontSize: '1.2rem',
  },
}));

export default function Footer() {
  const classes = useStyles();

    return (
      <footer className={classes.root}>
        <nav className="">
          <ul className="">
            <li className="">
              <Link href="/" className="">
                Home
              </Link>
            </li>
            <div className="">
            <h3 className="">Products</h3>
            <li className="">
              <Link href="/leather"  className="">
                Leather Products
              </Link>
            </li>
            <li className="">
              <Link href="/wood"  className="">
                Wood Products
              </Link>
            </li>
            </div>
            <li className="">
            <Link href="/contact"  className="">
              {/* <button className="btn">      */}
                  Contact
              {/* </button> */}
                </Link>
            </li>
          </ul>
          <div className="">
          <h3 className={classes.footer}>Tuani LLC. All Rights Reserved.</h3>
            <p className={classes.copyright}>Copyright &copy; 2020 Tuani LLC</p>
        </div>
        </nav>
        
      </footer>
    )
}
