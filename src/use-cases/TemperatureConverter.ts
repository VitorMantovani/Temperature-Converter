export enum Scales {
    fahrenheit = "fahrenheit",
    celsius = "celsius",
    kelvin = "kelvin"
}

type DataToConvert = {
  temperature: number;
  scale: Scales;
  scaleToConvert: Scales;
};

export class TemperatureConverter {
  static execute({
    temperature,
    scale,
    scaleToConvert,
  }: DataToConvert): Record<string, number> {
    
    if(scale === scaleToConvert) {
        throw new Error("You're trying to convert the same scale!")
    }

    const concatedScales: string = `${scale}To${scaleToConvert}`;

    const convertedTemperatures: Record<string, number> = {
        celsiusTofahrenheit: temperature * 1.8 + 32,
        fahrenheitTocelsius: (temperature - 32) / 1.8,
        celsiusTokelvin: temperature + 273.15,
        kelvinTocelsius: temperature - 273.15,
        fahrenheitTokelvin: Number(((temperature - 32) * 5/9 + 273.15).toFixed(3)),
        kelvinTofahrenheit: Number(((temperature - 273.15) * 9/5  + 32).toFixed(3))
    }
    
    const convertedTemperature: number = convertedTemperatures[concatedScales];

    return { [scale]: temperature, [scaleToConvert]: convertedTemperature }
  }
}

/*

O QUE FALTA?

- Validação da mesma escala
- Refatorar Ifs
- 

*/