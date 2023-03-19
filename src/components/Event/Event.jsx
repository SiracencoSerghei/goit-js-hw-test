

export const Event = ({name, location, speaker, type, start, end}) => { 
    return (
        <div className="event">
            <h2 className="title">name</h2>
            <p className="info"><i className="icon"></i>Location</p>
            <p className="info"><i className="icon"></i>Speaker</p>
            <p className="info"><i className="icon"></i>Start Date</p>
            <p className="info"><i className="icon"></i>Duration</p>
            <span className="chip free|paid|vip">Event type</span>
        </div>
    )
};