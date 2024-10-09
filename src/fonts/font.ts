import localFont from "next/font/local";
const yekan = localFont({
  src: [
    {
      path: "../../public/fonts/YekanBakh-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakh-Light.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakh-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakh-SemiBold.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakh-Bold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakh-ExtraBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakh-Black.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakh-ExtraBlack.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export default yekan;
