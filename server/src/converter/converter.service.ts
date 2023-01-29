import { Injectable } from '@nestjs/common';

import { DataDto } from './dto/data.dto';
import { largeNumbersConvert } from 'src/helpers/largeNumbersConvert';

@Injectable()
export class ConverterService {
  async convert(reqObj: DataDto) {
    const resObj: DataDto = {
      cubicM: null,
      thousandCubicM: null,
      millionCubicM: null,
      billionCubicM: null,
      changeableParameter: '',
    };

    if (reqObj.changeableParameter === '') {
      return reqObj;
    }

    for (const prop in reqObj) {
      if (prop === reqObj.changeableParameter) {
        //changeableParameter
        resObj[prop] = largeNumbersConvert(reqObj[prop]);

        switch (prop) {
          case 'cubicM':
            resObj.thousandCubicM = largeNumbersConvert(reqObj[prop] / 1000);
            resObj.millionCubicM = largeNumbersConvert(reqObj[prop] / 1000000);
            resObj.billionCubicM = largeNumbersConvert(
              reqObj[prop] / 1000000000,
            );
            break;
          case 'thousandCubicM':
            resObj.cubicM = largeNumbersConvert(reqObj[prop] * 1000);
            resObj.millionCubicM = largeNumbersConvert(reqObj[prop] / 1000);
            resObj.billionCubicM = largeNumbersConvert(reqObj[prop] / 1000000);
            break;
          case 'millionCubicM':
            resObj.cubicM = largeNumbersConvert(reqObj[prop] * 1000000);
            resObj.thousandCubicM = largeNumbersConvert(reqObj[prop] * 1000);
            resObj.billionCubicM = largeNumbersConvert(reqObj[prop] / 1000);
            break;
          case 'billionCubicM':
            resObj.cubicM = largeNumbersConvert(reqObj[prop] * 1000000000);
            resObj.thousandCubicM = largeNumbersConvert(reqObj[prop] * 1000000);
            resObj.millionCubicM = largeNumbersConvert(reqObj[prop] * 1000);
            break;
        }
      }
    }

    return resObj;
  }
}
