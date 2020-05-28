//Get objects
const signupLink = document.getElementById("signup-link");
const signupModal = document.getElementById("modal-signup");
const loginLink = document.getElementById("login-link");
const loginModal = document.getElementById("modal-login");
const addGameLink = document.getElementById("addGame-link");
const addGameModal = document.getElementById("modal-addGame");
const gamelist = document.querySelector('.gameList');


//Post data
const setupGame =(data) => {
    
    let html ='';
    data.forEach(doc =>{
        
        const newgame = document.createElement('div')
        const game = doc.data();
        var gameImage;
        console.log(game.gameBio)
        platformIcon(game.gamePlatform);
        const div = `
        <div class="game">
       <h1 id="title">${game.gameName}</h1>
       <img id="gameImg"width="300px" height="200px" src=${game.gameUrl}>
       <textarea id="gameBio">${game.gameBio}</textarea>
       <img id="platform" width="55px" height=40px src=${platformImg}>
       <p id="gamePrice">¥${game.gamePrice}</p>
       <button id="removeGame" type="submit">Remove</button>
        </div>
        `;
        newgame.innerHTML = div;
        gamelist.appendChild(newgame);
        return gameImage = "https://1000logos.net/wp-content/uploads/2017/07/N64-Logo.png"
       
    });
    
    /*Set Data*/


}

const platformIcon = (platform)=>{
    switch(platform.toLowerCase()){
        case "n64":
            platformImg = "https://1000logos.net/wp-content/uploads/2017/07/N64-Logo.png"
            
            break;
        case "360":
            platformImg = "https://cdn.worldvectorlogo.com/logos/xbox-360.svg"
            
            break;
    }
        
}

const uploadImg = ()=>{
const imgLink = document.getElementById("imgUrl").value;
const img = document.getElementById('game-img');
img.setAttribute('src', imgLink)

}


//Sign Up
signupLink.onclick = function (){
    signupModal.style.display = "block";
}

//Login
loginLink.onclick = function (){
    loginModal.style.display = "block";
}

//Add Game
addGameLink.onclick= function (){
addGameModal.style.display = "block";
}

//Click outside box
window.onclick = function (event) {
    if(event.target == signupModal){
        signupModal.style.display = "none";
    } else if (event.target == loginModal){
        loginModal.style.display = "none";
    } else if (event.target == addGameModal){
        addGameModal.style.display ="none";
    }
}

loginModal.querySelector('.exit').addEventListener('click',(e)=>{
    loginModal.style = "none";
})

signupModal.querySelector('.exit').addEventListener('click',(e)=>{
    signupModal.style = "none";
})

addGameModal.querySelector('.exit').addEventListener('click',(e)=>{
    addGameModal.style ="none";
})