/* 
    Dado el siguiente array, muestra por consola
    la suma de premios de los jugadores de uruguay
*/

const players = [
    {name: 'Cristiano Ronaldo', country: 'Portugal', goldenBall: 5 , goldenBoot: 6},
    {name: 'Lionel Messi', country: 'Argentina', goldenBall: 7, goldenBoot: 4},
    {name: 'Luis Suárez', country: 'Uruguay', goldenBall : 0, goldenBoot: 2},
    {name: 'Diego Forlan', country: 'Uruguay', goldenBall :0 , goldenBoot: 2},
    {name: 'Thierry Henry', country: 'Francia', goldenBall : 0, goldenBoot: 2},
]


let playersUruguay = players.filter(players => players.country === 'Uruguay');
let scorePlayersUruguay = playersUruguay.map(playersUruguay => playersUruguay.goldenBall + playersUruguay.goldenBoot);
let totalScore = scorePlayersUruguay.reduce((acc,golden) => acc + golden);

console.log(playersUruguay);
console.log(scorePlayersUruguay);
console.log(totalScore);


/* 
    Dado el siguiente array:

*/

/* 
    1) Muestra por consola el listado de nombres de los millonarios
    2) Muestra por consola (true/false) si está Amancio en la lista
    2) Muestra por consola un listado con el resultado de dividir su patrimonio patrimonio entre los años que tienen
    3) Muestra por consola la media de edad de los 10 billonarios de la lista forbes
    4) Muestra por consola la suma de dinero de los millonarios de EEUU que están relacionados con technología
    5) Muestra por consola el millonario más joven que no sea de EEUU
    6) Muestra por consola el millonario más mayor del top 5 de millonarios de EEUU
    7) Muestra por consola la media de edad y media de dinero de los millonarios de Google y Microsoft juntos
*/

const forbesList = [
    {name: 'Elon Musk', amount: 219, age: 50, country:'EEUU', company:'Tesla', industry: 'Automotive'},
    {name: 'Jeff Bezos', amount: 171, age: 58, country:'EEUU', company:'Amazon', industry: 'Technology'},
    {name: 'Bernard Arnault', amount: 158, age: 73, country:'France', company:'LVMH', industry: 'Fashion'},
    {name: 'Bill Gates', amount: 129, age: 66, country:'EEUU', company:'Microsoft', industry: 'Technology'},
    {name: 'Warren Buffet', amount: 118, age: 91, country:'EEUU', company:'Berkshire', industry: 'Finance'},
    {name: 'Larry Page', amount: 111, age: 49, country:'EEUU', company:'Google', industry: 'Technology'},
    {name: 'Sergey Brin', amount: 171, age: 58, country:'EEUU', company:'Google', industry: 'Technology'},
    {name: 'Larry Ellison', amount: 106, age: 77, country:'EEUU', company:'Software', industry: 'Technology'},
    {name: 'Steve Ballmer', amount: 91, age: 66, country:'EEUU', company:'Microsoft', industry: 'Technology'},
    {name: 'Mukesh Ambani', amount: 90, age: 64, country:'India', company:'Diversified', industry: 'Finance'},
]

/*1*/ 
let namesForbesList = forbesList.map(forbesList => forbesList.name)
console.log(namesForbesList);

/*2*/ 
forbesList.includes('Amancio')
console.log(forbesList.includes('Amancio'));

/*3*/ 
let resultSplit = forbesList.map(forbesList => forbesList.amount / forbesList.age)
console.log(resultSplit);

/*4*/ 
let resultAverageAge = forbesList.reduce((acc,forbes) => acc + forbes.age/10, 0);
console.log(resultAverageAge);

/*5*/ 
let forbesNotEeuu = forbesList.filter(forbesList => forbesList.country !== 'EEUU')
let youngestForbes = forbesNotEeuu.reduce(function (youngest, forbes) {return (youngest.age === undefined || youngest.age >= forbes.age) ? forbes : youngest;}) ;
console.log(youngestForbes);

/*6*/
let top5 = forbesList.sort()
top5.slice(0,5)
top5.filter(top5 => top5.country === 'EEUU')
let oldestTop5 = top5.reduce(function (oldest,top5){return(oldest.age === undefined || oldest.age <= top5.age)? top5 : oldest})
console.log(oldestTop5); 

/*7*/
let microsoftGoogle = forbesList.filter(forbesList => forbesList.company === 'Microsoft' || forbesList.company === 'Google');
let microsoftGoogleAverage = microsoftGoogle.reduce((acc,average) => acc + average.age/4, 0);
let microsoftGoogleAverageMount = microsoftGoogle.reduce((acc,average) => acc + average.amount/4, 0);
console.log(microsoftGoogleAverage);
console.log(microsoftGoogleAverageMount);
