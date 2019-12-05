//01

function toggleChecked() {
    let box = document.getElementById("Check");

    if (box.checked) {
        box.checked = false;
    } else {
        box.checked = true;
    }
};

//02

let cambiar = document.getElementById('miInput')
cambiar.name = 'miExInput';

// otro metodo


//03
let div = document.getElementById('Ligia')
div.innerHTML = `
<ul id="list">
<li class="list-el">1</li>
<li class="list-el">2</li>
<li class="list-el">3</li>
<li class="list-el">4</li>
<li class="list-el">5</li>
</ul>`;

const elements = documents.querySelectorAll(".list-el");
for(i=0; i < elements.lenght; i++) {
    elements[i].innerHTML = i +1;
}

//04

