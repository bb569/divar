import {
  Sofa,
  Bed,
  Briefcase,
  Layers,
  Package,
  Layout,
  Armchair,
  Coffee,
  Box,
  Trees,
  Book,
} from "lucide-react";

export const headerData = [
  {
    id: 1,
    attributes: {
      name: "home_furniture",
      slug: "home-furniture",
      icon: Sofa,
      persian_name: "مبلمان خانگی",
      categories: {
        data: [
          {
            id: 1,
            attributes: {
              name: "sofas_chester",
              slug: "sofas-chester",
              icon: Sofa,
              persian_name: "مبل راحتی و چستر",
              header_desc: "مبل‌های راحتی و چستر برای خانه‌های شما",
            },
          },
          {
            id: 2,
            attributes: {
              name: "classic_steel_sofas",
              slug: "classic-steel-sofas",
              icon: Armchair,
              persian_name: "مبل استیل و کلاسیک",
              header_desc: "مبل‌های استیل و کلاسیک با طراحی زیبا",
            },
          },
          {
            id: 3,
            attributes: {
              name: "sofa_beds",
              slug: "sofa-beds",
              icon: Bed,
              persian_name: "مبل تخت‌خواب‌شو",
              header_desc: "مبل‌های تخت‌خواب‌شو مناسب فضاهای کوچک",
            },
          },
          {
            id: 4,
            attributes: {
              name: "sectional_sofas",
              slug: "sectional-sofas",
              icon: Layers,
              persian_name: "مبل ال",
              header_desc: "مبل‌های ال‌شکل مناسب فضاهای بزرگ",
            },
          },
          {
            id: 5,
            attributes: {
              name: "coffee_side_tables",
              slug: "coffee-side-tables",
              icon: Coffee,
              persian_name: "جلو مبل و عسلی",
              header_desc: "میزهای جلو مبلی و عسلی شیک و کاربردی",
            },
          },
        ],
      },
    },
  },
  {
    id: 2,
    attributes: {
      name: "office_furniture",
      slug: "office-furniture",
      icon: Briefcase,
      persian_name: "تجهیزات و مبلمان اداری",
      categories: {
        data: [
          {
            id: 6,
            attributes: {
              name: "office_sofas",
              slug: "office-sofas",
              icon: Sofa,
              persian_name: "مبل اداری",
              header_desc: "مبل‌های راحت اداری",
            },
          },
          {
            id: 7,
            attributes: {
              name: "office_tables",
              slug: "office-tables",
              icon: Layout,
              persian_name: "میز اداری",
              header_desc: "میزهای اداری با طراحی مدرن و کاربردی",
            },
          },
          {
            id: 8,
            attributes: {
              name: "office_chairs",
              slug: "office-chairs",
              icon: Armchair,
              persian_name: "صندلی اداری",
              header_desc: "صندلی‌های راحت و ارگونومیک اداری",
            },
          },
          {
            id: 9,
            attributes: {
              name: "office_storage",
              slug: "office-storage",
              icon: Package,
              persian_name: "کمد اداری",
              header_desc: "کمدهای اداری برای نگهداری فایل‌ها و اسناد",
            },
          },
        ],
      },
    },
  },
  {
    id: 3,
    attributes: {
      name: "bedroom_living",
      slug: "bedroom-living",
      icon: Bed,
      persian_name: "سرویس خواب و پذیرایی",
      categories: {
        data: [
          {
            id: 10,
            attributes: {
              name: "bedroom_sets",
              slug: "bedroom-sets",
              icon: Bed,
              persian_name: "سرویس خواب",
              header_desc: "سرویس‌های خواب زیبا و با کیفیت",
            },
          },
          {
            id: 11,
            attributes: {
              name: "mattresses",
              slug: "mattresses",
              icon: Layers,
              persian_name: "تشک خواب",
              header_desc: "تشک‌های راحت و استاندارد",
            },
          },
          {
            id: 12,
            attributes: {
              name: "decorative_items",
              slug: "decorative-items",
              icon: Box,
              persian_name: "کالای دکوراتیو",
              header_desc: "تزئینات زیبای اتاق و پذیرایی",
            },
          },
          {
            id: 13,
            attributes: {
              name: "children_room",
              slug: "children-room",
              icon: Trees,
              persian_name: "اتاق کودک",
              header_desc: "مبلمان و تزئینات مخصوص اتاق کودک",
            },
          },
          {
            id: 14,
            attributes: {
              name: "closets_bookshelves",
              slug: "closets-bookshelves",
              icon: Book,
              persian_name: "کمد و کتابخانه",
              header_desc: "کمد و کتابخانه‌های زیبا و جادار",
            },
          },
        ],
      },
    },
  },
  {
    id: 4,
    attributes: {
      name: "raw_materials",
      slug: "raw-materials",
      icon: Layers,
      persian_name: "مواد اولیه",
      categories: {
        data: [
          {
            id: 15,
            attributes: {
              name: "fabrics",
              slug: "fabrics",
              icon: Layers,
              persian_name: "پارچه",
              header_desc: "پارچه‌های با کیفیت برای مبل و تخت",
            },
          },
          {
            id: 16,
            attributes: {
              name: "wood",
              slug: "wood",
              icon: Layers,
              persian_name: "چوب",
              header_desc: "چوب‌های مقاوم برای ساخت مبلمان",
            },
          },
          {
            id: 17,
            attributes: {
              name: "glass",
              slug: "glass",
              icon: Layers,
              persian_name: "شیشه",
              header_desc: "شیشه‌های شفاف و مقاوم برای میزها و درب‌ها",
            },
          },
          {
            id: 18,
            attributes: {
              name: "metal",
              slug: "metal",
              icon: Layers,
              persian_name: "فلز",
              header_desc: "فلزات مقاوم برای پایه‌ها و اسکلت مبلمان",
            },
          },
        ],
      },
    },
  },
];
