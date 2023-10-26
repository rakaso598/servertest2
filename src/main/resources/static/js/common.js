 function changeErrMsg(){
    [...document.querySelectorAll('.field-error')].forEach(ele=>ele.textContent = ele.innerHTML.replace('<br>',' / '));
 }

 const ajax = {
   get : async (url) =>{
     const option = {
       method: 'get',
       headers : {
         Accept: 'application/json',
       },
     };
     try {
     const response = await fetch(url,option);
     const data = await response.json();
     return data;
     } catch(err){
       console.error(err);
     };
   },
   post : async (url,payload) =>{
     const option = {
       method: 'POST',
       headers : {
         'Content-Type':'application/json',
         Accept: 'application/json',
       },
       body : JSON.stringify(payload),
     };
     try {
     const response = await fetch(url,option);
     const data = await response.json();
     return data;
     } catch(err){
       console.error(err);
     };
   },
   put : async (url,payload) =>{
     const option = {
       method: 'PUT',
       headers : {
         'Content-Type':'application/json',
         Accept: 'application/json',
       },
       body : JSON.stringify(payload),
     };
     try {
     const response = await fetch(url,option);
     const data = await response.json();
     return data;
     } catch(err){
       console.error(err);
     };
   },
   patch : async (url,payload) =>{
     const option = {
       method: 'PATCH',
       headers : {
         'Content-Type':'application/json',
         Accept: 'application/json',
       },
       body : JSON.stringify(payload),
     };
     try {
     const response = await fetch(url,option);
     const data = await response.json();
     return data;
     } catch(err){
       console.error(err);
     };
   },
   delete : async (url) =>{
     const option = {
       method: 'DELETE',
       headers : {
         Accept: 'application/json',
       },
     };
     try {
     const response = await fetch(url,option);
     const data = await response.json();
     return data;
     } catch(err){
       console.error(err);
     };
   },
 };

 export {changeErrMsg,ajax}

