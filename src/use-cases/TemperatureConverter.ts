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

    if (scale === "farenheit" && scaleToConvert === "celsius") {
        const celsiusTemperature = (temperature - 32) / 1.8;
        return { "fahrenheit": temperature, "celsius":  celsiusTemperature };
      }

      if (scale === "celsius" && scaleToConvert === "kelvin") {
        const kelvinTemperature = temperature + 273.15;
        return { "celsius": temperature, "kelvin":  kelvinTemperature};
      }

      if (scale === "kelvin" && scaleToConvert === "celsius") {
        const celsiusTemperature = temperature - 273.15;
        return { "kelvin": temperature, "celsius":  celsiusTemperature};
      }

      if (scale === "fahrenheit" && scaleToConvert === "kelvin") {
        const kelvinTemperature =  (temperature - 32) * 5/9 + 273.15
        return { "fahrenheit": temperature, "kelvin":  Math.round(kelvinTemperature * 100) / 100};
      }
  }
}
