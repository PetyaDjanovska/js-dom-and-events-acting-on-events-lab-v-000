function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input').value;
}

function addNewElementAsLi(name) {
  let target = document.querySelector('.employee-list');
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(${name}));
  // target.appendChild(li);
}
