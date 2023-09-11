let city=['Italy','USA','France','Germany','Thailand','Hawaii'];
let citychange=document.getElementById('change');
let count=0;
setInterval(()=>{
    citychange.innerHTML=city[count];
    count++;
    if(count==city.length)
    count=0;
},2000);