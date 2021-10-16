const $root =document.querySelector('.root');
const $arenas = document.querySelector('.arenas');
const $chat =document.querySelector('.chat');
const $randomButton=document.querySelector('.button')

//task #0
const player1={
    player: 1,
    name:'Sonya',
    hp:100,
    img:'assets/sonya.gif',
    weapon: ['Kunai','mech'],
    attack: function(){
        console.log(this.name+' Fight...');
    }
}


const player2={
    player:2,
    name:'Sub-Ziro',
    hp:100,
    img:'assets/subzero.gif',
    weapon: ['clinok','veyer'],
    attack: function(){
        console.log(this.name+' Fight...');
    }
}


//Task #1




$root.appendChild($arenas);
$root.appendChild($chat);

function createElement(tag , className){
    const $tag= document.createElement(tag);

    if(className){
        $tag.classList.add(className);
    }
    
    return $tag;
}
function createPlayer(playerObj){

const $playr =createElement('div', 'player'+playerObj.player);
const $progressbar =createElement('div', 'progressbar');
const $life=createElement('div','life');
const $name=createElement('div','name');
const $character =createElement('div','character');
const $img =createElement('img');



$life.style.width=playerObj.hp+'%';
$name.innerText=playerObj.name;
$img.src =playerObj.img;


$progressbar.appendChild($life);
$progressbar.appendChild($name);
$character.appendChild($img);
$playr.appendChild($progressbar);
$playr.appendChild($character);
return $playr;
}

function playerLose(name){
 const $loseTitle =  createElement('div', 'loseTitle');
 $loseTitle.innerText=name+' Lose';
 return $loseTitle;
}
function playerWin(name){
 const $winTitle =  createElement('div', 'loseTitle');
 $winTitle.innerText=name+' win';
 return $winTitle;
}

function changeHp(player){
    const $playerLive= document.querySelector('.player'+player.player+' .life');
    console.log(player.hp)
    player.hp -=Math.ceil(Math.random()*20);
    $playerLive.style.width=player.hp+'%';
    
    
    
    if(player.hp<=0){
        $playerLive.style.width=0+'%';
        $arenas.appendChild(playerLose(player.name))
        $randomButton.disabled= true;
    }
    
     
    
}
$randomButton.addEventListener('click', function(){
    console.log('asdasd')
    changeHp(player1);
    changeHp(player2);
    
});

//task2
$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
