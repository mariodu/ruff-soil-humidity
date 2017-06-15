# YL-69 Driver

土壤湿度检测模块驱动，ADC 版本

## Device Model

- [YL-69](https://rap.ruff.io/devices/yl-69)

## Install

```sh
> rap device add --model yl-69 --id <device-id> 
```

## Demo

Supposed \<device-id\> is `xxx` in the following demos.

```js
$('#xxx').getSoilHumidity(function(error, humidity) {});
```

## API References

### Methods

#### `getSoilHumidity()`

Get humidity.

## Supported OS

Test passed on Ruff v1.6.0 and Ruff Lite v0.6.0

## Note

Only for adc version.