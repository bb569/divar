"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IceCreamIcon, HomeIcon, StarIcon, User } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import ARModelViewer from "../extras/ar-model-viewer";

export default function HomePage() {
  const isSmallScreen = useMediaQuery({
    query: "(min-width: 640px) and (max-width: 767px)",
  });
  const isMediumScreen = useMediaQuery({ query: "(min-width: 768px)" });

  // Set styles based on media query
  let height = "250px";
  let cameraOrbit = "25deg 80deg 3.5m";

  if (isSmallScreen) {
    height = "350px";
    cameraOrbit = "25deg 80deg -20m";
  } else if (isMediumScreen) {
    height = "450px";
    cameraOrbit = "25deg 80deg 3.5m";
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:pb-24 lg:pb-32 xl:pb-48">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-between lg:flex-row flex-col">
              <div className="flex flex-col justify-center space-y-4 max-w-[600px] sm:max-w-[850px] xl:max-w-full">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    کشف ظرافت مدرن
                  </h1>
                  <p className="text-gray-500 md:text-xl lg:max-w-[600px]">
                    فضای زندگی خود را با مبلمان مدرن و باکیفیت ما ارتقا دهید.
                    تجربه‌ای از راحتی و سبک را مانند هیچ‌گاه قبل داشته باشید.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="inline-flex items-center justify-center">
                    خرید اکنون
                  </Button>
                  <Button variant="outline">مشاهده مجموعه</Button>
                </div>
              </div>
              <div className="px-2 flex-1 overflow-hidden w-full">
                <ARModelViewer
                  disable-zoom
                  camera-controls
                  autoplay
                  auto-rotate
                  url="/models/sofa.glb"
                  class="min-w-[280px] w-full"
                  camera-orbit={cameraOrbit}
                  style={{
                    height,
                    width: "100%",
                  }}
                  alt="مدل سه بعدی مبل"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full pb-12 md:pb-24 lg:pb-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">
              ویژگی‌های ما را کاوش کنید
            </h2>
            <Tabs dir="rtl" defaultValue="3d" className="w-full">
              <TabsList>
                <TabsTrigger value="3d">نمای سه‌بعدی</TabsTrigger>
                <TabsTrigger value="ar">تجربه AR</TabsTrigger>
                <TabsTrigger value="reviews">نظرات مشتریان</TabsTrigger>
              </TabsList>
              <TabsContent value="3d" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center h-[400px] rounded-lg">
                      <IceCreamIcon className="h-16 w-16 text-gray-400" />
                      <span className="ml-2 text-lg font-medium text-gray-600">
                        نمای سه‌بعدی به زودی
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="ar" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center h-[400px] rounded-lg">
                      <HomeIcon className="h-16 w-16 text-gray-400" />
                      <span className="ml-2 text-lg font-medium text-gray-600">
                        تجربه AR به زودی
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="reviews" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid gap-4">
                      <div className="flex items-start space-x-4">
                        <User className="h-8 w-8 m-2" />
                        <div className="space-y-1">
                          <h3 className="font-semibold">سارا ل.</h3>
                          <p className="text-sm text-gray-500">
                            ویژگی AR به من کمک کرد تا مبل مناسب برای فضای خودم
                            را انتخاب کنم. کیفیت و خدمات عالی!
                          </p>
                          <div className="flex items-center">
                            <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                            <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                            <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                            <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                            <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <User className="h-8 w-8 m-2" />
                        <div className="space-y-1">
                          <h3 className="font-semibold">مایکل ت.</h3>
                          <p className="text-sm text-gray-500">
                            ویژگی AR به من کمک کرد تا مبل مناسب برای فضای خودم
                            را انتخاب کنم. کیفیت و خدمات عالی!
                          </p>
                          <div className="flex items-center">
                            <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                            <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                            <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                            <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                            <StarIcon className="w-4 h-4 text-gray-300 fill-current" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </div>
  );
}
