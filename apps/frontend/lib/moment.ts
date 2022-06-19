import Moment from 'react-moment'
import 'moment-timezone';
import 'moment/locale/pl';

Moment.globalLocale = 'pl';
Moment.globalTimezone = 'Poland';
Moment.globalLocal = true;

export default Moment