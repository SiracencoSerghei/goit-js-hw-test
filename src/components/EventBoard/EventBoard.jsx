import css from './EventBoard.module.css';
import { Event } from 'components/Event/Event';

export const EventBoard = ({ events }) => { 
    console.log(events);
    return <div className={css.eventBoard}>
        {events.map(event => <div key={event.name}>{ event.name}</div> )}</div>
};