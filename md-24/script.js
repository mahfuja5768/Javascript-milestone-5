const sections = document.querySelectorAll('section')
for(const section of sections){
    section.style.border = '2px solid steelblue';
    section.style.backgroundColor = 'lightgray';
    section.style.borderRadius = '10px';
    section.style.marginBottom = '10px';
    section.style.paddingLeft = '10px';

}

const placesStyle = document.getElementById('places');
placesStyle.style.backgroundColor = 'yellow'
placesStyle.classList.add('text-center')
placesStyle.classList.remove('large-text')

const fruitList = document.getElementById('fruit-list');
const li = document.createElement('li');
li.innerText = 'mango';
fruitList.appendChild(li);

//set innerHtml dirrectly
const mainContainer = document.getElementById('main-container')
const sectionAdd = document.createElement('section');
sectionAdd.innerHTML = `
<h1>My Fav Food section </h1>
<ul>
   <li> Muchi </li>
   <li> biriyani </li>
   <li> kalavuna </li>
   <li> sausage </li>
</ul>   
`
mainContainer.appendChild(sectionAdd)
