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
          <p className="col-span-12 text-neutral-400 text-sm relative right-3">
            {props.adv.price}
          </p>
          <p className="col-span-12 text-neutral-400 text-sm relative right-3">
            {props.adv.age}
          </p>
          <p className="col-span-12 text-neutral-400 text-sm relative right-3">
            {props.adv.adres}
          </p>
          </div>
        </div>
      </>
    );
  }
  function Adverts5() {
    let Advs = [
      {
        id: 1,
        img: "../../../img/i1.jpg",
        title: "پیراهن های زارا بزرگسال",
        price: "2,900,000 تومن",
        age: "نو",
        adres: "تهران,اکباتان",
      },
      {
        id: 2,
        img: "../../../img/i2.jpg",
        title: "کالاسکه بچه ال سی",
        price: "3,000,000 تومن",
        age: "کارکرده",
        adres: "تهران,نیاوران",
      },
      {
        id: 3,
        img: "../../../img/i3.jpg",
        title: "جک اس5",
        price: "3,000,000,000 تومن",
        age: "صفر کیلومتر",
        adres: "تهران,تهرانپارس",
      },
      {
        id: 4,
        img: "../../../img/i4.jpg",
        title: "مشاورین املاک سبز",
        price: "بهترین واحد های مسکونی",
        age: "با 20 سال سابقه",
        adres: "",
      },
      {
        id: 5,
        img: "../../../img/i5.jpg",
        title: "آیفون 12",
        price: "30,000,000",
        age: "نو",
        adres: "تهران,گیشا",
      },
      {
        id: 6,
        img: "../../../img/i6.jpg",
        title: "کاپ لوستر قدیمی",
        price: "9,000,000 تومن",
        age: "نو",
        adres: "تهران,قلهک",
      },
      {
        id: 7,
        img: "../../../img/i7.jpg",
        title: "کاناپه دوازده نفره",
        price: "7,000,000 تومن",
        age: "در حد نو",
        adres: "تهران,سعادت آباد",
      },
      {
        id: 8,
        img: "../../../img/i8.jpg",
        title: "تعمیرات ایکس باکس",
        price: "با بهترین قیمت",
        age: "با بهترین کیفیت",
        adres: "تهران,پاسداران",
      },
      {
        id: 9,
        img: "../../../img/i9.jpg",
        title: "فروش قناری نر و ماده",
        price: "7,000,000تومن ",
        age: "1ساله",
        adres: "تهران,تیراژه",
      },
      {
        id: 10,
        img: "../../../img/i10.jpg",
        title: "نصب شاخگوزنی",
        price: "متری 200,000 تومن",
        age: "",
        adres: "تهران,گلشن",
      },
      {
        id: 11,
        img: "../../../img/i11.jpg",
        title: "ست بلوری جاهاز",
        price: "500,000 تومن",
        age: "",
        adres: "تهران,منیریه",
      },
      {
        id: 12,
        img: "../../../img/i12.jpg",
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
  export default Adverts5;
  