const selectWIP = document.querySelectorAll('.wip');

selectWIP.forEach(link =>{
	link.addEventListener('click',wip)
})

function wip(){
	alert('Alex is still developing this webpage, check back soon!');
}