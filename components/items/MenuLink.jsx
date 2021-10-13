import Image from "next/image";
import Link from "next/link";

export default function MenuLink(props) {
  return (
    <>
      <Link href={`${props.link}`}>
        <a className={props.className}>
          {props.image ? (
            <div className="linkIcon">
              <Image src={`/images${props.link}.svg`} layout="fill" alt="" />
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
          font-family: "Lilita One", cursive;
          font-size: 3.5rem;
          color: #fff;
          text-transform: uppercase;
          transition: all 0.3s cubic-bezier(0.3, -0.5, 0.3, 2.5);
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

        a:hover {
          top: -0.6rem;
        }

        a.active {
          top: -0.5rem;
          line-height: 2;
        }
      `}</style>
    </>
  );
}
