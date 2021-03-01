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
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Popover from '@material-ui/core/Popover'

import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

// NOTES ABOUT CARD WIDTH:

// 454px - 600px the card expands and has excessive space

// 818px - 960px card also expands with the excessive space


const useStyles = makeStyles((theme => ({
    root: {
        elevation: 0,
        variant: 'elevated',
    },
    media: {
        height: '100%',
        width: '80%',
        // paddingTop: '56.25%',
        paddingTop: '88.25%',
        margin: '0 auto',
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
})));


{/** RENAME THIS FILE TO LEATHER CARD */}
export default function DeskBowl() {
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
                // avatar={
                //     <Avatar aria-label="wood" className={classes.avatar}>
                //         W
                //     </Avatar>
                // }
                // action={
                //     <IconButton aria-label="settings">
                //         <MoreVertIcon />
                //     </IconButton>
                // }
                title="Desk Bowl"
                subheader=" . "
                />
                <CardMedia
                    className={classes.media}
                    image="/bowl.png"
                    title="Product Name"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Product Name<br/>
                        Available on Amazon
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
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
                            </Popover>                    </IconButton>
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
                        <Typography paragraph>Description of Product</Typography>
                    </CardContent>
                </Collapse>
        </Card>
    )
}