"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePhysicalProduct = calculatePhysicalProduct;
function calculatePhysicalProduct(product, selectionCount, quantity) {
    let price;
    if (product.options.usePriceScale) {
        const totalProductCount = selectionCount * quantity;
        price = (totalProductCount <= product.options.priceScale.length ?
            product.options.priceScale.slice(0, totalProductCount) :
            product.options.priceScale.concat(Array(totalProductCount - product.options.priceScale.length)
                .fill(product.options.priceScale.slice(-1)[0]))).reduce((sum, slidePrice) => sum + Number(slidePrice), 0);
    }
    else {
        price = (product.price * selectionCount * quantity);
    }
    return price;
}
//# sourceMappingURL=cart_item_price_calculators.js.map