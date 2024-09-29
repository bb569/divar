import Navbar from "../navbar/Navbar";
import Adverts5 from "../adverts/Adverts5";
import Menu from "../menu/Menu";

const Divar5 = () => {
  return (
    <>
      <div className="h-16 border-b-2 border-neutral-700 grid grid-cols-12 text-xs md:text-base">
        <Navbar />
      </div>
      <div className="h-svh grid grid-cols-12">
        < Adverts5 />
        <Menu />
      </div>
    </>
  );
};
export default Divar5;