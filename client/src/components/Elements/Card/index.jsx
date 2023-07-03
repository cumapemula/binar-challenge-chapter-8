function Card(props) {
  const { children } = props;
  return (
    <div className="card h-80 w-2/5 mx-auto card-side bg-base-100 shadow-xl">
      {children}
    </div>
  );
}

function Image(props) {
  const { src, alt } = props;
  return (
    <figure>
      <img src={src} alt={alt} className="rounded-xl h-full" />
    </figure>
  );
}

function Body(props) {
  const { children } = props;
  return <div className="card-body text-start">{children}</div>;
}

Card.Image = Image;
Card.Body = Body;

export default Card;
