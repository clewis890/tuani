import React from "react";
import { useScrollTrigger } from "@material-ui/core";

export default function NavBarTransition(props) {
  const {
    threshold,
    bgColorBefore,
    bgColorAfter,
    borderBefore,
    borderAfter,
    textColorBefore,
    textColorAfter,
    fadeIn,
    fadeOut,
    paddingBefore,
    paddingAfter,
    children,
    transparentBefore,
    transparentAfter,
    ...other
  } = {
    threshold: 0,
    bgColorBefore: "#40291",
    bgColorAfter: "#010103",
    textColorBefore: "#D6E0EB",
    textColorAfter: "white",
    fadeIn: "0.2s ease-in",
    fadeOut: "0.2s ease-out",
    paddingBefore: "1.363rem",
    paddingAfter: "3.5px",
    transparentBefore: '100%',
    transparentAfter: '95%',
    borderBefore: '0',
    borderAfter: '0 0 5px 5px',
    // [breakpoints.down('xs')]: {
    //   paddingBefore: '1.3rem',
    //   paddingAfter: '12px',
    // },
    ...props
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: threshold,
    target: props.window ? window() : undefined
  });

  return React.cloneElement(children, {
    style: {
      boxShadow: trigger ? "5px 10px 18px #193A25" 
      :  "3px 9px 12px transparent",
      borderRadius: trigger ? borderAfter : borderBefore,
      paddingTop: trigger ? paddingAfter : paddingBefore,
      paddingBottom: trigger ? paddingAfter : paddingBefore,
      backgroundColor: trigger ? bgColorAfter : bgColorBefore,
      color: trigger ? textColorAfter : textColorBefore,
      transition: trigger ? fadeIn : fadeOut,
      opacity: trigger ? transparentAfter : transparentBefore,
    },
    ...other
  });
}
