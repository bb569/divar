"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Building2,
  ChevronRightIcon,
  MenuIcon,
  NotepadText,
  PackagePlus,
  ScanFace,
  SearchIcon,
  ShoppingBasket,
  Sofa,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "../extras/toggle-theme";
import yekan from "@/fonts/font";
import { replaceUnderscoresWithSpaces } from "@/utils/utils";
import { headerData } from "@/utils/data";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<string>("");
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  const [mobileNav, setMobileNav] = useState(true);
  const [isSticky, setIsSticky] = useState(false);

  let handleMobileNav = () => {
    setMobileNav(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const mainNavbar = document.getElementById("main-navbar");
      // @ts-ignore
      const stickyPoint = mainNavbar.offsetTop + mainNavbar.offsetHeight;

      if (window.scrollY > stickyPoint) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const data = headerData;

  return (
    <>
      <header
        className={`w-full hidden lg:block mb-12 transition-transform duration-500 shadow rounded-b-2xl dark:bg-stone-800 bg-background`}
      >
        <div className="flex flex-col h-44 w-full pb-4 mx-auto">
          <div className="flex-1 w-full mb-4 bg-[url('/images/texture.jpg')] bg-cover bg-center">
            <div className="w-full flex items-center justify-center backdrop-blur h-full">
              <Link
                href="/"
                className="flex px-4 md:px-6 gap-8 ml-4 items-center justify-center"
                prefetch={false}
              >
                <div className="flex flex-col items-center backdrop-blur-2xl bg-stone-800/55 rounded-2xl my-1 p-2">
                  <Sofa className="h-12 w-12 text-blue-500" />
                  <h1 className="text-blue-500 font-bold text-lg">یافت آباد</h1>
                </div>
                <h2 className="whitespace-nowrap text-white font-bold text-center flex flex-col gap-y-2">
                  <span className="text-3xl">مرجع چوب و مبلمان ایران</span>
                  <span>
                    نرو تا یافت آباد برو تو
                    <span className="text-blue-500"> یافت آباد!</span>
                  </span>
                </h2>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between w-full max-w-screen-2xl mx-auto px-4 md:px-6">
            <nav className="items-center hidden lg:flex">
              <Link href={`/products`}>
                <h3
                  className={`${navigationMenuTriggerStyle()} dark:bg-stone-800 dark:hover:bg-stone-700 flex items-center gap-x-2`}
                >
                  <ShoppingBasket className="h-5 w-5" />
                  <span>محصولات</span>
                </h3>
              </Link>
              <Link href={`/companies`}>
                <h3
                  className={`${navigationMenuTriggerStyle()} dark:bg-stone-800 dark:hover:bg-stone-700 flex items-center gap-x-2`}
                >
                  <Building2 className="h-5 w-5" />
                  <span>شرکت ها</span>
                </h3>
              </Link>
              <Link href={`/blogs`}>
                <h3
                  className={`${navigationMenuTriggerStyle()} dark:bg-stone-800 dark:hover:bg-stone-700 flex items-center gap-x-2`}
                >
                  <NotepadText className="h-5 w-5" />
                  <span>مقالات</span>
                </h3>
              </Link>
            </nav>
            <div className="mr-auto flex items-center gap-4 xl:mr-24">
              <div className="hidden sm:flex w-full items-center gap-x-4">
                <Link href={"/dashboard"}>
                  <Button
                    variant="outline"
                    className="flex items-center gap-x-2"
                  >
                    <PackagePlus className="h-6 w-6" />
                    <span>ثبت شرکت</span>
                  </Button>
                </Link>
                <Link href={"/login"}>
                  <Button className="flex items-center gap-x-2">
                    <ScanFace className="h-6 w-6" />
                    <span>ورود</span>
                  </Button>
                </Link>
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
      </header>
      <header
        className={`sticky top-0 w-full transition-transform duration-300 shadow rounded-b-2xl dark:bg-stone-800 px-4 md:px-6 z-50 bg-background ${
          isSticky
            ? "translate-y-0"
            : "-translate-y-full lg:h-0 lg:overflow-hidden"
        } ${mobileNav ? "!translate-y-0" : ""}`}
      >
        <div className="flex h-20 w-full shrink-0 items-center max-w-screen-2xl mx-auto">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden px-1 mx-2"
              >
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">باز کردن منو</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              className={`${yekan.className} overflow-y-auto pb-8 p-0`}
              side="right"
               
            >
              <div className="flex-col">
                <div className="bg-[url('/images/texture.jpg')] mb-4 mt-14">
                  <Link
                    href="/"
                    className="flex items-center gap-2 backdrop-blur-lg h-full p-4"
                    prefetch={false}
                    dir="rtl"
                  >
                    <Sofa className="h-9 w-9 text-white" />
                    <span className="text-lg sm:text-2xl whitespace-nowrap text-white font-bold ">
                      یافت آباد
                    </span>
                    <hr className="h-10 w-0.5 bg-white" />
                    <span className="text-xs font-semibold text-white">
                      برو تو یافت آباد!
                    </span>
                  </Link>
                </div>
                <div className="flex flex-col px-4">
                  <h4 className="mt-6 text-xl font-bold mb-2">دسته بندی ها</h4>
                  <div dir="rtl" className="grid gap-6 py-6">
                    {data.map((g) => (
                      <Collapsible
                        key={g.attributes.slug}
                        id={`${g.attributes.slug}`}
                        onOpenChange={() =>
                          isMenuOpen !== g.attributes.slug
                            ? setIsMenuOpen(g.attributes.slug)
                            : setIsMenuOpen("")
                        }
                        open={isMenuOpen === g.attributes.slug}
                        className="grid gap-4"
                      >
                        {g.attributes.slug === "blogs" ? (
                          <Link
                            className="w-full items-center text-lg font-semibold hover:scale-105 transition-transform duration-200"
                            href={`/${g.attributes.slug}`}
                          >
                            {replaceUnderscoresWithSpaces(
                              g.attributes.persian_name
                            )}
                          </Link>
                        ) : (
                          <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                            <Link
                              href={`/${g.attributes.slug}`}
                              className="hover:scale-105 transition-transform duration-200 flex items-center gap-x-2"
                            >
                              <g.attributes.icon className="h-4 w-4 sm:h-7 sm:w-7" />
                              <span className="text-base sm:text-lg">
                                {replaceUnderscoresWithSpaces(
                                  g.attributes.persian_name
                                )}
                              </span>
                            </Link>
                            <ChevronRightIcon className="mr-auto h-5 w-5 transition-all" />
                          </CollapsibleTrigger>
                        )}
                        <CollapsibleContent>
                          <div className="grid gap-2">
                            {g.attributes.categories?.data.map((c) => (
                              <Link
                                key={g.attributes.slug}
                                href={`/${g.attributes.slug}/${c.attributes.slug}`}
                                className="group grid px-4 h-auto w-full justify-start gap-1 py-4 bg-stone-100 dark:hover:bg-stone-700 hover:bg-stone-200 transition-all duration-300 dark:bg-stone-800 rounded-sm shadow-lg transform hover:translate-x-1 hover:-translate-y-1"
                                prefetch={false}
                              >
                                <div className="flex items-center">
                                  <c.attributes.icon className="h-4 w-4 ml-2 text-gray-500 dark:text-gray-400 mr-2" />
                                  <span className="text-sm font-medium leading-none group-hover:underline underline underline-offset-4">
                                    {replaceUnderscoresWithSpaces(
                                      c.attributes.persian_name
                                    )}
                                  </span>
                                </div>
                                {c.attributes.header_desc ? (
                                  <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                                    {c.attributes.header_desc}
                                  </div>
                                ) : (
                                  ""
                                )}
                              </Link>
                            ))}
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    ))}
                  </div>
                  <div className="flex items-center justify-between sm:hidden mt-8">
                    <span className="font-bold text-lg">تم وب سایت</span>
                    <ModeToggle />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between sm:hidden mt-6 w-full px-4">
                <Link href={"/dashboard"}>
                  <Button
                    variant="outline"
                    className="flex items-center gap-x-2 hover:shadow-xl transition-shadow duration-200"
                  >
                    <PackagePlus className="h-6 w-6" />
                    <span>ثبت شرکت</span>
                  </Button>
                </Link>
                <Link href={"/login"}>
                  <Button className="flex items-center gap-x-2 hover:shadow-xl transition-shadow duration-200">
                    <ScanFace className="h-6 w-6" />
                    <span>ورود</span>
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
          <nav className="items-center hidden lg:flex">
            <Link
              href="/"
              className="flex items-center gap-2 ml-4"
              prefetch={false}
            >
              <Sofa className="h-6 w-6 text-primary" />
              <h1 className="text-lg whitespace-nowrap text-primary font-bold">
                یافت آباد
              </h1>
            </Link>
            <hr className="bg-ring h-16 w-0.5 my-2" />
            <h3 className="pr-4 text-ring font-bold text-sm min-w-36">
              بازار آنلاین مبلمان
            </h3>
            <Link href={`/products`}>
              <h3
                className={`${navigationMenuTriggerStyle()} dark:bg-stone-800 dark:hover:bg-stone-700 flex items-center gap-x-2`}
              >
                <ShoppingBasket className="h-5 w-5" />
                <span>محصولات</span>
              </h3>
            </Link>
            <Link href={`/companies`}>
              <h3
                className={`${navigationMenuTriggerStyle()} dark:bg-stone-800 dark:hover:bg-stone-700 flex items-center gap-x-2`}
              >
                <Building2 className="h-5 w-5" />
                <span>شرکت ها</span>
              </h3>
            </Link>
            <Link href={`/blogs`}>
              <h3
                className={`${navigationMenuTriggerStyle()} dark:bg-stone-800 dark:hover:bg-stone-700 flex items-center gap-x-2`}
              >
                <NotepadText className="h-5 w-5" />
                <span>مقالات</span>
              </h3>
            </Link>
          </nav>
          <div className="mr-auto flex items-center gap-4 w-full xl:mr-24">
            <form className="relative w-full">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                type="search"
                placeholder="جست و جو کنید..."
                className="pl-8 pr-4 w-full"
              />
            </form>
            <div className="hidden sm:flex items-center gap-x-4">
              <Link href={"/dashboard"}>
                <Button variant="outline" className="flex items-center gap-x-2">
                  <PackagePlus className="h-6 w-6" />
                  <span>ثبت شرکت</span>
                </Button>
              </Link>
              <Link href={"/login"}>
                <Button className="flex items-center gap-x-2">
                  <ScanFace className="h-6 w-6" />
                  <span>ورود</span>
                </Button>
              </Link>
              <ModeToggle />
            </div>
          </div>
        </div>
      </header>
      <div
        id="main-navbar"
        className="hidden lg:flex h-28 w-full shrink-0 items-center max-w-screen-2xl mx-auto px-4 md:px-6 mb-4"
      >
        <div className="w-full h-full bg-stone-200 dark:bg-stone-800 m-2 rounded-2xl">
          <div className="flex items-center h-full px-6 w-full">
            <div className="flex items-center h-full justify-between w-full">
              <div className="flex items-center h-full w-full gap-x-2 xl:gap-x-16">
                <div>
                  <NavigationMenu dir="rtl" className="hidden lg:flex">
                    <NavigationMenuList className="gap-x-2">
                      {data.map((g) => (
                        <NavigationMenuItem key={g.attributes.slug}>
                          <Link href={`/${g.attributes.slug}`}>
                            <NavigationMenuTrigger className="px-4 py-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-md flex items-center gap-2">
                              <g.attributes.icon className="w-5 h-5" />
                              <h3 className="font-semibold">
                                {replaceUnderscoresWithSpaces(
                                  g.attributes.persian_name
                                )}
                              </h3>
                            </NavigationMenuTrigger>
                          </Link>
                          {g.attributes.categories && (
                            <NavigationMenuContent className=" !w-[50rem] rounded-lg shadow-lg p-4">
                              <div className="grid grid-cols-2 gap-4">
                                {g.attributes.categories.data.map((cat) => (
                                  <Link
                                    href={`/${cat.attributes.slug}`}
                                    key={cat.id}
                                  >
                                    <div className="w-full p-5 bg-gray-100 dark:bg-stone-800 hover:bg-gray-200 dark:hover:bg-stone-700 transition-all duration-200 transform hover:scale-105 rounded-md flex items-start gap-x-2">
                                      <cat.attributes.icon className="w-6 h-6 text-ring" />
                                      <div>
                                        <h4 className="font-semibold text-gray-800 dark:text-white">
                                          {replaceUnderscoresWithSpaces(
                                            cat.attributes.persian_name
                                          )}
                                        </h4>
                                        <span className="block text-sm text-gray-500 dark:text-gray-400 mt-1">
                                          {cat.attributes.header_desc}
                                        </span>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </NavigationMenuContent>
                          )}
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenu>
                </div>
                <form className="relative w-full">
                  <SearchIcon className="absolute left-4 top-2.5 h-7 w-4 text-gray-500 dark:text-gray-400" />
                  <Input
                    type="search"
                    placeholder="جست و جو کنید..."
                    className="pl-8 pr-4 w-full h-12"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
