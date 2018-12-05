import { PRODUCT_TEMP } from './types';

export function saveProductTemp(product){

    return {
        type:PRODUCT_TEMP,
        payload:product
    }
}
