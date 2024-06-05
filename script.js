document.getElementById("synchronous").addEventListener("click", function(){
  let number = document.getElementById('number-input').value
  
  let oddNumber = []
  let evenNumber = []

  let odd
  let even

  // oddnumber
  for(let i = 1; i<= number; i++){
    if(i % 2 != 0){
      oddNumber.push(i)
      if (oddNumber.length % 9 === 0) {
        oddNumber.push('<br>')
      }
    }
  }
  odd = oddNumber.join(', ')
  document.getElementById('odd-show').innerHTML = odd

  //evennumber
  for(let j = 1; j<= number; j++){
    if(j % 2 == 0){
      evenNumber.push(j)
      if (evenNumber.length % 9 === 0) {
        evenNumber.push('<br>')
      }
    }
  }
  even = evenNumber.join(', ')
  document.getElementById('even-show').innerHTML = even

  document.getElementById('number-input').value = ''
})

document.getElementById("asynchronous").addEventListener("click", function(){
  let number = document.getElementById('number-input').value
  
  let oddNumber = []
  let evenNumber = []

  let odd
  let even

  //oddnumber
  let i = 1
  setInterval(()=>{
    if(i <= number){
      if(i % 2 !=0){
        oddNumber.push(i)
        if (oddNumber.length % 9 === 0) {
          oddNumber.push('<br>')
        }
        odd = oddNumber.join(',')
        document.getElementById('odd-show').innerHTML = odd
      }
    }
    i++
  },500)

   //evennumber
  let j = 1
  setInterval(()=>{
    if(j <= number){
      if(j % 2 == 0){
        evenNumber.push(j)
        if (evenNumber.length % 9 === 0) {
          evenNumber.push('<br>')
        }
        even = evenNumber.join(',')
        document.getElementById('even-show').innerHTML = even
      }
    }
    j++
  },500)

  document.getElementById('number-input').value = ''
})