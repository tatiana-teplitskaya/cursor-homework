let applePrice = 15.678;
let pearPrice = 123.965;
let blackberryPrice = 90.2345;

let maxPrice = Math.max(applePrice, pearPrice, blackberryPrice);

let minPrice = Math.min(applePrice, pearPrice, blackberryPrice);

let sumOfPrices = applePrice + pearPrice + blackberryPrice;

let sumOfRoundedPrices = Math.floor(applePrice) + Math.floor(pearPrice) + Math.floor(blackberryPrice);
let roundedSum = Math.round(sumOfRoundedPrices / 100) * 100;

let isEven;
if(sumOfRoundedPrices % 2 == 0){
    isEven = true;
}
else isEven = false;

let change = 500 - sumOfPrices;

let roundedAverage = ((applePrice + pearPrice + blackberryPrice) / 3).toFixed(2);

let discount = Math.random();
let sumWithDiscount = (sumOfPrices - sumOfPrices * discount).toFixed(2);

let income = (sumOfPrices / 2) - sumOfPrices * discount;

let template = `Максимальна ціна: ${maxPrice}
Мінімальна ціна: ${minPrice}
Вартість всіх товарів: ${sumOfPrices}
Вартість товарів округлена до сотень: ${roundedSum}
Чи є сума всіх товарів парним числом? ${isEven}
Сума решти, якщо клієнт платить 500 грн: ${change}
Cереднє значення цін, округлене до другого знаку після коми: ${roundedAverage}
Знижка: ${discount}
Сума до сплати: ${sumWithDiscount}
Чистий прибуток: ${income}`;
console.log(template);
