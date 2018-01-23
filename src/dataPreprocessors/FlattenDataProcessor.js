/**
 * @author mokuteno / https://github.com/manymeeting
 */

import { AbstractDataProcessor } from "../dataPreprocessors/AbstractDataProcessor.js";
import { Utils } from "../utils/Utils.js";

/**
 * This data processor flattens input data so that even a small number can be properly displayed on the screen.
 */

function FlattenDataProcessor () {}

FlattenDataProcessor.prototype = new AbstractDataProcessor();

FlattenDataProcessor.prototype.constructor = FlattenDataProcessor;

FlattenDataProcessor.prototype.processDetail = function ( controller ) {

    var inputData = controller.inputData;

    Utils.flattenCountryData(inputData, controller.inputValueKey, controller.configure.minDataValue, controller.configure.maxDataValue);
    
};

export { FlattenDataProcessor }

