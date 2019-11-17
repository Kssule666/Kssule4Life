
var button = document.getElementById('button');
console.log(button);


var title = document.getElementById('title');
console.log(title);



button.addEventListener('click', () => {
  var divImage = document.getElementById('cassoulet-image'
  	);
  divImage.insertAdjacentHTML('afterbegin', '<img src="https://assets.bonappetit.com/photos/5a7dd5ce8b69e203758022c8/16:9/w_1200,c_limit/classic-cassoulet.jpg" >');

  console.log(divImage);
});


