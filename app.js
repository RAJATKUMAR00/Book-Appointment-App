// localStorage Problem code....

// var name = document.getElementById('name');
// var email = document.getElementById('email');
// var password = document.getElementById('password');

window.addEventListener('DOMContentLoaded', () => {
    const localStorageObj = localStorage;
    const localStoragekeys = Object.keys(localStorageObj);
    
    for(var i=0; i<localStoragwkeys.length; i++) {
        const key = localStoragwkeys[i]
        const userDetailsString = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsString);
        showNewUserOnScreen(userDetailsObj)
    }
    
})

function showNewUserOnScreen(user) {
    if(localStorage.getItem(user.email) !== null) {
        removeUserFromScreen(user.email)
    }
    const parentNode = document.getElementById('listofUsers');
    // const childNode = '<li id=${user.email}> 
    //                   ${user.name} 
    //                   <button onclick="deleteUser('${user}')'


    parentNode.innerHTML = parentNode.innerHTML + childHTML;                    
}

// deleteUser (abc@gmail.com) //

function deleteUser(email) {
    localStorage.removeItem(email);
    removeUserFromScreen(email);
}

function removeUserFromScreen(email) {
    const parentNode = document.getElementById('listofUsers');
    const childNodeToBeDeleted = document.getElementById('email');
    if(childNodeToBeDeleted){
        parentNode.removeChild(childNodeToBeDeleted)
    }
   
}        