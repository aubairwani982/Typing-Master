const text=document.querySelector('#text');
const typingbox=document.querySelector('#typingbox');
const btn=document.querySelector('#btn_start');
const btn_done=document.querySelector('#btn_done');
const time_taken=document.querySelector('#time_taken');
const given_words=document.querySelector('#given_words');
const typed_words=document.querySelector('#typed_words');
const errors=document.querySelector('#errors');
const wpm=document.querySelector('#wordpm');
let textArr=[
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, architecto?',
    'SimpleText is the native text editor for the Apple classic Mac OS. SimpleText allows text editing and text formatting, fonts, and sizes. It was developed to integrate the features included in the different',
    'versions of TeachText that were created by various software development groups within Apple.',
    'This is simple text editor that can help you with editing text files. This editor mostly used by me for small text notes, write down ideas while I have a break.',
    'What Does SimpleText Mean? SimpleText is a text editor made for the classic Mac OS operating system. It replaced simpler text editor programs made in the age .'
];
let rand=Math.floor(Math.random()*textArr.length);

btn.addEventListener('click',()=>{
    text.innerHTML=textArr[rand];
    btn.style.display='none';
    btn_done.style.display='block';
})
const getTimee=()=>{
    let date=new Date()
    return date.getTime();
}
const endTimee=()=>{
    let date=new Date();
    return date.getTime(); 
}
var startTime,endTime;
typingbox.addEventListener('click',function(){
    startTime=getTimee();
    
})
var wordcounter;

btn_done.addEventListener('click',function(){
    endTime=endTimee();
    let totalTime=Math.floor((endTime-startTime)/1000);
    time_taken.innerText=totalTime+' sec';
    let word=typingbox.value;
    let orginalString=textArr[rand];
    let speed =Math.floor((wordCount(word)/totalTime)*60);
    wpm.innerText=speed+' wpm';
    checkError(orginalString,word);
    givenWordss(orginalString);
    // console.log(`speed is ${speed} in time ${totalTime}`);
})
function wordCount(word){
    return count=word.split(" ").length;    
}
function checkError(orginalString,word){
    let str1=[];
    let str2=[];    
    str1=orginalString.split(" ");
    str2=word.split(" ");
    let count=0;
    str2.forEach(function(item,index) {
        if(str2[index]==str1[index]){
            count++;
            
        }
    });
    let errorWords=(str2.length-count);
    errors.innerText=errorWords+' words';
    console.log(" erppr "+errorWords);
    typed_words.innerText=str2.length+' words';
    
}11
// wpm
function givenWordss(orginalString){
    let givenW=orginalString.split(" ").length;
    given_words.innerText=givenW+' words';
    console.log(givenW);
}