import { useTranslations } from "next-intl";
import { FunctionComponent } from "../function.component";
import { functionType, languages } from "@/utils/constants/function_type.enum";

export function AccelerationComponent() {
  const t = useTranslations(languages.FUNCTIONS_A);
  const t2 = useTranslations(languages.FUNCTIONS);

  return (
    <div className="w-full px-2 lg:px-5 flex flex-wrap gap-5 items-start justify-center pt-0 lg:pt-10">
      <FunctionComponent
        title={t("m/s")}
        formula={[
          `(m/s² -> ft/s²) : ${t2("mult")} 3.28083989501`,
          `(m/s² -> G) : ${t2("mult")} 0.101971621298`,
          `(m/s² -> gal) : ${t2("mult")} 100`,
          `(m/s² -> in/s²) : ${t2("mult")} 39.3700787402`,
        ]}
      />

      <FunctionComponent
        title={t("ft/s")}
        formula={[
          `(ft/s² -> m/s²) : ${t2("mult")} 0.3048`,
          `(ft/s² -> G) : ${t2("mult")} 0.0310809501716`,
          `(ft/s² -> gal) : ${t2("mult")} 30.48`,
          `(ft/s² -> in/s²) : ${t2("mult")} 12`,
        ]}
      />

      <FunctionComponent
        title={t("g")}
        formula={[
          `(G -> m/s²) : ${t2("mult")} 9.80665`,
          `(G -> ft/s²) : ${t2("mult")} 32.1740485564`,
          `(G -> gal) : ${t2("mult")} 980.665`,
          `(G -> in/s²) : ${t2("mult")} 386.088582677`,
        ]}
      />

      <FunctionComponent
        title={t("gal")}
        formula={[
          `(gal -> m/s²) : ${t2("divi")} 100`,
          `(gal -> ft/s²) : ${t2("mult")} 0.0328083989501`,
          `(gal -> G) : ${t2("mult")} 0.00101971621298`,
          `(gal -> in/s²) : ${t2("mult")} 0.393700787402`,
        ]}
      />

      <FunctionComponent
        title={t("in/s")}
        formula={[
          `(in/s² -> m/s²) : ${t2("mult")} 0.0254`,
          `(in/s² -> ft/s²) : ${t2("mult")} 0.0833333333333`,
          `(in/s² -> G) : ${t2("mult")} 0.00259007918096`,
          `(in/s² -> gal) : ${t2("mult")} 2.54`,
        ]}
      />
    </div>
  );
}
