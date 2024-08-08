import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useTranslations } from "next-intl";

interface FunctionProps {
  title: string;
  formula: string[];
  inputValue: string;
  changeInputValue: (value: string) => void;
  onClick?: () => void;
}

export function FunctionComponent({
  title,
  formula,
  inputValue,
  changeInputValue,
  onClick,
}: FunctionProps) {
  const t = useTranslations("pages");

  return (
    <div className="flex flex-col gap-1 items-start w-full">
      <div className="w-full flex gap-1 items-end">
        {/* <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader> */}
        {/* <CardContent className="flex flex-row items-end gap-1"> */}
        <div className="flex flex-col items-start w-full">
          <label className="text-base font-bold text-blue-700">{title}</label>
          <Input
            name={title}
            value={inputValue}
            onChange={(e) => changeInputValue(e.target.value)}
            className="focus-visible:ring-offset-0 focus-visible:ring-0"
            type="number"
          />
        </div>
        <Button variant={"outline"} onClick={onClick}>
          <LiaExchangeAltSolid className="size-4" />
        </Button>
        {/* </CardContent> */}
        {/* <CardFooter className="flex flex-col items-start gap-2">
        {formula.map((item) => (
          <span key={item} className="text-sm flex flex-col text-blue-950">
            {item}
          </span>
        ))}
      </CardFooter> */}
      </div>
      <Popover>
        <PopoverTrigger className="text-sm font-light text-zinc-700 mb-7">
          {t("formula")}
        </PopoverTrigger>
        <PopoverContent className="flex flex-col gap-2 w-fit">
          <span>{t("formula")}</span>
          {formula.map((item) => (
            <span key={item} className="text-sm flex flex-col text-zinc-950">
              {item}
            </span>
          ))}
        </PopoverContent>
      </Popover>
    </div>

    // <Card className="w-full lg:w-[30%]">
    //   <CardHeader>
    //     <CardTitle className="text-base">{title}</CardTitle>
    //   </CardHeader>
    //   <CardContent className="flex flex-row gap-1">
    //     <Input value={input} onChange={(e) => setInput(e.target.value)} />
    //     <Button variant={"outline"}>
    //       <LiaExchangeAltSolid className="size-4" />
    //     </Button>
    //   </CardContent>
    //   <CardFooter className="flex flex-col items-start gap-2">
    //     {formula.map((item) => (
    //       <span key={item} className="text-sm flex flex-col text-blue-950">
    //         {item}
    //       </span>
    //     ))}
    //   </CardFooter>
    // </Card>
  );
}
