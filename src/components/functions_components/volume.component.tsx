import { useTranslations } from "next-intl";
import { FunctionComponent } from "../function.component";
import { languages } from "@/utils/constants/function_type.enum";
import { Card } from "../ui/card";
import { ChangeEvent, useState } from "react";
import { FunctionItems } from "@/utils/functions.types";
import {
  VolumeFunctions,
  VolumeResult,
} from "@/utils/functions/volume.functions";

export function VolumeComponent() {
  const t = useTranslations(languages.FUNCTIONS_V);
  const t2 = useTranslations(languages.FUNCTIONS);
  const functions: VolumeFunctions = new VolumeFunctions();

  const [values, setValues] = useState({
    klValue: "",
    hlValue: "",
    dalValue: "",
    lValue: "",
    dlValue: "",
    clValue: "",
    mlValue: "",
  });

  const handleChange = (name: string, event: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [name]: event.target.value,
    });
  };

  const handleInputChange = (name: string, value: string) => {
    const event = {
      target: {
        value,
      },
    } as ChangeEvent<HTMLInputElement>;
    handleChange(name, event);
  };

  function setAllValues(newValues: VolumeResult) {
    setValues({
      klValue: newValues.kiloliter.toString(),
      hlValue: newValues.hectoliter.toString(),
      dalValue: newValues.decaliter.toString(),
      lValue: newValues.liter.toString(),
      dlValue: newValues.deciliter.toString(),
      clValue: newValues.centiliter.toString(),
      mlValue: newValues.milliliter.toString(),
    });
  }

  const items: FunctionItems[] = [
    {
      title: t("kl"),
      formula: [
        `(kl -> hl) : ${t2("mult")} 10`,
        `(kl -> dal) : ${t2("mult")} 100`,
        `(kl -> l) : ${t2("mult")} 1000`,
        `(kl -> dl) : ${t2("mult")} 10000`,
        `(kl -> cl) : ${t2("mult")} 100000`,
        `(kl -> ml) : ${t2("mult")} 1000000`,
      ],
      inputValie: values.klValue,
      changeInputValue: (val: string) => handleInputChange("klValue", val),
      onClick: () => {
        const result: VolumeResult = functions.kiloliterTo(+values.klValue);
        setAllValues(result);
      },
    },
    {
      title: t("hl"),
      formula: [
        `(hl -> kl) : ${t2("divi")} 10`,
        `(hl -> dal) : ${t2("mult")} 10`,
        `(hl -> l) : ${t2("mult")} 100`,
        `(hl -> dl) : ${t2("mult")} 1000`,
        `(hl -> cl) : ${t2("mult")} 10000`,
        `(hl -> ml) : ${t2("mult")} 100000`,
      ],
      inputValie: values.hlValue,
      changeInputValue: (val: string) => handleInputChange("hlValue", val),
      onClick: () => {
        const result: VolumeResult = functions.hectoliterTo(+values.hlValue);
        setAllValues(result);
      },
    },
    {
      title: t("dal"),
      formula: [
        `(dal -> kl) : ${t2("divi")} 100`,
        `(dal -> hl) : ${t2("divi")} 10`,
        `(dal -> l) : ${t2("mult")} 10`,
        `(dal -> dl) : ${t2("divi")} 100`,
        `(dal -> cl) : ${t2("mult")} 1000`,
        `(dal -> ml) : ${t2("mult")} 10000`,
      ],
      inputValie: values.dalValue,
      changeInputValue: (val: string) => handleInputChange("dalValue", val),
      onClick: () => {
        const result: VolumeResult = functions.decaliterTo(+values.dalValue);
        setAllValues(result);
      },
    },
    {
      title: t("l"),
      formula: [
        `(l -> kl) : ${t2("divi")} 1000`,
        `(l -> hl) : ${t2("divi")} 100`,
        `(l -> dal) : ${t2("divi")} 10`,
        `(l -> dl) : ${t2("mult")} 10`,
        `(l -> cl) : ${t2("mult")} 100`,
        `(l -> ml) : ${t2("mult")} 1000`,
      ],
      inputValie: values.lValue,
      changeInputValue: (val: string) => handleInputChange("lValue", val),
      onClick: () => {
        const result: VolumeResult = functions.literTo(+values.lValue);
        setAllValues(result);
      },
    },
    {
      title: t("dl"),
      formula: [
        `(dl -> kl) : ${t2("divi")} 10000`,
        `(dl -> hl) : ${t2("divi")} 1000`,
        `(dl -> dal) : ${t2("divi")} 100`,
        `(dl -> l) : ${t2("divi")} 10`,
        `(dl -> cl) : ${t2("mult")} 10`,
        `(dl -> ml) : ${t2("mult")} 100`,
      ],
      inputValie: values.dlValue,
      changeInputValue: (val: string) => handleInputChange("dlValue", val),
      onClick: () => {
        const result: VolumeResult = functions.deciliterTo(+values.dlValue);
        setAllValues(result);
      },
    },
    {
      title: t("cl"),
      formula: [
        `(cl -> kl) : ${t2("divi")} 100000`,
        `(cl -> hl) : ${t2("divi")} 10000`,
        `(cl -> dal) : ${t2("divi")} 1000`,
        `(cl -> l) : ${t2("divi")} 100`,
        `(cl -> dl) : ${t2("divi")} 10`,
        `(cl -> ml) : ${t2("mult")} 10`,
      ],
      inputValie: values.clValue,
      changeInputValue: (val: string) => handleInputChange("clValue", val),
      onClick: () => {
        const result: VolumeResult = functions.centiliterTo(+values.clValue);
        setAllValues(result);
      },
    },
    {
      title: t("ml"),
      formula: [
        `(ml -> kl) : ${t2("divi")} 1000000`,
        `(ml -> hl) : ${t2("divi")} 100000`,
        `(ml -> dal) : ${t2("divi")} 10000`,
        `(ml -> l) : ${t2("divi")} 1000`,
        `(ml -> dl) : ${t2("divi")} 100`,
        `(ml -> cl) : ${t2("divi")} 10`,
      ],
      inputValie: values.mlValue,
      changeInputValue: (val: string) => handleInputChange("mlValue", val),
      onClick: () => {
        const result: VolumeResult = functions.mililitroTo(+values.mlValue);
        setAllValues(result);
      },
    },
  ];

  return (
    <div className="w-full px-2 lg:px-5 flex flex-col gap-5 items-center justify-center pt-0 lg:pt-10">
      <Card className="w-5/6 lg:w-1/2 px-5 py-10">
        {items.map((item) => {
          return (
            <FunctionComponent
              key={item.title}
              title={item.title}
              formula={item.formula}
              inputValue={item.inputValie}
              changeInputValue={item.changeInputValue}
              onClick={item.onClick}
            />
          );
        })}
      </Card>
    </div>
  );
}
