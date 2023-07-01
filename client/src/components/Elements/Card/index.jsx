function Card({children}) {
  return (
    <div className="card h-80 w-2/5 mx-auto card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src="/images/avatar.jpg"
          alt="Avatar"
          className="rounded-xl h-full"
        />
      </figure>
      <div className="card-body text-start">
        {children}
      </div>
    </div>
  );
}

export default Card;