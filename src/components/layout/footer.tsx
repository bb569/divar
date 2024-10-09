import {
  InstagramIcon,
  MapPinIcon,
  PhoneIcon,
  Send,
  Sofa,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-10 md:py-16 lg:py-20 self-end w-full bg-stone-100 dark:bg-stone-900">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
          <div>
            <Link
              href="/"
              className="flex items-center space-x-2 rtl:space-x-reverse"
              prefetch={false}
            >
              <Sofa className="h-8 w-8 text-ring" />
              <span className="text-ring font-bold text-xl">یافت آباد</span>
            </Link>
            <p className="text-gray-600 mt-4 dark:text-gray-400 text-right">
              نرو تا یافت آباد برو تو یافت آباد!
            </p>
          </div>
          <div>
            <h4 className="text-ring font-bold mb-4 text-right">
              لینک های سریع
            </h4>
            <nav className="space-y-2 text-right flex flex-col">
              <Link
                href="/"
                className="text-gray-600 hover:text-ring dark:text-gray-400 dark:hover:text-ring"
                prefetch={false}
              >
                خانه
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-ring dark:text-gray-400 dark:hover:text-ring"
                prefetch={false}
              >
                درباره ما
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-ring dark:text-gray-400 dark:hover:text-ring"
                prefetch={false}
              >
                تماس با ما
              </Link>
            </nav>
          </div>
          <div>
            <h4 className="text-ring font-bold mb-4 text-right">
              اطلاعات تماس
            </h4>
            <div className="space-y-2 text-right">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <MapPinIcon className="min-h-[1.25rem] min-w-[1.25rem] text-ring" />
                <span className="text-gray-600 dark:text-gray-400">
                  تهران میدان ونک خیابان گاندی پلاک 2
                </span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <PhoneIcon className="min-h-[1.25rem] min-w-[1.25rem] text-ring" />
                <span className="text-gray-600 dark:text-gray-400">
                  <Link dir="ltr" href={"tel:09121235667"}>
                    09121235667
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-ring font-bold mb-4 text-right">دنبال کنید</h4>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <Link
                href=""
                className="text-gray-600 hover:text-ring dark:text-gray-400 dark:hover:text-ring"
                prefetch={false}
              >
                <InstagramIcon className="h-6 w-6" />
              </Link>
              <Link
                href=""
                className="text-gray-600 hover:text-ring dark:text-gray-400 dark:hover:text-ring"
                prefetch={false}
              >
                
                <Send className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-gray-600 dark:text-gray-400 text-right">
          &copy; 2024 یافت آباد. تمام حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
}
