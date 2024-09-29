
function InAdverts(props) {
    return (
      <>
      <div className="md:col-span-6 col-span-12 lg:col-span-4  h-30 border border-neutral-700 grid grid-cols-12">
        <div className="col-span-6 h-30 my-3.5 mx-3">
          <img src={props.adv.img} alt="" className="h-full w-full" />
        </div>
        <div className="text-right col-span-6 grid grid-cols-12">
          <p className="col-span-12 text-white font-bold relative right-3 top-2">
            {props.adv.title}
          </p>
          <p className="col-span-12 text-neutral-400 text-sm relative right-3 top-7">
            {props.adv.price}
          </p>
          <p className="col-span-12 text-neutral-400 text-sm relative right-3 top-5">
            {props.adv.age}
          </p>
          <p className="col-span-12 text-neutral-400 text-sm relative right-3 top-2">
            {props.adv.adres}
          </p>
          </div>
        </div>
      </>
    );
  }
  function Adverts2() {
    let Advs = [
      {
        id: 1,
        img: "../../../img/img-2/i1.jpg",
        title: "متر 75 دوخواب سید خندان",
        price: "ودیعه:850,000,000 تومن",
        age: "رهن کامل",
        adres: "تهران,سید خندان",
      },
      {
        id: 2,
        img: "../../../img/img-2/i2.jpg",
        title: "110متر",
        price: "12,000,000 تومن",
        age: "املاک ایرانیان",
        adres: "تهران,پونک",
      },
      {
        id: 3,
        img: "../../../img/img-2/i3.jpg",
        title: " اجاره مغازه بر اصلی شریعتی",
        price: "1,000,000,000 تومن",
        age: "45 متراژ",
        adres: "تهران,قلهک",
      },
      {
        id: 4,
        img: "../../../img/img-2/i4.jpg",
        title: "چهار خواب فول مشاعات",
        price: "متراژ 295",
        age: "85,000,000,000 تومن",
        adres: "تهران,سعادت آباد",
      },
      {
        id: 5,
        img: "../../../img/img-2/i5.jpg",
        title: "آپارتمان سه خواب",
        price: "ودیعه:400,000,000",
        age: "اجاره:23,000,000",
        adres: "تهران,شمس آباد",
      },
      {
        id: 6,
        img: "../../../img/img-2/i6.jpg",
        title: "دوخواب",
        price: "5,100,000,000 تومن",
        adres: "تهران,مینابی",
      },
      {
        id: 7,
        img: "../../../img/img-2/i7.jpg",
        title: "آپارتمان اداری",
        price: "ودیعه: 200,000,000 تومن",
        age: "اجاره: 25,000,000 تومن",
        adres: "تهران,نواب",
      },
      {
        id: 8,
        img: "../../../img/img-2/i8.jpg",
        title: "فرشته تاپ لوکیشین",
        price: "ودیه",
        age: "با بهترین کیفیت",
        adres: "تهران,پاسداران",
      },
      {
        id: 9,
        img: "../../../img/img-2/i1.jpg",
        title: "فروش قناری نر و ماده",
        price: "7,000,000تومن ",
        age: "1ساله",
        adres: "تهران,تیراژه",
      },
      {
        id: 10,
        img: "../../../img/img-2/i1.jpg",
        title: "نصب شاخگوزنی",
        price: "متری 200,000 تومن",
        age: "",
        adres: "تهران,گلشن",
      },
      {
        id: 11,
        img: "../../../img/img-2/i1.jpg",
        title: "ست بلوری جاهاز",
        price: "500,000 تومن",
        age: "",
        adres: "تهران,منیریه",
      },
      {
        id: 12,
        img: "../../../img/img-2/i1.jpg",
        title: "تیگو 7",
        price: "2,000,000,000 تومن",
        age: "کارکرده",
        adres: "تهران,شهر ری",
      },
    ];
    return (
      <>
        <div className="relative top-16 col-span-9 gap-5 grid grid-cols-12 h-full ml-14">
          {Advs.map((Adv) => (
            <InAdverts adv={Adv} />
          ))}
        </div>
      </>
    );
  }
  export default Adverts2;
  