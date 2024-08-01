import { ForceFunctions } from "../../utils/functions/force.functions";
import { describe, expect, it } from "vitest";

const forceFunctions = new ForceFunctions();

describe("Force Functions", () => {
  it("Newton (N)", () => {
    const result = forceFunctions.newtonTo(1);
    expect(result.newton).toBe(1);
    expect(result.kilogramForce).toBe(0.101971621298);
    expect(result.kip).toBe(0.000224808923655);
    expect(result.libreForce).toBe(2.20462247604);
    expect(result.poundal).toBe(7.23301146432);
  });

  it("Kilogram-Force (kgf)", () => {
    const result = forceFunctions.kgfTo(1);
    expect(result.newton).toBe(9.80665);
    expect(result.kilogramForce).toBe(1);
    expect(result.kip).toBe(0.00220462243116);
    expect(result.libreForce).toBe(21.6199610046);
    expect(result.poundal).toBe(70.9316118766);
  });

  it("kip (k)", () => {
    const result = forceFunctions.kipTo(1);
    expect(result.newton).toBe(4448.222);
    expect(result.kilogramForce).toBe(453.592409233);
    expect(result.kip).toBe(1);
    expect(result.libreForce).toBe(9806.65019961);
    expect(result.poundal).toBe(32174.0407219);
  });

  it("Libre-Force (lbf)", () => {
    const result = forceFunctions.lbfTo(1);
    expect(result.newton).toBe(0.4535924);
    expect(result.kilogramForce).toBe(0.0462535524364);
    expect(result.kip).toBe(0.000101971619222);
    expect(result.libreForce).toBe(1);
    expect(result.poundal).toBe(3.28083902933);
  });

  it("poundal (pdl)", () => {
    const result = forceFunctions.pdlTo(1);
    expect(result.newton).toBe(0.138255);
    expect(result.kilogramForce).toBe(0.0140980865025);
    expect(result.kip).toBe(0.00003108095774);
    expect(result.libreForce).toBe(0.304800080425);
    expect(result.poundal).toBe(1);
  });
});
