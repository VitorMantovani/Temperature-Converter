type dataToConvert = {
  temperature: number;
  scale: string;
  scaleToConvert: string;
};

type convertedData = Record<string, number>;

export class TemperatureConverter {
  static execute({
    temperature,
    scale,
    scaleToConvert,
  }: dataToConvert) {
    if (scale === "celsius" && scaleToConvert === "fahrenheit") {
      const fahrenheitTemperature = temperature * 1.8 + 32;
      return { "celsius": temperature, "fahrenheit":  fahrenheitTemperature };
    }
  }
}
