  
  
  let trainingKey = localStorage.getItem('training_key');
  document.getElementById("training-image").src =  'assets' + '/img/' + trainingKey  + '.png';
 
  retrieveData(trainingKey);

  
  // Sending AJAX request to data

  async function retrieveData(trainingChar) {

    let fullPath = "formations/" + trainingChar + '.json';

    const response = await fetch(fullPath);
    await response.json()
    .then(data => {
      getTags(data);
    }).catch(error => console.error("Zut! Error happens", error));
  }



// Passing data to the HTML view

function getTags(data){

  const keysArray = [];
  const dataAttributesArray = document.querySelectorAll('[data-training-content]');

  for (let attribute of dataAttributesArray){

    keysArray.push(attribute.dataset.trainingContent);

  }

  let get_key = '';
  let selected_element = '';

  for (let item in data){

    get_key = keysArray.find(element => item === element);
    if (get_key != null)  selected_element = "[data-training-content='" + get_key + "']";
    document.querySelector(selected_element).innerHTML = data[item];

  }
}

