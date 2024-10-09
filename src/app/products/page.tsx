import React from 'react'

function MeinMap(props: any) {
    return (<>
        <div className="hover:bg-neutral-700  duration-500 hover:p-4 xl:col-span-12 lg:col-span-6 col-span-12 cursor-pointer grid grid-cols-12 ml-2 xl:border-t p-3 h-60 border-r xl:border-r-0 border-neutral-700">
            
                <div className=
                    "h-fit xl:h-full col-span-6 lg:col-span-6 md:col-span-4 xl:col-span-2 relative right-5 bottom-4 p-5">
                    <img src={props.mins.img} alt="" className="rounded-sm w-full h-full relative xl:left-40 bottom-7 p-3 sm:p-12 md:p-7 lg:p-4 xl:p-0 xl:bottom-0 lg:bottom-5 md:bottom-9 sm:bottom-14" />
                </div><div className="col-span-6 h-full grid grid-cols-12 relative xl:left-36">
                <p className="leading-5 duration-200 hover:text-blue-700 text-base xl:text-lg col-span-12 xl:col-span-9 ml-14">{props.mins.text}</p>
                <div className="grid grid-cols-12 col-span-6 xl:col-span-4 ml-14 mb-16 ">
                    <div
                        className="flex relative sm:bottom-10 md:bottom-2 lg:bottom-1 items-center justify-center col-span-5 sm:col-span-5 md:col-span-3 lg:col-span-9 xl:col-span-3 rounded-md text-white text-xs h-6 bg-green-800">
                        <p className="">{props.mins.star}</p>
                        <img src={props.mins.img2} alt="" className="w-3 h-3" />
                    </div>
                    <p className="lg:col-span-3 xl:col-span-7 relative sm:bottom-9 md:bottom-1 lg:bottom-0 col-span-5 mb-5 ml-2 text-neutral-400 text-xs xl:text-sm font-semibold">
                        {props.mins.text2}</p>

                    <ul className="col-span-12 hidden xl:block">
                        <li className="text-sm text-neutral-500">{props.mins.li1}</li>
                        <li className="text-sm text-neutral-500">{props.mins.li2}</li>
                        <li className="text-sm text-neutral-500">{props.mins.li3}</li>
                        <li className="text-sm text-neutral-500">{props.mins.li4}</li>
                    </ul>
                    <div className="grid col-span-5 relative bottom-4 sm:bottom-16 md:bottom-10 lg:bottom-3 xl:hidden grid-cols-12">
                        <p className="text-lg col-span-12 font-medium relative md:top-3">{props.mins.p1}</p>
                        <del className="text-xs col-span-7 font-semibold relative md:top-1">{props.mins.p2}</del>
                        <p className="text-xs col-span-4 font-bold text-green-600 relative md:top-1 left-20">{props.mins.p3}</p>
                        <p className="text-sm col-span-12 font-bold relative">{props.mins.p4}</p>
                        <input type="checkbox" className="w-4 relative bottom-2 lg:bottom-0" />
                        <p className="inline-block text-xs relative left-5 bottom-1 lg:bottom-0 col-span-4">{props.mins.p5}</p>
                    </div>
                </div>
                <div className="hidden col-span-6 xl:grid grid-cols-12 relative bottom-14 xl:left-full">
                    <p className="text-xl col-span-7 font-semibold ">{props.mins.p1}</p>
                    <del className="text-xs col-span-7 font-semibold">{props.mins.p2}</del>
                    <p className="text-xs col-span-4 font-bold text-green-600 relative lg:right-32 xl:right-20 right-40">{props.mins.p3}</p>
                    <p className="text-sm col-span-7 font-bold relative bottom-24">{props.mins.p4}</p>
                    <input type="checkbox" className="relative bottom-12 right-56 w-4" />
                    <p className="inline-block text-xs relative bottom-6 right-56 col-span-4">{props.mins.p5}</p>
                </div>
            </div>
        </div>
    </>)
}
function ShoppingBasket() {
    let Main = [
        {
            star: 4.4,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFcgwqHjHqjrCVDnK-yvR8UUoGeeE5WfAa7A&s",
            img2: "https://img.icons8.com/?size=100&id=tKTHzO8F7kZi&format=png&color=000000",
            text: "ست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعیست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعی",
            text2: "2000.Reviews",
            li1: ". بدنه چوبی",
            li2: ". رنگ قهوه ایی",
            li3: ". قابل شست و شو",
            li4: ". 7 نفره",
            p1: "2,000,000.‌‌توما‌ن",
            p2: "3,300,000.تومان",
            p3: "60%off",
            p4: "تحویل‌رایگان",
            p5: "برای‌مقایسه‌اضافه‌کنید"
        },{
        star: 4.4,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFcgwqHjHqjrCVDnK-yvR8UUoGeeE5WfAa7A&s",
        img2: "https://img.icons8.com/?size=100&id=tKTHzO8F7kZi&format=png&color=000000",
        text: "ست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعیست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعی",
        text2: "2000.Reviews",
        li1: ". بدنه چوبی",
        li2: ". رنگ قهوه ایی",
        li3: ". قابل شست و شو",
        li4: ". 7 نفره",
        p1: "2,000,000.‌‌توما‌ن",
        p2: "3,300,000.تومان",
        p3: "60%off",
        p4: "تحویل‌رایگان",
        p5: "برای‌مقایسه‌اضافه‌کنید"
    },{
        star: 4.4,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFcgwqHjHqjrCVDnK-yvR8UUoGeeE5WfAa7A&s",
        img2: "https://img.icons8.com/?size=100&id=tKTHzO8F7kZi&format=png&color=000000",
        text: "ست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعیست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعی",
        text2: "2000.Reviews",
        li1: ". بدنه چوبی",
        li2: ". رنگ قهوه ایی",
        li3: ". قابل شست و شو",
        li4: ". 7 نفره",
        p1: "2,000,000.‌‌توما‌ن",
        p2: "3,300,000.تومان",
        p3: "60%off",
        p4: "تحویل‌رایگان",
        p5: "برای‌مقایسه‌اضافه‌کنید"
    },{
        star: 4.4,
        img: "https://i.redd.it/g4crddfnmt9a1.jpg",
        img2: "https://img.icons8.com/?size=100&id=tKTHzO8F7kZi&format=png&color=000000",
        text: "ست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعیست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعی",
        text2: "2000.Reviews",
        li1: ". بدنه چوبی",
        li2: ". رنگ قهوه ایی",
        li3: ". قابل شست و شو",
        li4: ". 7 نفره",
        p1: "2,000,000.‌‌توما‌ن",
        p2: "3,300,000.تومان",
        p3: "60%off",
        p4: "تحویل‌رایگان",
        p5: "برای‌مقایسه‌اضافه‌کنید"
    },{
        star: 4.4,
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/i/5/p/68-58-68-58-blue-cotton-3-2-1-177-8-28-71-12-36-21-124-46-original-imagz8ykenzwftju.jpeg?q=70",
        img2: "https://img.icons8.com/?size=100&id=tKTHzO8F7kZi&format=png&color=000000",
        text: "ست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعیست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعی",
        text2: "2000.Reviews",
        li1: ". بدنه چوبی",
        li2: ". رنگ قهوه ایی",
        li3: ". قابل شست و شو",
        li4: ". 7 نفره",
        p1: "2,000,000.‌‌توما‌ن",
        p2: "3,300,000.تومان",
        p3: "60%off",
        p4: "تحویل‌رایگان",
        p5: "برای‌مقایسه‌اضافه‌کنید"
    },{
        star: 4.4,
        img: "https://rukminim2.flixcart.com/image/612/612/l4pxk7k0/sofa-set/b/w/z/cream-cotton-blend-3-2-1-sf-sss-172-saamenia-furnitures-natural-original-imagfjt8cugzk5af.jpeg?q=70",
        img2: "https://img.icons8.com/?size=100&id=tKTHzO8F7kZi&format=png&color=000000",
        text: "ست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعیست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعی",
        text2: "2000.Reviews",
        li1: ". بدنه چوبی",
        li2: ". رنگ قهوه ایی",
        li3: ". قابل شست و شو",
        li4: ". 7 نفره",
        p1: "2,000,000.‌‌توما‌ن",
        p2: "3,300,000.تومان",
        p3: "60%off",
        p4: "تحویل‌رایگان",
        p5: "برای‌مقایسه‌اضافه‌کنید"
    },{
        star: 4.4,
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/m/t/k/68-58-68-58-red-cotton-3-2-1-177-8-28-71-12-36-21-124-46-kdwe10-original-imah4f4pzf3w39hx.jpeg?q=70",
        img2: "https://img.icons8.com/?size=100&id=tKTHzO8F7kZi&format=png&color=000000",
        text: "ست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعیست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعی",
        text2: "2000.Reviews",
        li1: ". بدنه چوبی",
        li2: ". رنگ قهوه ایی",
        li3: ". قابل شست و شو",
        li4: ". 7 نفره",
        p1: "2,000,000.‌‌توما‌ن",
        p2: "3,300,000.تومان",
        p3: "60%off",
        p4: "تحویل‌رایگان",
        p5: "برای‌مقایسه‌اضافه‌کنید"
    },{
        star: 4.4,
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/v/x/x/74-183-rich-natural-finish-na-3-2-1-183-74-183-10-183-74-6-seter-original-imah54gszk2wggse.jpeg?q=70",
        img2: "https://img.icons8.com/?size=100&id=tKTHzO8F7kZi&format=png&color=000000",
        text: "ست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعیست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعی",
        text2: "2000.Reviews",
        li1: ". بدنه چوبی",
        li2: ". رنگ قهوه ایی",
        li3: ". قابل شست و شو",
        li4: ". 7 نفره",
        p1: "2,000,000.‌‌توما‌ن",
        p2: "3,300,000.تومان",
        p3: "60%off",
        p4: "تحویل‌رایگان",
        p5: "برای‌مقایسه‌اضافه‌کنید"
    },{
        star: 4.4,
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/y/a/g/grey-polyester-3-2-1-va-sofaset-03-veenuarts-walnut-finish-original-imah34y2w7by87gw.jpeg?q=70",
        img2: "https://img.icons8.com/?size=100&id=tKTHzO8F7kZi&format=png&color=000000",
        text: "ست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعیست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعی",
        text2: "2000.Reviews",
        li1: ". بدنه چوبی",
        li2: ". رنگ قهوه ایی",
        li3: ". قابل شست و شو",
        li4: ". 7 نفره",
        p1: "2,000,000.‌‌توما‌ن",
        p2: "3,300,000.تومان",
        p3: "60%off",
        p4: "تحویل‌رایگان",
        p5: "برای‌مقایسه‌اضافه‌کنید"
    },{
        star: 4.4,
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/h/l/d/aqua-blue-polycotton-3-2-2-1-fu-aqua-blue-light-grey-lhs-furny-original-imahfdggrhcjez3z.jpeg?q=70",
        img2: "https://img.icons8.com/?size=100&id=tKTHzO8F7kZi&format=png&color=000000",
        text: "ست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعیست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعی",
        text2: "2000.Reviews",
        li1: ". بدنه چوبی",
        li2: ". رنگ قهوه ایی",
        li3: ". قابل شست و شو",
        li4: ". 7 نفره",
        p1: "2,000,000.‌‌توما‌ن",
        p2: "3,300,000.تومان",
        p3: "60%off",
        p4: "تحویل‌رایگان",
        p5: "برای‌مقایسه‌اضافه‌کنید"
    },{
        star: 4.4,
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/i/o/m/blue-jute-3-2-1-6st-pkt-blue-hn-divine-arts-honey-2-original-imah24ef5mz63aya.jpeg?q=70",
        img2: "https://img.icons8.com/?size=100&id=tKTHzO8F7kZi&format=png&color=000000",
        text: "ست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعیست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعی",
        text2: "2000.Reviews",
        li1: ". بدنه چوبی",
        li2: ". رنگ قهوه ایی",
        li3: ". قابل شست و شو",
        li4: ". 7 نفره",
        p1: "2,000,000.‌‌توما‌ن",
        p2: "3,300,000.تومان",
        p3: "60%off",
        p4: "تحویل‌رایگان",
        p5: "برای‌مقایسه‌اضافه‌کنید"
    },{
        star: 4.4,
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/z/g/t/53-5-107-firozi-polyester-3-2-1-82-35-82-60-20-82-xp-7s7p1cf-153-original-imahfjapgpmcnzuy.jpeg?q=70",
        img2: "https://img.icons8.com/?size=100&id=tKTHzO8F7kZi&format=png&color=000000",
        text: "ست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعیست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعی",
        text2: "2000.Reviews",
        li1: ". بدنه چوبی",
        li2: ". رنگ قهوه ایی",
        li3: ". قابل شست و شو",
        li4: ". 7 نفره",
        p1: "2,000,000.‌‌توما‌ن",
        p2: "3,300,000.تومان",
        p3: "60%off",
        p4: "تحویل‌رایگان",
        p5: "برای‌مقایسه‌اضافه‌کنید"
    },{
        star: 4.4,
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/k/v/g/68-58-68-58-brown-cotton-blend-3-2-1-177-8-28-71-12-36-21-124-46-original-imah3r3yj5b6yu8n.jpeg?q=70",
        img2: "https://img.icons8.com/?size=100&id=tKTHzO8F7kZi&format=png&color=000000",
        text: "ست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعیست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعی",
        text2: "2000.Reviews",
        li1: ". بدنه چوبی",
        li2: ". رنگ قهوه ایی",
        li3: ". قابل شست و شو",
        li4: ". 7 نفره",
        p1: "2,000,000.‌‌توما‌ن",
        p2: "3,300,000.تومان",
        p3: "60%off",
        p4: "تحویل‌رایگان",
        p5: "برای‌مقایسه‌اضافه‌کنید"
    },{
        star: 4.4,
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/b/u/8/cream-cotton-blend-3-2-1-hd-ss-284-hdwood-natural-teak-finish-original-imah3yqjpe7hj9vc.jpeg?q=70",
        img2: "https://img.icons8.com/?size=100&id=tKTHzO8F7kZi&format=png&color=000000",
        text: "ست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعیست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعی",
        text2: "2000.Reviews",
        li1: ". بدنه چوبی",
        li2: ". رنگ قهوه ایی",
        li3: ". قابل شست و شو",
        li4: ". 7 نفره",
        p1: "2,000,000.‌‌توما‌ن",
        p2: "3,300,000.تومان",
        p3: "60%off",
        p4: "تحویل‌رایگان",
        p5: "برای‌مقایسه‌اضافه‌کنید"
    },]
    return (<>
        <div dir="ltr" className="flex-col sm:grid grid-cols-12">
            {Main.map((ids) => (
                <MeinMap mins={ids} />
            ))}
        </div></>
    )
}export default ShoppingBasket