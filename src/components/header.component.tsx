"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useTypeStore } from "@/state/type.store";
import {
  FunctionType,
  functionType,
} from "@/utils/constants/function_type.enum";

import { links } from "@/utils/constants/links.enum";
import clsx from "clsx";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { RiMenu4Line } from "react-icons/ri";

interface HeaderProps {
  items: FunctionType[];
}

export function HeaderComponent({ items }: HeaderProps) {
  const { type, changeType } = useTypeStore((state) => state);
  const router = usePathname();

  function handleClick(index: string) {
    changeType(index);
  }

  return (
    <div className="flex flex-row w-full justify-between items-center px-10 py-5">
      <span className="flex gap-2 items-center text-base font-bold text-zinc-900">
        <Image
          src="/logo.png"
          alt=""
          width={500}
          height={500}
          className="w-4 h-4"
        />
        CONVERTY
      </span>
      <div className="flex gap-3">
        <div className=" gap-3 hidden lg:flex">
          <a
            href={links.PT_BR}
            className={clsx(
              router == links.PT_BR ? "opacity-100" : "opacity-40",
              "hover:opacity-95"
            )}
          >
            🇧🇷
          </a>
          <a
            href={links.EN_US}
            className={clsx(
              router == links.EN_US ? "opacity-100" : "opacity-40",
              "hover:opacity-95"
            )}
          >
            🇺🇸
          </a>
        </div>

        <div className="block lg:hidden">
          <Sheet>
            <SheetTrigger>
              <RiMenu4Line className="text-zinc-900 size-7 " />
            </SheetTrigger>
            <SheetContent>
              <div className="mt-10 flex flex-col items-center justify-center">
                {items.map((item) => (
                  <button
                    key={item.index}
                    type="button"
                    onClick={() => handleClick(item.index)}
                    className={clsx(
                      item.index == type &&
                        "bg-white shadow-sm shadow-zinc-200",
                      "rounded-md min-w-30 px-4 py-2 flex items-center justify-center"
                    )}
                  >
                    <span
                      className={clsx(
                        item.index == type ? "text-zinc-900" : "text-zinc-500",
                        "font-medium text-sm"
                      )}
                    >
                      {item.value}
                    </span>
                  </button>
                ))}
              </div>
              <SheetFooter>
                <div className="flex gap-3 items-center justify-center w-full mt-10">
                  <a
                    href={links.PT_BR}
                    className={clsx(
                      router == links.PT_BR ? "opacity-100" : "opacity-40",
                      "hover:opacity-95"
                    )}
                  >
                    🇧🇷
                  </a>
                  <a
                    href={links.EN_US}
                    className={clsx(
                      router == links.EN_US ? "opacity-100" : "opacity-40",
                      "hover:opacity-95"
                    )}
                  >
                    🇺🇸
                  </a>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
