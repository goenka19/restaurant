console.log('hello mf');
var content = document.querySelector('#content');
var body = document.querySelector('body')

//to clear the content div every time
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

const menu = () => {
    var menu_content = document.createElement('div');

    var menu_text = document.createElement('h1');
    menu_text.textContent = 'All Menu Stuff';

    menu_content.appendChild(menu_text);
    content.appendChild(menu_content)
}

const contact = () => {
    var contact_content = document.createElement('div');

    var contact_text = document.createElement('h1');
    contact_text.textContent = 'Contact us here';

    contact_content.appendChild(contact_text);
    content.appendChild(contact_content);
}


const home_btn = document.createElement('button');
home_btn.innerHTML = 'Home';
home_btn.addEventListener('click', ()=> {
    deletegrid(content);
    buttonbar();
    home();
})

const menu_btn = document.createElement('button');
menu_btn.innerHTML = 'Menu';
menu_btn.addEventListener('click', ()=> {
    deletegrid(content);
    buttonbar()
    menu();
})

const contact_btn = document.createElement('button');
contact_btn.innerHTML = 'Contact';
contact_btn.addEventListener('click', ()=> {
    deletegrid(content);
    buttonbar()
    contact();
})
const buttonbar = ()=> {
    content.append(home_btn, menu_btn, contact_btn);
}
buttonbar();
home();