
let elInput =  document.querySelector('.input')
let elInputVal = elInput.value
let elBox = document.querySelector('.box')
let elBody = document.querySelector('.body')
let elImg = document.createElement('img')

let renderTodo = (array ,node) =>{
  elInput.innerHTML = ''
  let elMain = array.main
  let elWIND= array.wind

  let elCity = document.createElement('p')
  elCity.textContent ='Weather of ' + elInput.value
  elCity.setAttribute('class' , 'city')

  if(array.weather[0].id == 800){
    elBody.setAttribute('class' , 'cloudy')
  }

  if(array.weather[0].id == 200){
    elBody.setAttribute('class' , 'chaqmoq')
  }

  if(array.weather[0].id == 300){
    elBody.setAttribute('class' , 'drizzle')
  }

  if(array.weather[0].id == 500){
    elBody.setAttribute('class' , 'rain')
  }

  if(array.weather[0].id == 600){
    elBody.setAttribute('class' , 'snow')
  }

  let elNum = document.createElement('p')
  elNum.textContent ='+'+ elMain.temp +'°C'
  elNum.setAttribute('class' , 'temp')


  let elWind = document.createElement('p')
  elWind.textContent = 'wind speed: '+ elWIND.speed +'m/s'
  let elCloud = document.createElement('p')
  elCloud.textContent = array.weather[0].description
  elImg.src = `http://openweathermap.org/img/wn/${array.weather[0].icon}@2x.png`

  

  node.appendChild(elCity)
  node.appendChild(elNum)
  node.appendChild(elWind)
  node.appendChild(elCloud)
  node.appendChild(elImg)

}

// elInput.addEventListener('change' , function(){
//   fetch(`https://api.openweathermap.org/data/2.5/weather?q=Tashkent&appid=0fe632c8e5e4c8381086fc1a774e8f15&units=metric`)
// .then((res)=> res.json())
// .then((data)=> console.log(data))

  
// })


elInput.addEventListener('change' , function(){
  elBox.innerHTML = ''
  const elInputVal = elInput.value
  async function getPosts(end) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${end}&appid=0fe632c8e5e4c8381086fc1a774e8f15&units=metric`);
    const data = await response.json();
    console.log(data)
    renderTodo(data,elBox)
  }
  getPosts(elInputVal)
})
