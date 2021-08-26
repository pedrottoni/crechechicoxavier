export default function Header(props) {
  return (
    <header>
      <h1 className="title">
        {props.title} {props.span ? <spam className="span">{props.span}</spam> : null}
      </h1>
      <h2 className="subTitle">{props.subtitle}</h2>
      <style jsx>{`
        .title {
          color: #fff;
          text-transform: uppercase;
          margin: 6rem 0 2rem;
          max-width: 65rem;
        }

        .span {
          color: #ffc420;
        }

        .subTitle {
          max-width: 90rem;
        }
      `}</style>
    </header>
  );
}
