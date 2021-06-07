import Buttom from "../items/Buttom";

export default function Menu(props) {
  return (
    <>
      <Buttom link={props.link} text={props.text} image={props.image} />
    </>
  );
}
