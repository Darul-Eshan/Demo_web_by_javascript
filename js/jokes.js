
document.getElementById('JokesButton').addEventListener('click', jokeProcessing);

function jokeProcessing() {
    const number=parseInt(document.getElementById('numberInput').value);
    let output=document.getElementById('output');
    if(!number || number<=1){
        output.innerText="Please enter a valid number greater than 1.";
        return;
    }
    output.innerText="Processing...";
    let jokes=[];
    let completed=0;
    for(let i=0;i<number;i++){
        let xhr=new XMLHttpRequest();
        xhr.open("GET","https://api.chucknorris.io/jokes/random",true);
        xhr.onload=function(){
            if(xhr.status===200){
                let response=JSON.parse(xhr.responseText);
                jokes.push(response.value);
            }
            completed++;
            if(completed===number){
                let list ="<ol>";
                jokes.forEach(joke=>{
                    list+=`<li>${joke}</li>`;
                });
                list+="</ol>";
                output.innerHTML=list;
            }
        };
        xhr.onerror=function(){
            completed++;    
            if(completed===number){
                let list ="<ol>";
                jokes.forEach(joke=>{
                    list+=`<li>${joke}</li>`;
                }); 
                list+="</ol>";
                output.innerHTML = list + '<br>Error fetching some jokes.';
            }

    };   
      xhr.send();
    }
}
