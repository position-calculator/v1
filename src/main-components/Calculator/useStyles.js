import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    width: '400px',
    padding: '15px 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headline: {
    marginBottom: '15px',
  },
  input: {
    margin: theme.spacing(2),
    width: '350px'
  },
  button: {
    width: '350px',
    height: '45px',
    margin: theme.spacing(2),
  }
}));

export default useStyles;
