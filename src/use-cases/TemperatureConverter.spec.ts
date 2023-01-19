import { Scales, TemperatureConverter } from "./TemperatureConverter";

describe("Temperature converter", () => {
  it("should be able to convert temperature in celsius to fahrenheit", () => {
    const convertedTemperature = TemperatureConverter.execute({
      temperature: 100,
      scale: Scales.celsius,
      scaleToConvert: Scales.fahrenheit,
    });

    expect(convertedTemperature).toEqual(expect.objectContaining({ "celsius": 100, "fahrenheit": 212 }))
  });

  it("should be able to convert temperature in farenheit to celsius", () => {
    const convertedTemperature = TemperatureConverter.execute({
      temperature: 212,
      scale: Scales.fahrenheit,
      scaleToConvert: Scales.celsius,
    });

    expect(convertedTemperature).toEqual(expect.objectContaining({ "fahrenheit": 212, "celsius": 100 }))
  });

  it("should be able to convert temperature in celsius to kelvin", () => {
    const convertedTemperature = TemperatureConverter.execute({
      temperature: 100,
      scale: Scales.celsius,
      scaleToConvert: Scales.kelvin,
    });

    expect(convertedTemperature).toEqual(expect.objectContaining({ "celsius": 100, "kelvin": 373.15 }))
  });

  it("should be able to convert temperature in kelvin to celsius", () => {
    const convertedTemperature = TemperatureConverter.execute({
      temperature: 373.15,
      scale: Scales.kelvin,
      scaleToConvert: Scales.celsius,
    });

    expect(convertedTemperature).toEqual(expect.objectContaining({ "kelvin": 373.15, "celsius": 100 }))
  });

  it("should be able to convert temperature in fahrenheit to kelvin", () => {
    const convertedTemperature = TemperatureConverter.execute({
      temperature: 100,
      scale: Scales.fahrenheit,
      scaleToConvert: Scales.kelvin,
    });

    expect(convertedTemperature).toEqual(expect.objectContaining({ "fahrenheit": 100, "kelvin": 310.928 }))
  });

  it("should be able to convert temperature in kelvin to fahrenheit", () => {
    const convertedTemperature = TemperatureConverter.execute({
      temperature: 310.928,
      scale: Scales.kelvin,
      scaleToConvert: Scales.fahrenheit,
    });

    expect(convertedTemperature).toEqual(expect.objectContaining({ "kelvin": 310.928, "fahrenheit": 100 }))
  });

  it("should return an error if equals scales are passed", () => {
    expect(() => TemperatureConverter.execute({
      temperature: 310.928,
      scale: Scales.kelvin,
      scaleToConvert: Scales.kelvin,
    })).toThrowError("You're trying to convert the same scale!")
  })
});
