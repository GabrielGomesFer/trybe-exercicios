function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function createDaysOfTheMonth(){
      let getDaysList = document.querySelector('#days');
      for(let index = 0; index<dezDaysList.length; index+=1){
          let day = dezDaysList[index];
          let dayItem = document.createElement('li');
          if(day === 24 || day === 31){
              dayItem.className = 'day holiday';
              dayItem.innerHTML = day;
              getDaysList.appendChild(dayItem);
          }else if(day === 4 || day === 11 || day === 18){
            dayItem.className = 'day friday';
            dayItem.innerHTML = day;
            getDaysList.appendChild(dayItem);
        }else if(day === 25){
            dayItem.className = 'day holiday friday';
            dayItem.innerHTML = day;
            getDaysList.appendChild(dayItem);
        }else{
            dayItem.className = 'day';
            dayItem.innerHTML = day;
            getDaysList.appendChild(dayItem);
        }
      }
  }
  createDaysOfTheMonth();
  

  function createHolidayButton(buttonName){
  let btnCont = document.querySelector('.buttons-container');
  let newBtn = document.createElement('button');
  let newBtnID = 'btn-holiday';

  newBtn.innerHTML = buttonName;
  newBtn.id = newBtnID;
  btnCont.appendChild(newBtn);
}
createHolidayButton('Feriados');

function pressHolidays(){
    let getHolidayBTN = document.getElementById('btn-holiday');
    let getHoliday = document.querySelectorAll('.holiday');
    let backgroundColor = 'rgb(238,238,238)';
    let resetColor = 'white';

    
}