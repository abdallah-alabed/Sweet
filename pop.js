alert("lets see what dessert suits you the most")

var sw=prompt('how many times you eat sweets throughout the day(0-3)')
  while ( sw<0 || sw ==null)
  {sw=alert('try again please')
  sw=prompt('how many times you eat sweets throughout the day(0-3)')
  }
  if (sw == 0 || sw == 1){
    document.write('POP-UP answer:  ')
    document.write('we recommend you the light sweet Halawah ')  }
   else if (sw == 2 || sw == 3){
     document.write('POP-UP answer:  ')
    document.write('we recommend you the Kunafah ')}
    else if (sw>3){
      document.write('POP-UP answer:  ')
      document.write('we recommend some of our sugar-free sweets')
    }