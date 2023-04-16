import Block from "../common/Block";
import NumberWithBorder from "../common/NumberWithBorder";

const BuildingBlock = ({
  className,
  aos,
  reverseOrder,
  number,
  img,
  ...rest
}) => {
  console.log(reverseOrder);
  return (
    <div className={`grid ${className}`} data-aos={aos ?? ""}>
      <div className="text-block">
        <NumberWithBorder number={number} />
        <Block {...rest} />
      </div>
      <div className={reverseOrder ? "reverse-order" : " " + "grid-img-block "}>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default BuildingBlock;
