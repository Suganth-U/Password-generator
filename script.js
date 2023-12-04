const outputElement=document.querySelector('#output');
const btncopy=document.querySelector('#btn-copy');
const passwordLengthElement=document.querySelector('#length');
const numberElement=document.querySelector('#number');
const capitalElement=document.querySelector('#capital');
const smallElement=document.querySelector('#small');
const symbolElement=document.querySelector('#symbol');
const form=document.querySelector('#frm');


btncopy.addEventListener('click',async()=>{
    const pass=outputElement.value;
    if(pass){
        await navigator.clipboard.writeText(pass);
        alert("Copied to clipboard")
    }else{
        alert("There is no password to copy")
    }
})

function genaraterandomchar(min,max){
    const n=max-min+1;
    return String.fromCharCode(Math.floor(Math.random()*n)+min)
}

    function capitalvalue(){
     return  genaraterandomchar(65,90);
    }
    function smallvalue(){
    return  genaraterandomchar(97,122);
    }
    function numbervalue(){
    return  genaraterandomchar(48,57);
    }
    function symbolvalue(){
    const symbols="#~?/|\!:@%^&*(){}[]+-<>,."
    return symbols[Math.floor(Math.random()*symbols.length)];
    }


const functionArray=[
    {
        Element:capitalElement,
        function:capitalvalue
    },
    {
        Element:smallElement,
        function:smallvalue
    },
    {   Element:numberElement,
        function:numbervalue
    },
    {
        Element:symbolElement,
        function:symbolvalue
    }
];


form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const len=passwordLengthElement.value;


    let genaratedpassword="";

    const funarray=functionArray.filter(({Element})=>Element.checked);


    for(i=0;i<len;i++){
        const index=Math.floor(Math.random()*funarray.length);
        const letter=funarray[index].function();
        genaratedpassword+=letter;
    }
    outputElement.value=genaratedpassword;
})



