const money = +prompt("Ваш бюджет на месяц?", ''),
      time = prompt("Введите дату в формате YYYY-MM-DD", '');

const appData = {
    budget: money,
    timeData: time,
    expenses: { "Ответ на первый вопрос" : "Ответ на второй вопрос" },
    optionalExpenses: {},
    income: [],
    savings: false
}


for (let i = 0; i < 2; i++) {
    const a = prompt("Введите обязательную статью расходов в этом месяце", ''),
          b = prompt("Во сколько обойдется?", '');

   if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.lenght < 50) {
    console.log("Thank's!");
    appData.expenses[a] = b; 
   } else {

  }
};
 
appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay); 

if (appData.moneyPerDay < 100000) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100000 && appData.moneyPerDay < 500000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 500000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Ошибка");
}

