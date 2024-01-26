const date = document.querySelector("#root > input");
const b = document.querySelector("#root > button");
const para = document.querySelector("#root > p");

b.addEventListener("click",(e)=>{

    const bday = new Date(date.value)
        
    const today = new Date()
        
    const diff = today.getTime() - bday.getTime();

    const mili = 365 * 24 * 60 * 60 * 1000;

    const year = Math.floor(diff/mili);

    para.innerText =  `Your age is ${year} ${year > 1 ? "years" : "year"} old.`; 
    
})