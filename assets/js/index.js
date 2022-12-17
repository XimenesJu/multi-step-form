function goToStep1() {
  location.replace("../steps/index.html")
    
}

function goToStep2() {
  location.replace("../steps/step2.html")
    
}

function goToStep3() {
  location.replace("../steps/step3.html")
    
}

function goToStep4() {
  location.replace("../steps/step4.html")
    
}

function goToConfirmation() {
  location.replace("../steps/confirmation.html")
}

function plan1() {
  
  var p1n = document.getElementById('plan1name')
  var p1p = document.getElementById('plan1price')
  var p1s = document.getElementById('planselected')
  var p1sp = document.getElementById('planselectedprice')


  p1s.innerHTML = p1n
  p1sp.innerHTML = p1p
}