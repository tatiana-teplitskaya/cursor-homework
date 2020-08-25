function getRandomChinese(length){
    let chinese = '';
    return new Promise(function(resolve){
        const intervalID = setInterval(function(){
            const sign = parseInt(Date.now() % 100000);
            chinese += String.fromCharCode(sign);
            if(length == 1){
                clearInterval(intervalID);
                resolve(chinese);
            }
            length--;
        }, 50)    
    });
        
}
    
getRandomChinese(4).then(result => console.log(result));