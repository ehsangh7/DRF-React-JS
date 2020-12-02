import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import Typography from '@material-ui/core/Typography'
import CssBaseLine from '@material-ui/core/CssBaseLine'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,

    },
}));

const Header = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseLine />
            <AppBar position="static" color="white" elevation={0} className={classes.appBar}>
                <ToolBar>
                    <Typography variant="h6" color="inherit" noWrap >
                        BlogmeUp
                    </Typography>
                </ToolBar>
             </AppBar>
        </React.Fragment>
    )
}

export default Header
