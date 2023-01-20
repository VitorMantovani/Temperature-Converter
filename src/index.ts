import { Scales, TemperatureConverter } from "./use-cases/TemperatureConverter";

const temperature = TemperatureConverter.execute({temperature: 293.15, scale: Scales.kelvin, scaleToConvert: Scales.celsius})

console.log(temperature);