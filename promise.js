const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('fatto');
    }, 1000);

    setTimeout(() => {
        //reject('fallito');
    }, 500);
});

myPromise.then(res,rej);

myPromise.catch(rej)

console.log(myPromise)

function res(){
    console.log(myPromise);
}

function rej(){
    console.log(myPromise);
}