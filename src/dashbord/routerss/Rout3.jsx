import Navbar from "../navbar/Navbar";
import Adverts4 from "../adverts/Adverts4";
import Menu from "../menu/Menu";

const Divar4 = () => {
  return (
    <>
      <div className="h-16 border-b-2 border-neutral-700 grid grid-cols-12 text-xs md:text-base">
        <Navbar />
      </div>
      <div className="h-svh grid grid-cols-12">
        < Adverts4 />
        <Menu />
      </div>
    </>
  );
};
export default Divar4;