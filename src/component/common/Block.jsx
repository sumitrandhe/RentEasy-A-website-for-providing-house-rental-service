const Block = ({ heading, content }) => {
  return (
    <div className="block">
      <h3 className="block-heading">{heading}</h3>
      <p className="block-content">{content}</p>
    </div>
  );
};

export default Block;
