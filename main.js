//task #0
const player1={
    name:'Scorpion',
    hp:95,
    img:'assets/scorpion.gif',
    attack: function(){
        console.log(this.name+' Fight...');
    }
}
player1.weapon='Kunai';
player1.weapon1='mech';
player1.attack();
console.log(player1);

const player2={
    name:'Sub-Ziro',
    hp:95,
    img:'assets/scorpion.gif',
    attack: function(){
        console.log(this.name+' Fight...');
    }
}
player2.weapon='clinok';
player2.weapon1='veyer';
player2.attack();
console.log(player2);

//Task #1
const $root =document.querySelector('.root');
const $arenas = document.querySelector('.arenas','.arena1');
const $chat =document.querySelector('.chat')
const $wallLeft= document.querySelector('.wall-left');
const $wallRight= document.querySelector('.wall-right');

$root.appendChild($arenas);


function createPlayer(player, name,hp, img){
const $playr = document.createElement('div');
$playr.classList.add(player);
const $progressbar =document.createElement('div');
$progressbar.classList.add('progressbar');

const $life=document.createElement('div');
$life.classList.add('life');
$life.style.width=hp+'%';

const $name=document.createElement('div');
$name.classList.add('name');
$name.innerText=name;

$progressbar.appendChild($life);
$progressbar.appendChild($name);

const $character = document.createElement('div');
$character.classList.add('character');

const $img =document.createElement('img');
$img.src =img;


$character.appendChild($img);

$playr.appendChild($progressbar);

$playr.appendChild($character);
$arenas.appendChild($playr);

}
//task2
createPlayer('player1', 'SCORPION', 50, 'assets/scorpion.gif');
createPlayer('player2', 'SUB-ZERO', 80, 'assets/subzero.gif');

