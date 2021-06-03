import Image from "next/image";

export default function Background(props) {
  return (
    <>
      <div className="bg">
        <div className="sky">
          <Image
            className="sky"
            src="/images/sky.svg"
            alt="Picture of the author"
            layout="fill"
            objectFit="fill"
          />
        </div>
        <div className="hills">
          <Image
            src="/images/hills.svg"
            alt="Picture of the author"
            layout="fill"
            objectFit="fill"
          />
        </div>
      </div>

      <style jsx>{`
        .bg {
          position: fixed;
          top: 0;
          left: 0;
          z-index: -1;
          width: 100vw;
          height: 100vh;
          background: #1ab2e5;
        }

        .bg .sky {
          position: fixed;
          top: 0;
          width: 100vw;
          height: 18vw;
        }

        .bg .hills {
          position: fixed;
          bottom: 0;
          width: 100vw;
          height: 15vw;
          transform: scale(1.01);
          filter: brightness(1) hue-rotate(0deg);
          transition: 0.5s;
        }
      `}</style>
    </>
  );
}
