import { makeStyles } from '@material-ui/core/styles';
import Image from '../../images/headerbanner.jpeg';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'scroll',
    padding: 10,
    minHeight: 120,
  },
  title: {
    color: 'white',
    fontSize: 20,
    margin: '10px 0 0',
  },
  subtitle: {
    color: 'white',
    fontSize: 15,
    margin: '5px 0',
  },
}));

export default useStyles;
