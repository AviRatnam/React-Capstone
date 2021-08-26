import cardclass from "./Card.styles";
import Time from "../Time/Time";

const Card = (props) => {
  const imagestyle = `w-full h-32 sm:h-48 object-cover`;
  const noodles = ".\public\img\noodles.jpg";
  return (
    <div class={cardclass}>
      <a href={props.target}>
      <img class={imagestyle} src=".\public\img\curry.jpg" alt="" /> 
        <div class="m-4">
          <span class="font-bold">{props.title}</span>
          <span class="block text=gray-500 text-sm">{props.subtitle}</span>
        </div>
        <Time length={props.length} />
        <span>{props.children}</span>
      </a>
    </div>
  );
};

export default Card;
