function dalert(){
alert('welcome to home styling');
}
dalert()


var usercolor =prompt('slect the color of background:blue,yellow')
function dcolor (usercolor){ 
  
if (usercolor==='blue')
     
     {
      document.write( '<img src="https://jane-athome.com/wp-content/uploads/2019/03/ACS_0504.jpg">')
       }
  
   else if(usercolor==="yellow")
  
    {
     document.write(' <img src="https://i.pinimg.com/564x/c9/86/7d/c9867d53266ca52ce8b48db574e22f9f.jpg" alt="living room4">' )
     }
   
   else {
     document.write(' <img src="https://www.renonation.sg/wp-content/uploads/The-Scientist-Telok-Blangah-HDB-Pink-Design-Theme-3.jpg" alt="living room4">')
     }
}
   dcolor(usercolor)
 


 var userPassword = prompt('Enter your password please')
function password(userpassword){
 while(userPassword !== '9876')
 var userPassword = prompt('Enter your password please')

 while(userPassword !== '9876')
 { 
    userPassword = prompt('Incorrect please enter the correct password')
 }
 }

var favplanet = prompt('Whats your favorite interior plant (orcide,Peace lily)?')
function dfaverplanet(favplanet){
while(favplanet !== 'orcide' && favplanet !=='Peace lily'){
  favplanet = prompt('Try again !')
}
}
var plantCount = prompt('How many vases do you want to see ?')

var image = ''
for(var x = 0; x < plantCount ;x++){
  if(favplanet ==='orcide'){
    image = image+'<img src="https://i.pinimg.com/564x/dd/17/b2/dd17b2a973ddda40929e63def465629c.jpg">'
  }else if( favplanet ==='Peace lily'){
    image = image + '<img src="https://i.pinimg.com/564x/1a/e7/ef/1ae7ef76d161d6afffaa72545a4a8f1d.jpg">'
  }
}
  document.write(image)  

