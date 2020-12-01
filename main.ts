while (true) {
    console.log("temperature: " + input.temperature(TemperatureUnit.Fahrenheit))
    if (input.temperature(TemperatureUnit.Fahrenheit) > 113) {
        light.setAll(light.rgb(225, 0, 0))
    } else if (input.temperature(TemperatureUnit.Fahrenheit) > 94) {
        light.setAll(light.rgb(0, 225, 0))
    } else {
        light.setAll(light.rgb(0, 0, 225))
    }
    
}
