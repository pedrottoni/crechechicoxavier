export default function Background(props) {
  return (
    <>
      <div className="bg" />

      <style jsx>{`
        .bg {
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
          width: 100vw;
          height: 100vh;
          background: #eee;
        }
      `}</style>
    </>
  );
}
