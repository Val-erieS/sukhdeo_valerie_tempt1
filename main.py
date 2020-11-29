while True:
    print("temperature: " + input.temperature(TemperatureUnit.FAHRENHEIT))
    if input.temperature(TemperatureUnit.FAHRENHEIT) > 112:
        light.set_all (light.rgb(225, 0, 0))
    elif input.temperature(TemperatureUnit.FAHRENHEIT) > 94:
        light.set_all (light.rgb(0, 225, 0))
    else: 
        light.set_all (light.rgb(0, 0, 225))    