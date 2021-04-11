const {hash}=window.location;

const message=atob(hash.replace('#',''));
if (message){
    document.querySelector('#message-form').classList.add('hide')
    document.querySelector('#message-show').classList.remove('hide')
    document.querySelector('h1').innerHTML=message;
}
else{
document.querySelector('form').addEventListener('submit',event=>{
    
    //prevent reload because normally a submit would run against a server instance
    event.preventDefault();

    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    const input = document.querySelector('#message-input');
    // encrpyt with base64 encodig
    const encrypted=btoa(input.value)
    console.log(input.value);
    const linkInput=document.querySelector('#link-input')
    linkInput.value=`${window.location}#${encrypted}`;
    linkInput.select();
})
}