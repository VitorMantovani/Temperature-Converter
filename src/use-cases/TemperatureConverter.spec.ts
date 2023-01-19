import { TemperatureConverter } from "./TemperatureConverter";

describe("Temperature converter", () => {
  it("should be able to convert temperature in celcius to fahrenheit", () => {
    const convertedTemperature = TemperatureConverter.execute({
      temperature: 100,
      scale: "celsius",
      scaleToConvert: "fahrenheit",
    });

    expect(convertedTemperature).toEqual(expect.objectContaining({ "celsius": 100, "fahrenheit": 212 }))
  });
});
