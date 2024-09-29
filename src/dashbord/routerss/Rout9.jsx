import Navbar from "../navbar/Navbar";
import Adverts10 from "../adverts/Adverts10";
import Menu from "../menu/Menu";

const Divar10 = () => {
  return (
    <>
      <div className="h-16 border-b-2 border-neutral-700 grid grid-cols-12 text-xs md:text-base">
        <Navbar />
      </div>
      <div className="h-svh grid grid-cols-12">
        <Adverts10 />
        <Menu />
      </div>
    </>
  );
};
export default Divar10;