import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover'

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import Hover from '../popover';

const useStyles = makeStyles((theme => ({
    root: {
        maxWidth: 320,
        elevation: 0,
        variant: 'elevated',
        backgroundColor: '#D6E0EB',
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
        color: '#D6E0EB',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: '#193A25',
    },
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing(1),
    },
    amazon: {
        color: '#D6E0EB',
        padding: '0 0',
    },
})));


{/** RENAME THIS FILE TO LEATHER CARD */}
export default function ProductCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);


    const handleExpandClick = () => {
        // Default for the expanded card is Closed
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                title="Handmade Leather item"
                subheader="$0.00"
                />
                <CardMedia
                    className={classes.media}
                    image=""
                    title="Product Name"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Product Name<br/>
                        Available on Amazon
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton 
                        aia-owns={open ? 'mouse-over-popover' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpen}
                        onMouseLeave={handlePopoverClose}
                        aria-label="add to favorites"
                    >
                        {/* <Hover /> */}
                        <ShoppingBasketIcon> 
                            <a
                        className={classes.amazon}
                        href="https://amazon.com"
                        target="_blank"
                        rel="noopener" 
                        focusVisible />
                        </ShoppingBasketIcon>
                          <Popover
                            id="mouse-over-popover"
                            className={classes.popover}
                            classes={{
                                paper: classes.paper,
                            }}
                            open={open}
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            onClose={handlePopoverClose}
                            disableRestoreFocus
                            >
                                <Typography>Buy Now on Amazon!</Typography>
                            </Popover>
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>More about this product</Typography>
                        <Typography paragraph>
                            Description of Product
                        </Typography>
                    </CardContent>
                </Collapse>
        </Card>
    )
}