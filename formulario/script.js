const form = document.querySelector('#form')

const usuarios = []
//array onde serão inseridos os dados
function recebeDados(e){
    e.preventDefault();

    const nome1 = form.querySelector('#nome1').value;
    const sobrenome1 = form.querySelector('#nome').value;
    const email1 = form.querySelector('#email1').value;
    const vaga1 = form.querySelector('#vaga').value;
    const data1 = form.querySelector('#data_inicio').value;
    const situ1 = form.querySelector('input[name="situ"]:checked').value;
    const descricao1 = form.querySelector('#perfil1').value;


    usuarios.push({
        nome:'',
        sobrenome:'',
        email:'',
        vaga:'',
        data:'',
        situ:'',
        descricao:'',
    })
    //insierinodo alocações para os dados do usuário


    if(email1 !== usuarios[0].email) {
    //validando se o email do usuário já existe no array

        usuarios[0].nome = nome1;
        usuarios[0].sobrenome = sobrenome1;
        usuarios[0].email = email1;
        usuarios[0].vaga = vaga1;
        usuarios[0].data = data1;
        usuarios[0].situ = situ1;
        usuarios[0].descricao = descricao1;
    
    //preenchendo as alocações com os dados que o usuário inseriu
    
    function criaTag(){

        let tagh11 = document.createElement('h1');
        tagh11.innerHTML = nome1;
        let tagh12 = document.createElement('h1');
        tagh12.innerHTML = sobrenome1;
        let tagh13 = document.createElement('p');
        tagh13.innerHTML = email1;
        let tagh14 = document.createElement('p');
        tagh14.innerHTML = vaga1;
        let tagh15 = document.createElement('p');
        tagh15.innerHTML = descricao1;

        //craando as tags HTML e inserindo os dados
        
        const cartaoUsu = document.createElement('div')
        cartaoUsu.classList.add('cartaoUsu')//adicioando a classe ao campo de apresentação dos dados
        cartaoUsu.innerHTML = `<h1>Usuário cadastrado</h1>`
        cartaoUsu.appendChild(tagh11);
        cartaoUsu.appendChild(tagh12);
        cartaoUsu.appendChild(tagh13);
        cartaoUsu.appendChild(tagh14);
        cartaoUsu.appendChild(tagh15);
        let container = document.querySelector('#container');
        container.appendChild(cartaoUsu);//add o elemento 'cartaoUsu' criado com js a um elemento já existente no HTML
        
        tagh11.classList.add('h1edit');
        tagh12.classList.add('h1edit');
        tagh13.classList.add('pEmail');
        tagh14.classList.add('pVaga');
        tagh15.classList.add('pDescri');
        //add classes aos elemetos que serão apresentados ao usuário    
        }
        
        
        criaTag() 
    
    }else{
        window.alert('Email já cadastrado')
        //caso o email ja existir no array, aparecerá um alerta informando ao usuário
    }



}

form.addEventListener('submit', recebeDados);

