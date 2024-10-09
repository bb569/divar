import React from 'react'

function Building1(props: any) {
  return (<>
    <div className="rounded-sm cursor-pointer hover:p-0 sm:hover:mx-4 p-3 m-24 hover:bg-neutral-700 sm:hover:p-0 hover:border-2 duration-500 my-4 col-span-7 sm:col-span-6 md:col-span-4 lg:col-span-3 grid grid-cols-12 h-96 sm:m-5 border border-neutral-700">
      <div className="col-span-12 h-2/5 sm:h-3/5">
        <img className='h-full w-full rounded-t-sm' src={props.i.img1} alt="" />
        <p className='text-sm leading-1'>{props.i.title}</p>
        <div className="flex justify-start pt-3">
          <div className="flex relative w-1/6 sm:bottom-1 md:bottom-2 lg:bottom-1 items-center justify-center rounded-md text-white text-xs h-6 bg-green-800">
            <p className=" ">{props.i.point}</p>
            <img src="https://img.icons8.com/?size=100&id=tKTHzO8F7kZi&format=png&color=000000" alt="" className="w-3 h-3" />
          </div>
          <p className='text-xs text-neutral-300 mx-1'>{props.i.review}</p>
        </div>
        <p className='text-xs text-neutral-300 my-4 sm:my-1 lg:my-0 xl:my-1'>{props.i.document}</p>
        <div className='text-sm relative bottom-3 lg:bottom-0 xl:bottom-4 lg:text-xs xl:text-sm' dir="ltr">{props.i.adres}</div>
      </div>
    </div>
  </>)
}

function Building2() {
  let ids = [{
    img1: "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/h/l/d/aqua-blue-polycotton-3-2-2-1-fu-aqua-blue-light-grey-lhs-furny-original-imahfdggrhcjez3z.jpeg?q=70",
    title: "خرید اینترنتی جدیدترین مدل های ست مبل راحتی مدرن،چستر،تک نفره،سبک و چوبی ",
    point: 4.4,
    review: "2000 Reviews",
    document: "چوب طبیعی گردو و ساج",
    adres: "تهران‌سیدخندان"
  }, {
    img1: "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/h/l/d/aqua-blue-polycotton-3-2-2-1-fu-aqua-blue-light-grey-lhs-furny-original-imahfdggrhcjez3z.jpeg?q=70",
    title: "خرید اینترنتی جدیدترین مدل های ست مبل راحتی مدرن،چستر،تک نفره،سبک و چوبی ",
    point: 4.4,
    review: "2000 Reviews",
    document: "چوب طبیعی گردو و ساج",
    adres: "تهران‌سیدخندان"
  }, {
    img1: "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/i/o/m/blue-jute-3-2-1-6st-pkt-blue-hn-divine-arts-honey-2-original-imah24ef5mz63aya.jpeg?q=70",
    title: "خرید اینترنتی جدیدترین مدل های ست مبل راحتی مدرن،چستر،تک نفره،سبک و چوبی ",
    point: 4.4,
    review: "2000 Reviews",
    document: "چوب طبیعی گردو و ساج",
    adres: "تهران‌سیدخندان"
  }, {
    img1: "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/k/v/g/68-58-68-58-brown-cotton-blend-3-2-1-177-8-28-71-12-36-21-124-46-original-imah3r3yj5b6yu8n.jpeg?q=70",
    title: "خرید اینترنتی جدیدترین مدل های ست مبل راحتی مدرن،چستر،تک نفره،سبک و چوبی ",
    point: 4.4,
    review: "2000 Reviews",
    document: "چوب طبیعی گردو و ساج",
    adres: "تهران‌سیدخندان"
  }, {
    img1: "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/z/g/t/53-5-107-firozi-polyester-3-2-1-82-35-82-60-20-82-xp-7s7p1cf-153-original-imahfjapgpmcnzuy.jpeg?q=70",
    title: "خرید اینترنتی جدیدترین مدل های ست مبل راحتی مدرن،چستر،تک نفره،سبک و چوبی ",
    point: 4.4,
    review: "2000 Reviews",
    document: "چوب طبیعی گردو و ساج",
    adres: "تهران‌سیدخندان"
  },{
    img1: "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/z/g/t/53-5-107-firozi-polyester-3-2-1-82-35-82-60-20-82-xp-7s7p1cf-153-original-imahfjapgpmcnzuy.jpeg?q=70",
    title: "خرید اینترنتی جدیدترین مدل های ست مبل راحتی مدرن،چستر،تک نفره،سبک و چوبی ",
    point: 4.4,
    review: "2000 Reviews",
    document: "چوب طبیعی گردو و ساج",
    adres: "تهران‌سیدخندان"
  }, {
    img1: "https://rukminim2.flixcart.com/image/612/612/l4pxk7k0/sofa-set/b/w/z/cream-cotton-blend-3-2-1-sf-sss-172-saamenia-furnitures-natural-original-imagfjt8cugzk5af.jpeg?q=70",
    title: "خرید اینترنتی جدیدترین مدل های ست مبل راحتی مدرن،چستر،تک نفره،سبک و چوبی ",
    point: 4.4,
    review: "2000 Reviews",
    document: "چوب طبیعی گردو و ساج",
    adres: "تهران‌سیدخندان"
  }, {
    img1: "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/u/n/c/89-89-woody-brown-polyester-3-2-1-191-38-9-84-50-3-29-8-137-bae-original-imagvz7yystfngsf.jpeg?q=70",
    title: "خرید اینترنتی جدیدترین مدل های ست مبل راحتی مدرن،چستر،تک نفره،سبک و چوبی ",
    point: 4.4,
    review: "2000 Reviews",
    document: "چوب طبیعی گردو و ساج",
    adres: "تهران‌سیدخندان"
  },
  ]
  return (
    <>
      <div className="flex flex-col sm:grid grid-cols-12 m-auto">
        {ids.map((id) => (
          <Building1 i={id} />
        ))}
      </div>
    </>
  )
}

export default Building2