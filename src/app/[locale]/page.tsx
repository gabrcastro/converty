"use client";

import { HeaderComponent } from "@/components/header.component";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import {
  FunctionType,
  functionType,
  languages,
} from "@/utils/constants/function_type.enum";
import { useTypeStore } from "@/state/type.store";
import { MenuComponent } from "@/components/menu.component";
import { FunctionComponent } from "@/components/function.component";
import { ArrowBigRightIcon } from "lucide-react";
import { Footer } from "@/components/footer.component";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";
import { ToastAction } from "@/components/ui/toast";
import { usePathname } from "next/navigation";
import { AccelerationComponent } from "@/components/functions_components/acceleration.component";
import { VolumeComponent } from "@/components/functions_components/volume.component";

export default function Home() {
  const { type } = useTypeStore((state) => state);

  const t = useTranslations(languages.TITLES);
  const p = useTranslations(languages.PAGES);

  const items: FunctionType[] = [
    { index: functionType.ACCELERATION, value: t(functionType.ACCELERATION) },
    { index: functionType.VOLUME, value: t(functionType.VOLUME) },
    { index: functionType.DENSITY, value: t(functionType.DENSITY) },
    { index: functionType.ENERGY, value: t(functionType.ENERGY) },
    { index: functionType.FORCE, value: t(functionType.FORCE) },
    { index: functionType.LENGTH, value: t(functionType.LENGTH) },
    { index: functionType.MASS, value: t(functionType.MASS) },
    { index: functionType.POWER, value: t(functionType.POWER) },
    { index: functionType.SPEED, value: t(functionType.SPEED) },
    { index: functionType.TIME, value: t(functionType.TIME) },
  ];

  // useEffect(() => {
  //   if (localStorage.getItem("infoToast") !== "true") {
  //     toast({
  //       variant: "destructive",
  //       description: p(languages.INFO),
  //       action: <ToastAction altText="Close">Close</ToastAction>,
  //     });
  //   }
  // });

  const renderFunctionComponent = () => {
    switch (type) {
      case functionType.ACCELERATION:
        return <AccelerationComponent />;
      case functionType.VOLUME:
        return <VolumeComponent />;
      default:
        return null; // Ou um componente de fallback
    }
  };

  return (
    <main className="w-screen h-screen overflow-x-hidden items-center justify-center">
      <HeaderComponent items={items} />
      <div className="my-10 flex items-center justify-center">
        <p className="hidden lg:flex text-zinc-700 text-sm text-center font-light w-[90$] lg:w-[70%]">
          {p(languages.INFO)}
        </p>
      </div>
      <MenuComponent items={items} />

      {renderFunctionComponent()}

      <Footer />
    </main>
  );
}
