   let n1 = window.document.querySelector('input#txtn')
   //let n = Number(n1.value)
   let tab = document.querySelector('select#tab')
   let res = document.querySelector('div#res')
   let valores = []

   function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true;
    }
   }
   function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true;
    }else{
        return false;
    }
   }
function add(){   
    //if(n1 <= 0 || n1 > 101 
    //[ERRO]numero invalid
    if(isNumero(n1.value) && !inLista(n1.value, valores)){
       // window.alert('ok')
      valores.push(Number(n1.value))
      let item = document.createElement('option')
      item.text = `Valor ${n1.value} adicionado`
      tab.appendChild(item)
      res.innerHTML = ''
    }else{
        alert('[ERRO]valor invalido ou ja adicionado!')
      
    }
    n1.value = ''
    n1.focus()
}
function finalizar(){
    if(valores.length == 0){
        alert("adicione valores!")
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]

        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / total;
        res.innerHTML=''
        res.innerHTML += `<p>temos ${total} numero cadastrados</p>`
        res.innerHTML += `<p>maior valor > ${maior} </p>`
        res.innerHTML += `<p>menor valor  < ${menor} </p>`
        res.innerHTML += `<p>a soma dos numero é = ${soma} </p>`
        res.innerHTML += `<p>a media é ${media} </p>`

    }
}