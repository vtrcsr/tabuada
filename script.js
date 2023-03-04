function tabuada(){
  let num = document.getElementById('txtn')
  let tab = document.getElementById('seltab')


  if(num.value.length == 0){
    alert('Digite algo')
  } else{
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = ''

    while (c <= 10){
      let item = document.createElement('option')
      item.text = `${n} x ${c} = ${n*c}`
      item.value = `tab${c}`  //usado para outras linguagems, como PHP. Não tem efeito em JS
      tab.appendChild(item)
      c++
    }
  }
  
}