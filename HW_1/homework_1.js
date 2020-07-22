const applePrice = 15.678;
const pearPrice = 123.965;
const blackberryPrice = 90.2345;

const maxPrice = Math.max(applePrice, pearPrice, blackberryPrice);

const minPrice = Math.min(applePrice, pearPrice, blackberryPrice);

const sumOfPrices = applePrice + pearPrice + blackberryPrice;

const sumOfRoundedPrices = Math.floor(applePrice) + Math.floor(pearPrice) + Math.floor(blackberryPrice);
const roundedSum = Math.round(sumOfRoundedPrices / 100) * 100;

let isEven;
if(sumOfRoundedPrices % 2 == 0){
    isEven = true;
}
else isEven = false;

const change = 500 - sumOfPrices;

const roundedAverage = ((applePrice + pearPrice + blackberryPrice) / 3).toFixed(2);

const discount = Math.random();
const sumWithDiscount = (sumOfPrices - sumOfPrices * discount).toFixed(2);

const income = (sumOfPrices / 2) - sumOfPrices * discount;

const template = `Максимальна ціна: ${maxPrice}
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
