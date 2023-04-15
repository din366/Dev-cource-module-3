const task1 = () => {
  const array = ['module.jsx', 'index.html', 'style.css', 'index.js', 'file.ts', 'library.css', 'my.plugin.js'];
  const returnedArray = [];

  for (let item of array) {
    const regExp = /.\.(js|jsx|ts)/i;
    const returnedItem = regExp.test(item);
    returnedItem === true ? returnedArray.push(item) : null;
  }
  return returnedArray;
};
console.log(task1());

/* ------------------------ */

const task2 = () => {
  const array = ['info@methed.ru', 'max24@mail.com', 'java_script@google.io', 'my-mail@yandex.ru', 'tom_yam@ya.ru', 'zero@mai1.xyz'];
  const returnedArray = [];

  for (let item of array) {
    const regExp = /(\w+@([a-zA-Z_]+){3,}?\.[a-zA-Z]{2,5})/;
    const returnedItem = regExp.test(item);
    returnedItem === true ? returnedArray.push(item) : null;
  }
  return returnedArray;
}
console.log(task2());

/* ------------------------ */

const task3 = () => {
  const str = 'Здоровый (праздничный) ужин вовсе не обязательно должен состоять из шпината, гречки и вареной куриной грудки. Самыми лучшими способами приготовления еды (по мнению моей мамы) являются следующие: варка на пару, запекание или варка в воде. Помимо стандартных мандаринов и ананасов, отличным украшением любого стола станут необычные, экзотические фрукты(например: личи, рамбутан, тамаринд). Здоровой может быть даже выпечка, если она приготовлена на пару.';

  const regExp = /\(.+?\)+?/g
  return str.match(regExp);
}
console.log(task3());

/* ------------------------ */

const task4 = (str) => {
  const regExpText = /(http:\/\/|https:\/\/)\w+\.(ru|com)/g; // regExp for text
  const regExpLink = /\w+\.(ru|com)/g; // regExp for link

  const matchingLink = str.match(regExpText); // matching href link
  const matchingText = str.match(regExpLink); // matching href text

  str = str.replace(regExpText, '*'); // replace to "*" for cycle

  for (i=0; i< matchingLink.length; i++) {
    str = str.replace('*', `<a href="${matchingLink[i]}">${matchingText[i]}</a>`);
  }
  return str;
}
console.log(task4('Тестовый сайт http://site.ru и его альтернатива https://site.com'))

