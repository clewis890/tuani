import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography'
import Image from 'next/image'
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    content: {
      padding: '0',
    },
    image: {
      backdropFilter: 'blur(4px)',
    },
    text: {
      zIndex: '999',
      // marginTop: '-8.5em',
      // marginLeft: '10em',
      top: '50%',
      left: '50%',
      color: 'white',
      fontFamily: 'Cantata One, serif',
      fontSize: '1.1em',
    },
}));

export default function Parallax() {
  const classes = useStyles();

  return (
    <>
    <Card 
    style={{  
   position: 'relative',
    width: '100%',
    height: '100vh',
    margin: '0 auto',
    padding: '0',
    borderRadius: '0',
    // filter: 'blur(1.87px)',
    boxShadow: 'none'}}
    className="page-header header-filter clear-filter"
    data-parallax="true"
    // className={classes.root} 
    overflow="hidden">
      {/* <CardContent
        overflow="hidden"
        className={classes.content}
      > */}
        <CardMedia
        component="img"
        alt="Parrot"
        height="100%"
        image="/montenegro-unsplash.jpg"
        className={classes.image}
        style={{ filter: 'blur(1.87px)' }}
        />
        <h2
        className={classes.text}
        >
        </h2>
    </Card>
    </>
  )
}










// import React from "react";
// // nodejs library that concatenates classes
// import classNames from "classnames";
// // nodejs library to set properties for components
// import PropTypes from "prop-types";
// // @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";

// // core components
// import styles from "assets/jss/nextjs-material-kit/components/parallaxStyle.js";

// const useStyles = makeStyles(styles);

// export default function Parallax(props) {
//   let windowScrollTop;
//   // if (window.innerWidth >= 768) {
//   //   windowScrollTop = window.pageYOffset / 3;
//   // } else {
//   //   windowScrollTop = 0;
//   // }
//   const [transform, setTransform] = React.useState("translate3d(0,0px,0)");
//   React.useEffect(() => {
//     if (window.innerWidth >= 768) {
//       window.addEventListener("scroll", resetTransform);
//     }
//     return function cleanup() {
//       if (window.innerWidth >= 768) {
//         window.removeEventListener("scroll", resetTransform);
//       }
//     };
//   });
//   const resetTransform = () => {
//     var windowScrollTop = window.pageYOffset / 3;
//     setTransform("translate3d(0," + windowScrollTop + "px,0)");
//   };
//   const {
//     filter,
//     className,
//     children,
//     style,
//     image,
//     small,
//     responsive
//   } = props;
//   const classes = useStyles();
//   const parallaxClasses = classNames({
//     [classes.parallax]: true,
//     [classes.filter]: filter,
//     [classes.small]: small,
//     [classes.parallaxResponsive]: responsive,
//     [className]: className !== undefined
//   });
//   return (
//     <div
//       className={parallaxClasses}
//       style={{
//         ...style,
//         backgroundImage: "url(" + image + ")",
//         transform: transform
//       }}
//     >
//       {children}
//     </div>
//   );
// }

// Parallax.propTypes = {
//   className: PropTypes.string,
//   filter: PropTypes.bool,
//   children: PropTypes.node,
//   style: PropTypes.string,
//   image: PropTypes.string,
//   small: PropTypes.bool,
//   // this will add a min-height of 660px on small screens
//   responsive: PropTypes.bool
// };
