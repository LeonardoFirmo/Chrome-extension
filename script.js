const btRemove = document.querySelector('#btRemove')



 btRemove.addEventListener('click',getWindowActive)


    async function getWindowActive(){
        btRemove.style.backgroundColor='green'
        let contador = 0
       const [tab] =  await chrome.tabs.query({active: true, currentWindow: true})
       chrome.scripting.executeScript({
           target: {tabId:tab.id},
           function: capturaItemClicado,
           args:[contador]
       })

    }


    const capturaItemClicado = (contador) =>{
        
        const body = document.body
        body.addEventListener('click',removeItens)
       


        function removeItens (event){
            const itemClicado = event.target
            itemClicado.style.display ='none'


            contador++
            if(contador===5){
                body.removeEventListener('click',removeItens)
            }
           
            
        }

    }




