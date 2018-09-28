function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input').value;
}

function addNewElementAsLi() {
  let target = document.querySelector('.employee-list');
  let li = document.createElement("li");
  li.innerText = retrieveEmployeeInformation;
  target.appendChild(li);
}
