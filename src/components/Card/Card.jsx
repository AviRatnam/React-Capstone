import cardclass from "./Card.styles";
import Time from "../Time/Time";
//import imageclass from "../Image/Image.styles";
//import imageclass

const Card = (props)=>{

    const imagestyle = `w-full h-32 sm:h-48 object-cover`;

    return(
        <div class={cardclass}>
            <img class={imagestyle} src="../img/curry.jpg" alt="maths" /> 
            <div class="m-4">
                <span class="font-bold">{props.title}</span>
                <span class="block text=gray-500 text-sm">{props.subtitle}</span>
            </div>
            <Time length={props.length}/>
        </div>
    )
}

export default Card;