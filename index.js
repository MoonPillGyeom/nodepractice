function Start() {
    console.log('Start');
    Work();
    End();
}

function Work() {
  setTimeout(() => {
    console.log('Work');
  }, 1000);
}

function End() {
    console.log('End');
}