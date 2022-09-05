 

  /////////////////////////* Start Fetch Api *//////////////

  let url = document.querySelector('#url')

  
  document.querySelector('#short').addEventListener('click', ()=>{
    
    const encodedParams = new URLSearchParams();
    encodedParams.append("url", `${url.value}`);
    
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '85c6fa996bmsh5e16e36c19073d5p121dddjsncceef3b1f78f',
        'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
      },
      body: encodedParams
    };
    
    fetch('https://url-shortener-service.p.rapidapi.com/shorten', options)
      .then(response => response.json())
      .then(response => 
      {
        
        let shortUrl=response.result_url
        document.querySelector('#result').href=`${shortUrl}`
        
        document.querySelector('#result').innerHTML=`${shortUrl}`
        
        Array.from(document.querySelectorAll(".copyBr")).map(e=>{e.style.display="inline-block"})
        
      })
      .catch(err => console.error(err));
      
      
    
  })
  
  
/////////////////////////* End Fetch Api *//////////////





  ///function to copy

function copy() {

  console.log("omar")
  
  let T = document.querySelector("#result")
  
  let x = document.createElement('textarea')
  x.value=T.textContent
  document.body.appendChild(x)
  x.select()
  x.setSelectionRange(0,99999);
  document.execCommand("copy");
  document.body.removeChild(x)
}


//end of copy
