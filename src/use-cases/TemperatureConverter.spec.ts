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

  it("should be able to convert temperature in farenheit to celsius", () => {
    const convertedTemperature = TemperatureConverter.execute({
      temperature: 212,
      scale: "farenheit",
      scaleToConvert: "celsius",
    });

    expect(convertedTemperature).toEqual(expect.objectContaining({ "fahrenheit": 212, "celsius": 100 }))
  });
});
