import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useRootStyles = makeStyles((theme) => ({
  main: {
    minHeight: '100vh',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: '40px !important',
    textAlign: 'center',
  },
  input: {
    marginBottom: '20px !important',
  },
  marginTop: {
    marginTop: '20px !important',
  },
  listContainer: {
    marginTop: '20px !important',
    padding: '0 15px !important',
    textAlign: 'center',
  },
  fieldError: {
    borderColor: '#f44336',
  },
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  fullWidth: '100%',
  card: {
    maxWidth: 345,
    width: '100%',
    margin: 5,
    cursor: 'pointer',
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(5),
    paddingTop: 70,
  },
  activeLink: {
    backgroundColor: '#3f51b5',
    '&:hover': {
      backgroundColor: '#3f51b5',
    },
  },
  toolbarContainer: {
    justifyContent: 'space-between',
  },
}));

export default useRootStyles;
