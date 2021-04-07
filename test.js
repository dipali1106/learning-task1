if(document.querySelector('.wplms_registration_form')){
    let registration_form_wrapper = document.querySelector('.wplms_registration_form > form'); 
    let ul = document.createElement('ul');
     ul.classList.add("registration_form_progressbar");
    for(let i=0;i<registration_form_wrapper.childElementCount;i++){
       let li = document.createElement('li');
       let span = document.createElement('span');
        span.innerText = i+1; 
        li.appendChild(span);
        ul.appendChild(li);        
    }
   registration_form_wrapper.appendChild(ul);
   registration_form_wrapper.querySelector('.registration_form').classList.add('active');

   registration_form_wrapper.querySelector('.registration_form_progressbar li').addEventListener('click',function(e){
   		e.preventDefault();
   		alert("clicked");
   		
   });
}

/*document.querySelector('#signup_form .progressbar li').onclick = function() {addActiveClass()};
function addActiveClass(){
let list_value=document.getElementById("progress_list").value;
let registration_form = document.querySelector('.wplms_registration_form >form');

 registration_form.children[list_value].appendClass("active");

};
*/
let progress_list = document.querySelector('.wplms_registration_form > form ul.progressbar li'); 
for (var i = 0; i < progress_list.length; i++) {
    progress_list[i].addEventListener("click", function(e) {
    let registration_form_wrapper = document.querySelector('.wplms_registration_form >form');
    let registration_block= registration_form_wrapper.childNodes;
    	let list_value=progress_list.value;
    	console.log(list_value);
    	for(let i=0;i<registration_form_wrapper.childElementCount;i++){

    	}


    }
}

    

if(document.querySelector('.wplms_registration_form')){
    let registration_form_wrapper = document.querySelector('.wplms_registration_form > form'); 
    let ul = document.createElement('ul');
     ul.classList.add("registration_form_progressbar");
    for(let i=0;i<registration_form_wrapper.childElementCount;i++){
       let li = document.createElement('li');
       let span = document.createElement('span');
        span.innerText = i+1; 
        li.appendChild(span);
        ul.appendChild(li);        
    }
   registration_form_wrapper.appendChild(ul);
   registration_form_wrapper.querySelector('.registration_form').classList.add('active');
   registration_form_wrapper.querySelector('.registration_form_progressbar li').classList.add('active');

   let progress_list=registration_form_wrapper.querySelectorAll('.registration_form_progressbar li')
   for(let j=0;j<progress_list.length;j++){

   	progress_list[j].addEventListener('click',function(e){
   		e.preventDefault();
   		alert(j+1 );
   		document.querySelector('.wplms_registration_form .registration_form_progressbar .active').classList.remove('active');
   		document.querySelector('.wplms_registration_form > form .active').classList.remove('active');
   		registration_form_wrapper.children[j].classList.add('active');
   		progress_list[j].classList.add('active');
   		
   });
   }
   
}



	
 
