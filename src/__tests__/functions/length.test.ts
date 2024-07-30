import { describe, expect, it } from "vitest";
import { LengthFuntions } from "../../utils/functions/length.function";

// Crie a instância da classe antes de todos os testes
const lengthFunctions = new LengthFuntions();

describe("LengthFunctions", () => {
  describe("kilometer", () => {
    it("should convert km to other units correctly", () => {
      const result = lengthFunctions.kilometerTo(1);

      expect(result.meter).toBe(1000);
      expect(result.centimeter).toBe(100000);
      expect(result.decimeter).toBe(10000);
      expect(result.millimeter).toBe(1000000);

      expect(result.decameter).toBeCloseTo(100);
      expect(result.nanometer).toBeCloseTo(1000000000000);
      expect(result.micron).toBeCloseTo(1000000000);
      expect(result.hectometer).toBeCloseTo(10);

      expect(result.mile).toBeCloseTo(0.621371, 5);
      expect(result.inch).toBeCloseTo(39370.08, 2);
      expect(result.feet).toBeCloseTo(3280.84, 2);
      expect(result.yard).toBeCloseTo(1093.613, 3);
    });

    // it("should handle negative input", () => {
    //   const result = lengthFunctions.kilometerTo(-1);

    //   expect(result.meter).toBe(-1000);
    //   expect(result.centimeter).toBe(-100000);
    //   expect(result.decimeter).toBe(-10000);
    //   expect(result.millimeter).toBe(-1000000);
    //   expect(result.mile).toBeCloseTo(-0.621371, 5);
    //   expect(result.inch).toBeCloseTo(-39370.08, 2);
    //   expect(result.feet).toBeCloseTo(-3280.84, 2);
    //   expect(result.yard).toBeCloseTo(-1093.613, 3);
    // });
  });

  describe("meter", () => {
    it("should convert m to other units correctly", () => {
      const result = lengthFunctions.meterTo(1);

      expect(result.kilometer).toBe(0.001);
      expect(result.centimeter).toBe(100);
      expect(result.decimeter).toBe(10);
      expect(result.millimeter).toBe(1000);

      expect(result.decameter).toBeCloseTo(0.1);
      expect(result.nanometer).toBeCloseTo(1000000000);
      expect(result.micron).toBeCloseTo(1000000);
      expect(result.hectometer).toBeCloseTo(0.01);

      expect(result.mile).toBeCloseTo(0.000621371);
      expect(result.inch).toBeCloseTo(39.3701);
      expect(result.feet).toBeCloseTo(3.28084);
      expect(result.yard).toBeCloseTo(1.09361);
    });

    // it("should handle negative input", () => {
    //   const result = lengthFunctions.meterTo(-1);

    //   expect(result.kilometer).toBe(-0.001);
    //   expect(result.centimeter).toBe(-100);
    //   expect(result.decimeter).toBe(-10);
    //   expect(result.millimeter).toBe(-1000);
    //   expect(result.mile).toBeCloseTo(-0.000621371);
    //   expect(result.inch).toBeCloseTo(-39.3701);
    //   expect(result.feet).toBeCloseTo(-3.28084);
    //   expect(result.yard).toBeCloseTo(-1.09361);
    // });
  });

  describe("centimeter", () => {
    it("should convert cm to other units correctly", () => {
      const result = lengthFunctions.centimerterTo(1);

      expect(result.kilometer).toBe(0.00001);
      expect(result.meter).toBe(0.01);
      expect(result.decimeter).toBe(0.1);
      expect(result.millimeter).toBe(10);

      expect(result.decameter).toBeCloseTo(0.001);
      expect(result.nanometer).toBeCloseTo(10000000);
      expect(result.micron).toBeCloseTo(10000);
      expect(result.hectometer).toBeCloseTo(0.0001);

      expect(result.mile).toBeCloseTo(0.00000621371192237);
      expect(result.inch).toBeCloseTo(0.393700787402);
      expect(result.feet).toBeCloseTo(0.0328083989501);
      expect(result.yard).toBeCloseTo(0.0109361329834);
    });

    // it("should handle negative input", () => {
    //   const result = lengthFunctions.meterTo(-1);
    //   console.log(result.yard);
    //   // expect(result.kilometer).toBe(-0.001);
    //   // expect(result.centimeter).toBe(-100);
    //   // expect(result.decimeter).toBe(-10);
    //   // expect(result.millimeter).toBe(-1000);
    //   // expect(result.mile).toBeCloseTo(-0.000621371);
    //   // expect(result.inch).toBeCloseTo(-39.3701);
    //   // expect(result.feet).toBeCloseTo(-3.28084);
    //   // expect(result.yard).toBeCloseTo(-1.09361329834);
    // });
  });

  describe("decimeter", () => {
    it("should convert dcm to other units correctly", () => {
      const result = lengthFunctions.decimeterTo(1);

      expect(result.kilometer).toBe(0.0001);
      expect(result.meter).toBe(0.1);
      expect(result.centimeter).toBe(10);
      expect(result.millimeter).toBe(100);

      expect(result.decameter).toBeCloseTo(0.01);
      expect(result.nanometer).toBeCloseTo(100000000);
      expect(result.micron).toBeCloseTo(100000);
      expect(result.hectometer).toBeCloseTo(0.001);

      expect(result.mile).toBeCloseTo(0.0000621371192237);
      expect(result.inch).toBeCloseTo(3.93700787402);
      expect(result.feet).toBeCloseTo(0.328083989501);
      expect(result.yard).toBeCloseTo(0.109361329834);
    });
  });

  describe("milimeter", () => {
    it("should convert mm to other units correctly", () => {
      const result = lengthFunctions.milimeterTo(1);

      expect(result.kilometer).toBe(0.000001);
      expect(result.meter).toBe(0.001);
      expect(result.centimeter).toBe(0.1);
      expect(result.decimeter).toBe(0.01);

      expect(result.decameter).toBeCloseTo(0.0001);
      expect(result.nanometer).toBeCloseTo(1000000);
      expect(result.micron).toBeCloseTo(1000);
      expect(result.hectometer).toBeCloseTo(0.00001);

      expect(result.mile).toBeCloseTo(6.21371192237e-7);
      expect(result.inch).toBeCloseTo(0.0393700787402);
      expect(result.feet).toBeCloseTo(0.00328083989501);
      expect(result.yard).toBeCloseTo(0.00109361329834);
    });
  });

  describe("decameter", () => {
    it("should convert decameter to other units correctly", () => {
      const result = lengthFunctions.decameterTo(1);

      expect(result.kilometer).toBe(0.01);
      expect(result.meter).toBe(10);
      expect(result.centimeter).toBe(1000);
      expect(result.decimeter).toBe(100);

      expect(result.millimeter).toBeCloseTo(10000);
      expect(result.nanometer).toBeCloseTo(10000000000);
      expect(result.micron).toBeCloseTo(10000000);
      expect(result.hectometer).toBeCloseTo(0.1);

      expect(result.mile).toBeCloseTo(0.00621371192237);
      expect(result.inch).toBeCloseTo(393.700787402);
      expect(result.feet).toBeCloseTo(32.8083989501);
      expect(result.yard).toBeCloseTo(10.9361329834);
    });
  });

  describe("nanometer", () => {
    it("should convert nanometer to other units correctly", () => {
      const result = lengthFunctions.nanometerTo(1);

      expect(result.kilometer).toBe(1e-12);
      expect(result.meter).toBe(1e-9);
      expect(result.centimeter).toBe(1e-7);
      expect(result.decimeter).toBe(1e-8);
      expect(result.millimeter).toBeCloseTo(0.000001);

      expect(result.decameter).toBeCloseTo(1e-10);
      expect(result.micron).toBeCloseTo(0.001);
      expect(result.hectometer).toBeCloseTo(1e-11);

      expect(result.mile).toBeCloseTo(6.21371192237e-13);
      expect(result.inch).toBeCloseTo(3.93700787402e-8);
      expect(result.feet).toBeCloseTo(3.28083989501e-9);
      expect(result.yard).toBeCloseTo(1.09361329834e-9);
    });
  });

  describe("micron", () => {
    it("should convert micron to other units correctly", () => {
      const result = lengthFunctions.micronTo(1);

      expect(result.kilometer).toBe(1e-9);
      expect(result.meter).toBe(0.000001);
      expect(result.centimeter).toBe(0.0001);
      expect(result.decimeter).toBe(0.00001);
      expect(result.millimeter).toBeCloseTo(0.001);

      expect(result.decameter).toBeCloseTo(1e-7);
      expect(result.nanometer).toBeCloseTo(1000);
      expect(result.hectometer).toBeCloseTo(1e-8);

      expect(result.mile).toBeCloseTo(6.21371192237e-10);
      expect(result.inch).toBeCloseTo(0.0000393700787402);
      expect(result.feet).toBeCloseTo(0.00000328083989501);
      expect(result.yard).toBeCloseTo(0.00000109361329834);
    });
  });

  describe("hectometer", () => {
    it("should convert hectometer to other units correctly", () => {
      const result = lengthFunctions.hectometerTo(1);

      expect(result.kilometer).toBe(0.1);
      expect(result.meter).toBe(100);
      expect(result.centimeter).toBe(10000);
      expect(result.decimeter).toBe(1000);
      expect(result.millimeter).toBeCloseTo(100000);

      expect(result.decameter).toBeCloseTo(10);
      expect(result.nanometer).toBeCloseTo(100000000000);
      expect(result.micron).toBeCloseTo(100000000);

      expect(result.mile).toBeCloseTo(0.0621371192237);
      expect(result.inch).toBeCloseTo(3937.00787402);
      expect(result.feet).toBeCloseTo(328.083989501);
      expect(result.yard).toBeCloseTo(109.361329834);
    });
  });

  describe("mile", () => {
    it("should convert mile to other units correctly", () => {
      const result = lengthFunctions.mileTo(1);

      expect(result.kilometer).toBe(1.609344);
      expect(result.meter).toBe(1609.344);
      expect(result.centimeter).toBe(160934.4);
      expect(result.decimeter).toBe(16093.44);
      expect(result.millimeter).toBeCloseTo(1609344);

      expect(result.decameter).toBeCloseTo(160.9344);
      expect(result.nanometer).toBeCloseTo(1609344000000);
      expect(result.micron).toBeCloseTo(1609344000);
      expect(result.hectometer).toBeCloseTo(16.09344);

      expect(result.inch).toBeCloseTo(63360);
      expect(result.feet).toBeCloseTo(5280);
      expect(result.yard).toBeCloseTo(1760);
    });
  });

  describe("inch", () => {
    it("should convert inch to other units correctly", () => {
      const result = lengthFunctions.inchTo(1);

      expect(result.kilometer).toBe(0.0000254);
      expect(result.meter).toBe(0.0254);
      expect(result.centimeter).toBe(2.54);
      expect(result.decimeter).toBe(0.254);
      expect(result.millimeter).toBeCloseTo(25.4);

      expect(result.decameter).toBeCloseTo(0.00254);
      expect(result.nanometer).toBeCloseTo(25400000);
      expect(result.micron).toBeCloseTo(25400);
      expect(result.hectometer).toBeCloseTo(0.000254);

      expect(result.mile).toBeCloseTo(0.0000157828282828);
      expect(result.feet).toBeCloseTo(0.0833333333333);
      expect(result.yard).toBeCloseTo(0.0277777777778);
    });
  });

  describe("feet", () => {
    it("should convert feet to other units correctly", () => {
      const result = lengthFunctions.feetTo(1);

      expect(result.kilometer).toBe(0.0003048);
      expect(result.meter).toBe(0.3048);
      expect(result.centimeter).toBe(30.48);
      expect(result.decimeter).toBe(3.048);
      expect(result.millimeter).toBeCloseTo(304.8);

      expect(result.decameter).toBeCloseTo(0.03048);
      expect(result.nanometer).toBeCloseTo(304800000);
      expect(result.micron).toBeCloseTo(304800);
      expect(result.hectometer).toBeCloseTo(0.003048);

      expect(result.mile).toBeCloseTo(0.000189393939394);
      expect(result.inch).toBeCloseTo(12);
      expect(result.yard).toBeCloseTo(0.333333333333);
    });
  });

  describe("yard", () => {
    it("should convert yard to other units correctly", () => {
      const result = lengthFunctions.yardTo(1);

      expect(result.kilometer).toBe(0.0009144);
      expect(result.meter).toBe(0.9144);
      expect(result.centimeter).toBe(91.44);
      expect(result.decimeter).toBe(9.144);
      expect(result.millimeter).toBeCloseTo(914.4);

      expect(result.decameter).toBeCloseTo(0.09144);
      expect(result.nanometer).toBeCloseTo(914400000);
      expect(result.micron).toBeCloseTo(914400);
      expect(result.hectometer).toBeCloseTo(0.009144);

      expect(result.mile).toBeCloseTo(0.000568181818182);
      expect(result.feet).toBeCloseTo(3);
      expect(result.inch).toBeCloseTo(36);
    });
  });
});
