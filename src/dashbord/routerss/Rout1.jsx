import Navbar from "../navbar/Navbar";
import Adverts2 from "../adverts/Adverts2";
import Menu from "../menu/Menu";

const Divar2 = () => {
  return (
    <>
      <div className="h-16 border-b-2 border-neutral-700 grid grid-cols-12 text-xs md:text-base">
        <Navbar />
      </div>
      <div className="h-svh grid grid-cols-12">
        <Adverts2 />
        <Menu />
      </div>
    </>
  );
};
export default Divar2;