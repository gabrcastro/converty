import { useTranslations } from "next-intl";
import { FunctionComponent } from "../function.component";
import { languages } from "@/utils/constants/function_type.enum";

export function VolumeComponent() {
  const t = useTranslations(languages.FUNCTIONS_V);
  const t2 = useTranslations(languages.FUNCTIONS);
  return (
    <div className="w-full px-2 lg:px-5 flex flex-wrap gap-5 items-start justify-center pt-0 lg:pt-10">
      <FunctionComponent
        title={t("kl")}
        formula={[
          `(kl -> hl) : ${t2("mult")} 10`,
          `(kl -> dal) : ${t2("mult")} 100`,
          `(kl -> l) : ${t2("mult")} 1000`,
          `(kl -> dl) : ${t2("mult")} 10000`,
          `(kl -> cl) : ${t2("mult")} 100000`,
          `(kl -> ml) : ${t2("mult")} 1000000`,
        ]}
      />

      <FunctionComponent
        title={t("hl")}
        formula={[
          `(hl -> kl) : ${t2("divi")} 10`,
          `(hl -> dal) : ${t2("mult")} 10`,
          `(hl -> l) : ${t2("mult")} 100`,
          `(hl -> dl) : ${t2("mult")} 1000`,
          `(hl -> cl) : ${t2("mult")} 10000`,
          `(hl -> ml) : ${t2("mult")} 100000`,
        ]}
      />

      <FunctionComponent
        title={t("dal")}
        formula={[
          `(dal -> kl) : ${t2("divi")} 100`,
          `(dal -> hl) : ${t2("divi")} 10`,
          `(dal -> l) : ${t2("mult")} 10`,
          `(dal -> dl) : ${t2("divi")} 100`,
          `(dal -> cl) : ${t2("mult")} 1000`,
          `(dal -> ml) : ${t2("mult")} 10000`,
        ]}
      />

      <FunctionComponent
        title={t("l")}
        formula={[
          `(l -> kl) : ${t2("divi")} 1000`,
          `(l -> hl) : ${t2("divi")} 100`,
          `(l -> dal) : ${t2("divi")} 10`,
          `(l -> dl) : ${t2("mult")} 10`,
          `(l -> cl) : ${t2("mult")} 100`,
          `(l -> ml) : ${t2("mult")} 1000`,
        ]}
      />

      <FunctionComponent
        title={t("dl")}
        formula={[
          `(dl -> kl) : ${t2("divi")} 10000`,
          `(dl -> hl) : ${t2("divi")} 1000`,
          `(dl -> dal) : ${t2("divi")} 100`,
          `(dl -> l) : ${t2("divi")} 10`,
          `(dl -> cl) : ${t2("mult")} 10`,
          `(dl -> ml) : ${t2("mult")} 100`,
        ]}
      />

      <FunctionComponent
        title={t("cl")}
        formula={[
          `(cl -> kl) : ${t2("divi")} 100000`,
          `(cl -> hl) : ${t2("divi")} 10000`,
          `(cl -> dal) : ${t2("divi")} 1000`,
          `(cl -> l) : ${t2("divi")} 100`,
          `(cl -> dl) : ${t2("divi")} 10`,
          `(cl -> ml) : ${t2("mult")} 10`,
        ]}
      />

      <FunctionComponent
        title={t("ml")}
        formula={[
          `(ml -> kl) : ${t2("divi")} 1000000`,
          `(ml -> hl) : ${t2("divi")} 100000`,
          `(ml -> dal) : ${t2("divi")} 10000`,
          `(ml -> l) : ${t2("divi")} 1000`,
          `(ml -> dl) : ${t2("divi")} 100`,
          `(ml -> cl) : ${t2("divi")} 10`,
        ]}
      />
    </div>
  );
}
