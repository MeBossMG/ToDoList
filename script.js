function addToDo(){
    var value = document.getElementById('value').value;
    var error=document.getElementById('error');
    if(value == ''){
        error.style.visibility = 'visible';
    }
    else{
        error.style.visibility = 'hidden';
        document.getElementById('tasks').innerHTML += `
        <div id='task'>
            <p>${value} </p>
            <button class='del'>Del</button>
        </div>
    `;
    var listlength = document.querySelectorAll(".del");
    console.log(listlength);
    for(var i = 0; i < listlength.length; i++){
        console.log(listlength);
        listlength[i].onclick = function(){
            this.parentNode.remove();
        }
    }
    }
}
