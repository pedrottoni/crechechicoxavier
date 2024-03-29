export default function Title(props) {
  return (
    <>
      <h1 className="title">
        {props.title}
        <br />
        {props.span ? <span className="span">{props.span}</span> : null}
      </h1>
      {props.subtitle ? <h2 className="subTitle">{props.subtitle}</h2> : null}
      {props.children}
      <style jsx>{`
        .title {
          color: #fff;
          text-transform: uppercase;
          margin: 4rem 0 2rem;
        }

        .span {
          color: hsl(44deg 100% 56%);
        }

        .subTitle {
          max-width: 90rem;
          color: #fff;
        }
      `}</style>
    </>
  );
}
