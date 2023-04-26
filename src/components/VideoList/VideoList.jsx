import css from './VideoList.css';

export const VideoList = ({ videos, onSelect }) => {
    return (
      <ul className='videoList'>
        {videos.map(video => (
          <li className="videoItem" key={video.id} onClick={() => onSelect(video.link)}>
            {video.link}
          </li>
        ))}
      </ul>
    );
  };