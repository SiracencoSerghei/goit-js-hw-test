import PropTypes from 'prop-types';
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
// import { formatEventStart } from 'components/utils/formatEventStart';
// import { formatEventDuration } from 'components/utils/formatEventDuration';

import { formatEventDuration, formatEventStart } from '../utils';
import { iconSize } from 'constants';
import css from './Event.module.css';

// export const Event = ({name, location, speaker, type, start, end}) => {
//     return (
//         <div className={css.event}>
//             <h2 className={css.title}>{name}</h2>
//             <p className={css.info}><i className="icon"></i>location}</p>
//             <p className={css.info}><i className="icon"></i>{speaker}</p>
//             <p className={css.info}><i className="icon"></i>{start}</p>
//             <p className={css.info}><i className="icon"></i>Duration</p>
//             {/* <span className="chip free|paid|vip">Event type</span> */}
//         </div>
//     )
// };

// export const Event = ({name, location, speaker, type, start, end}) => {
//     return (
//         <div className={css.event}>
//             <h2 className={css.title}>{name}</h2>
//             <p className={css.info}><FaMapMarkerAlt className={css.icon} />location}</p>
//             <p className={css.info}><FaUserAlt className={css.icon} />{speaker}</p>
//             <p className={css.info}><FaCalendarAlt className={css.icon} />{start}</p>
//             <p className={css.info}><FaClock className={css.icon} />Duration</p>
//             {/* <span className="chip free|paid|vip">Event type</span> */}
//         </div>
//     )
// };

export const Event = ({ name, location, speaker, type, start, end }) => {
  const formattedStartDate = formatEventStart(start);
  const duration = formatEventDuration(start, end);


  console.log(css);
  console.log(type);
  console.log(css[type]);



  return (
    <div className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.info}>
        <FaMapMarkerAlt className={css.icon} size={iconSize.sm}/>
        {location}
      </p>
      <p className={css.info}>
        <FaUserAlt className={css.icon} size={iconSize.sm}/>
        {speaker}
      </p>
      <p className={css.info}>
        <FaCalendarAlt className={css.icon} size={iconSize.sm}/>
        {formattedStartDate}
      </p>
      <p className={css.info}>
        <FaClock className={css.icon} size={iconSize.sm}/>
        {duration}
      </p>
          <span className={`${css.chip} ${css[type]}`}>{type}</span>
    </div>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
