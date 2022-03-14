const header = document.getElementById("header-container");
header.style.backgroundColor = "rgb(81, 177, 105)";

const emergencyTasks = document.getElementsByClassName("emergency-tasks")[0];
emergencyTasks.style.backgroundColor = "rgb(239, 158, 132)";

const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTasksHeaders.length; index += 1) {
  emergencyTasksHeaders[index].style.backgroundColor = 'rgb(165, 0, 243)';
}

const noEmergencyTasks = document.getElementsByClassName("no-emergency-tasks")[0];
noEmergencyTasks.style.backgroundColor = "rgb(247, 219, 95)";

const noEmergencyTasksHeader = document.querySelectorAll('.no-emergency-tasks h3');
for(let index = 0; index < noEmergencyTasksHeader.length; index += 1){
noEmergencyTasksHeader[index].style.backgroundColor = 'rgb(35, 37, 37)';
}