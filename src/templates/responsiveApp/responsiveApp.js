import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import Nav from 'components/navigation/nav';
import {
  NavWrapper,
  CustomToolbar,
  StyledLink,
  useStyles,
  AppWrapper,
} from 'templates/responsiveApp/responsiveApp.styles';

function ResponsiveDrawer(props) {
  const { window, children } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <NavWrapper>
      <div className={classes.toolbar} />
      <Divider />
      <Nav />
    </NavWrapper>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <AppWrapper className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <CustomToolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <StyledLink to="/">Mem App</StyledLink>
          </Typography>
        </CustomToolbar>
      </AppBar>
      <div className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </div>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </AppWrapper>
  );
}

export default ResponsiveDrawer;
