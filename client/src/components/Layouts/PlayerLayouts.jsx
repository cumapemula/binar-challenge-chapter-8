import Navbar from "../Elements/Navbar";

function PlayerLayouts(props) {
  const { children } = props;
  return (
    <>
      <Navbar></Navbar>
      {children}
    </>
  );
}

export default PlayerLayouts;
