function getRandomChinese(length){
    return new Promise(function(resolve, reject){
        while(length > 0){
            const sign = parseInt(Date.now() % 100000);
            let chinese = '';
            console.log(sign);
            chinese += String.fromCharCode(sign);
            console.log(chinese);
            setTimeout(null, 50);
            length--;
        }
    })
}
getRandomChinese(4);