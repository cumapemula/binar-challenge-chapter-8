import Navbar from "../Elements/Navbar";
import FormCreate from "../Fragments/FormCreate";

function PlayerLayouts(props) {
  const {children} = props;
  return (
    <>
      <Navbar></Navbar>
      {children}
    </>
  )
}

export default PlayerLayouts;