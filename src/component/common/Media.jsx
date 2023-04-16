const Media = ({ image, text }) => {
  return (
    <div className="media">
      <div className="media-img">
        <i className={`fa-solid ${image} icon`}></i>
      </div>
      <div className="media-content">{text}</div>
    </div>
  );
};

/* Its css is in global css file */

export default Media;
