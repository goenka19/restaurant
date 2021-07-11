console.log('hello mf');
var content = document.querySelector('#content');
var body = document.querySelector('body')
var buttonDiv = document.createElement('div')
function deletegrid(container)
{
    var cells = container.lastElementChild;
    while(cells)
    {
        container.removeChild(cells);
        cells = container.lastElementChild;
    }
}

const home = ()=> {
    var home_content = document.createElement('div');
    
    var home_text = document.createElement('h1');
    home_text.textContent = 'restraunt is good';

    home_content.appendChild(home_text);
    content.appendChild(home_content);
}


const home_btn = document.createElement('button');
home_btn.innerHTML = 'Home';
home_btn.addEventListener('click', ()=> {
    deletegrid(content);
    home();
})

const menu_btn = document.createElement('button');
menu_btn.innerHTML = 'Menu';

const contact_btn = document.createElement('button');
contact_btn.innerHTML = 'Contact';

buttonDiv.append(home_btn, menu_btn, contact_btn);
body.appendChild(buttonDiv);

home();