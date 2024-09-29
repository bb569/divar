import { Link } from "react-router-dom";

function InNavbar(props) {
  return (
    <>
      <div className="col-span-2 xl:col-span-2 text-neutral-400">
        {props.navi}
      </div>
    </>
  );
}
function Navbar() {
  let navs = ["Fa", "پشتیبانی", "چت", "دیوار من"];
  return (
    <>
      <button className="text-sm bg-red-500 col-span-1 xl:w-9/12 h-10 relative top-3 left-10 rounded-md text-neutral-800 ">
        ثبت آگهی
      </button>
      <div className="grid grid-cols-12 col-span-2 sm:col-span-2 lg:col-span-3 2xl:col-span-4 gap-4 relative left-16 top-5">
        {navs.map((nav) => (
          <InNavbar navi={nav} />
        ))}
      </div>
      <input
        type="text"
        placeholder="جستجو در همه آگهی ها"
        className="relative left-52 top-2 rounded-md col-span-2 xl:col-span-3 bg-neutral-700 h-10 placeholder-neutral-400 text-right"
      />
      <div className="grid grid-cols-12 relative left-56 top-5 col-span-3 lg:col-span-2 md:col-span-3">
        <p className="col-span-5 sm:col-span-4 text-neutral-400">دسته.ها</p>
        <p className="col-span-1 sm:col-span-3 text-neutral-400">تهران</p>
        <Link to="/" className="lg:col-span-3 sm:col-span-4  relative bottom-4">
          <img src="../../../divar.png" alt="" />
        </Link>
      </div>
    </>
  );
}
export default Navbar;
