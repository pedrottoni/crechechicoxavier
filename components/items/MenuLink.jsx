import Image from "next/image";
import Link from "next/link";

export default function MenuLink(props) {
  return (
    <>
      <Link href={`${props.link}`}>
        <a className={props.className}>
          {props.image ? (
            <div className="linkIcon">
              <Image src={`/images${props.link}.svg`} layout="fill" />
            </div>
          ) : null}
          <div className="linkText">
            {props.text}
            <br />
            {props.spam ? <span>{props.spam}</span> : null}
          </div>
        </a>
      </Link>
      <style jsx>{`
        a {
          position: relative;
          top: 0;
          display: flex;
          flex-direction: column;
          place-items: center;
          font-size: 2.5rem;
          font-weight: 900;
          color: #fff;
          text-transform: uppercase;
          transition: all .2s cubic-bezier(1.000, -0.7, 0.135, 1.280);
        }

        a span {
          color: #ffc420;
        }

        a .linkIcon {
          position: relative;
          width: 16rem;
          height: 12rem;
          margin-bottom: 2rem;
        }

        a:after {
          content: "";
        }

        a:hover {
          top: -0.8rem;
        }

        a.active {
          top: -0.5rem;
          line-height: 2;
        }
      `}</style>
    </>
  );
}
