import { Link } from "react-router-dom";
function InMenu(props) {
  return (
    <>
      <li className="col-span-12 cursor-pointer text-neutral-400 hover:text-white duration-300 my-2">
      <Link to={props.itemProps.link}>{props.itemProps.list}</Link>
      </li>
    </>
  );
}
function BMenu(props) {
  return (
    <>
      <div className="  col-span-11 ml-9 border-b-2 border-t-2 border-neutral-700 text-right text-white">
        <p className="relative top-4 text-sm right-10">{props.itemProps2.list}</p>
      </div>
    </>
  );
}
function Menu() {
  let items = [
    {
      link:"../../routerss/Rout1",
      list:"املاک"},
    {
      link:"../../routerss/Rout2",
      list:"وسایل نقلیه"},
    {
      link:"../../routerss/Rout3",
      list:"کالای دیجیتال"},
    {
      link:"../../routerss/Rout4",
      list:"خانه و آشپزخانه"},
    {
      link:"../../routerss/Rout5",
      list:"خدمات"},
    {
      link:"../../routerss/Rout6",
      list:"وسایل شخصی"},
    {
      link:"../../routerss/Rout7",
      list:"سرگرمی و فراغت"},
    {
      link:"../../routerss/Rout8",
      list:"اجتماعی"},
    {
      link:"../../routerss/Rout9",
      list:"تجهیزات صنعتی"},
    {
      link:"../../routerss/Rout10",
      list:"استخدام و کاریابی"}
  ];
  let items2 = ["قیمت", "محل", "وضعیت آگهی"];
  return (
    <>
      <div className="col-span-3 h-full grid grid-cols-12 ">
        <ul className="grid grid-span-12 col-span-10 my-2 text-right text-md h-2/4 ">
          <li className="col-span-12 text-xs font-black text-white cursor-pointer my-5 ">
            دسته ها
          </li>
          {items.map((item) => (
            <InMenu itemProps={item} />
          ))}
        </ul>
        {items2.map((item2) => (
          <BMenu itemProps2={item2} />
        ))}
      </div>
    </>
  );
}
export default Menu;
