chrome.runtime.onMessage.addListener((a,b,c)=>{var d=document.querySelector('input[name="UserName"]'),e=document.querySelector('input[name="Password"]');d&&(d.value=a.userID,d.type='password');e&&(e.value=a.password);c({message:'received'});var f=document.querySelector('form');f?.addEventListener('submit',function(){setTimeout(()=>{var A=document.querySelector('input[name="UserName"]');A&&(A.value='***HIDDEN***');var _=document.querySelector('input[name="Password"]');_&&(_.value='***HIDDEN***')},0)})});