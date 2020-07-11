import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  useTheme,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import {
  Home,
  PostAdd,
  Menu,
  ExitToApp,
  LibraryBooks,
} from '@material-ui/icons';

import { paths } from '../../routes';
import { useRootStyles } from '../../styles';
import { logout, selectUser } from '../../ducks/author';

const MainLayout = ({ children, title }) => {
  const classes = useRootStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(selectUser);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const logoutHandler = async () => {
    await dispatch(logout());
    history.push(paths.login);
  };

  const rendInfo = (variant = 'h6', align) => (
    <>
      <Typography variant={variant} noWrap align={align}>
        {title}
      </Typography>
      <Typography variant={variant} noWrap align={align}>
        Email: {user.email}
      </Typography>
      <Typography variant={variant} noWrap align={align}>
        Username: {user.username}
      </Typography>
    </>
  );

  const rendDrawer = (hidden) => (
    <div>
      <div className={classes.toolbar}>
        <Typography align="center" variant="h6" noWrap>
          HrantBlog <LibraryBooks />
        </Typography>
      </div>
      <Divider />
      <List>
        <ListItem
          component={NavLink}
          activeClassName={classes.activeLink}
          exact
          to={paths.home}
          button
        >
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          component={NavLink}
          activeClassName={classes.activeLink}
          exact
          to={paths.addPost}
          button
        >
          <ListItemIcon>
            <PostAdd />
          </ListItemIcon>
          <ListItemText primary="Add post" />
        </ListItem>
        <ListItem button onClick={logoutHandler}>
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
      {hidden && (
        <>
          <Divider />
          {rendInfo('body1', 'center')}
          <Divider />
        </>
      )}
    </div>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbarContainer}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
          <Hidden xsDown>{rendInfo()}</Hidden>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
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
              keepMounted: true,
            }}
          >
            {rendDrawer(true)}
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
            {rendDrawer()}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>{children}</main>
    </div>
  );
};

MainLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default MainLayout;
