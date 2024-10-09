import { Button } from "@/components/ui/button";
import { Ghost, ArrowLeft } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-8 transition-colors duration-300 bg-gradient-to-b from-gray-100 to-white text-gray-900 dark:from-gray-900 dark:to-black dark:text-white">
      <div className="animate-pulse">
        <Ghost className="h-24 w-24 mb-4 text-gray-900 dark:text-white" />
      </div>
      <h1 className="text-6xl font-extrabold mb-4 tracking-tight">404</h1>
      <p className="text-xl mb-8 text-gray-500 dark:text-gray-400">
        صفحه‌ای که به دنبال آن هستید پیدا نشد.
      </p>
      <Link href={"/"}>
        <Button
          variant="outline"
          size="lg"
          className="flex items-center gap-2 transition-transform duration-200 hover:scale-105"
        >
          <ArrowLeft className="h-5 w-5" />
          بازگشت به صفحه اصلی
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
