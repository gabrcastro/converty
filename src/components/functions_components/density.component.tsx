import { useTranslations } from "next-intl";
import { FunctionComponent } from "../function.component";
import { functionType, languages } from "@/utils/constants/function_type.enum";
import { Card } from "../ui/card";
import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from "react";
import { FunctionItems } from "@/utils/functions.types";

export function AccelerationComponent() {
  const t = useTranslations(languages.FUNCTIONS_A);
  const t2 = useTranslations(languages.FUNCTIONS);

  const [values, setValues] = useState({
    msValue: "",
    ftsValue: "",
    gValue: "",
    galValue: "",
    insValue: "",
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

  const items: FunctionItems[] = [
    {
      title: t("m/s"),
      formula: [
        `(m/s² -> ft/s²) : ${t2("mult")} 3.28083989501`,
        `(m/s² -> G) : ${t2("mult")} 0.101971621298`,
        `(m/s² -> gal) : ${t2("mult")} 100`,
        `(m/s² -> in/s²) : ${t2("mult")} 39.3700787402`,
      ],
      inputValie: values.msValue,
      changeInputValue: (val: string) => handleInputChange("msValue", val),
    },
    {
      title: t("ft/s"),
      formula: [
        `(ft/s² -> m/s²) : ${t2("mult")} 0.3048`,
        `(ft/s² -> G) : ${t2("mult")} 0.0310809501716`,
        `(ft/s² -> gal) : ${t2("mult")} 30.48`,
        `(ft/s² -> in/s²) : ${t2("mult")} 12`,
      ],
      inputValie: values.ftsValue,
      changeInputValue: (val: string) => handleInputChange("ftsValue", val),
    },
    {
      title: t("g"),
      formula: [
        `(G -> m/s²) : ${t2("mult")} 9.80665`,
        `(G -> ft/s²) : ${t2("mult")} 32.1740485564`,
        `(G -> gal) : ${t2("mult")} 980.665`,
        `(G -> in/s²) : ${t2("mult")} 386.088582677`,
      ],
      inputValie: values.gValue,
      changeInputValue: (val: string) => handleInputChange("gValue", val),
    },
    {
      title: t("gal"),
      formula: [
        `(gal -> m/s²) : ${t2("divi")} 100`,
        `(gal -> ft/s²) : ${t2("mult")} 0.0328083989501`,
        `(gal -> G) : ${t2("mult")} 0.00101971621298`,
        `(gal -> in/s²) : ${t2("mult")} 0.393700787402`,
      ],
      inputValie: values.galValue,
      changeInputValue: (val: string) => handleInputChange("galValue", val),
    },
    {
      title: t("in/s"),
      formula: [
        `(in/s² -> m/s²) : ${t2("mult")} 0.0254`,
        `(in/s² -> ft/s²) : ${t2("mult")} 0.0833333333333`,
        `(in/s² -> G) : ${t2("mult")} 0.00259007918096`,
        `(in/s² -> gal) : ${t2("mult")} 2.54`,
      ],
      inputValie: values.insValue,
      changeInputValue: (val: string) => handleInputChange("insValue", val),
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
            />
          );
        })}
      </Card>
    </div>
  );
}
