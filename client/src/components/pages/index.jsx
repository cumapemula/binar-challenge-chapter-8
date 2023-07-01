import Navbar from "../Elements/Navbar";

function HomePage() {
  return (
    <>
      <Navbar></Navbar>
      <div className="relative top-60">
        <h2 className="uppercase font-medium tracking-widest text-2xl">
          Welcome To Homepage
        </h2>
        <p className="pt-3 normal-case">Please select a feature in the menu at the top right</p>
      </div>
    </>
  );
}

export default HomePage;