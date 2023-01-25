import './App.css';

function App() {

  let getLink = () => {
    
    fetch('https://kakis123-eiddpp.5sc6y6-2.usa-e2.cloudhub.io/getRandomCar')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      
    })
  }

  
  

}

export default App;