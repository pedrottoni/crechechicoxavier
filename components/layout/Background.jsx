export default function Background(props) {
  return (
    <>
      <div className="bg">{props.children}</div>

      <style jsx>{`
        .bg {
          width: 100vw;
          height: 100vh;
          background: #eee;
        }
      `}</style>
    </>
  );
}
