let navb = document.querySelector('.navb');
document.querySelector('#menu-btn').onclick = ()=>
{
    navb.classList.toggle('active');
}

window.onscroll = ()=>
{
    navb.classList.remove('active');
}
