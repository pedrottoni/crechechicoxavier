import Image from "next/image";
import Link from "next/link";

export default function MenuLink(props) {
  return (
    <>
      <Link href={`/${props.link}`}>
        <a>
          {props.image ? (
            <div className="linkIcon">
              <Image src={`/images/${props.link}.svg`} layout="fill" />
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
          display: flex;
          flex-direction: column;
          place-items: center;
          font-size: 2.5rem;
          font-weight: 900;
          color: #fff;
          text-transform: uppercase;
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
      `}</style>
    </>
  );
}
