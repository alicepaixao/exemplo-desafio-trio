//////////////////////
/// Acessando DOM ///
////////////////////
let btnCadastroCurso = document.querySelector('#cadastro_curso');
let btnSalvarCurso = document.querySelector('#salvar');
let btnSalvarEdicaoCurso = document.querySelector('#salvar-edicao');
let btnCancelarCadastroCurso = document.querySelector('#cancelar');


////////////////////////
/// Lista de cursos ///
//////////////////////
var dadosCursos =[
    {'imagem': 'novoCursoImagem',
    'titulo': 'novoCursoTitulo',
    'id': 'novoCursoId',
    'professor': 'novoCursoProfessor',
    'descricao' : 'novoCursoDescricao',
    'aulas': 'novoCursoAulas'}
];


////////////////
/// FUNÇÕES ///
//////////////


// Funções: Criar, editar, Deletar
const cadastrarCurso = () => {
    btnSalvarCurso.style.display = 'initial';
    btnSalvarEdicaoCurso.style.display ='none';
    document.querySelector('.modal').classList.add('active');
}

const criarCurso = () => {  
    /////////////////////////
    /// Acessando inputs ///
    ///////////////////////
    let novoCursoImagem = document.getElementById('novo_img').value;
    let novoCursoTitulo = document.getElementById('novo_titulo').value;
    let novoCursoId = document.getElementById('novo_id').value;
    let novoCursoProfessor = document.getElementById('novo_professor').value;
    let novoCursoDescricao = document.getElementById('novo_descricao').value;
    let novoCursoAulas = document.getElementById('novo_aulas').value;
    
    if(novoCursoId == ""){
        window.alert('Digite um ID válido!')
        return false;
    }    

    for(let i = 0; i < dadosCursos.length; i++) {        
        if (dadosCursos[i]['id'] == novoCursoId){                       
            return window.alert('Esse ID de curso já existe!');
        }        
    }

    dadosCursos.push({
        'imagem': novoCursoImagem,
        'titulo': novoCursoTitulo,
        'id': novoCursoId,
        'professor': novoCursoProfessor,
        'descricao' : novoCursoDescricao,
        'aulas': novoCursoAulas
    });

    const novoCurso = document.createElement('div')
    novoCurso.innerHTML = `
        <img src="${novoCursoImagem = '../imagens/teste.png'}" class="curso_imagem" alt="imagem curso">                
        <h2 class="curso_titulo">${novoCursoTitulo}</h2>
        <span class="curso_id">ID: ${novoCursoId}</span>
        <span class="curso_professor">Professor: ${novoCursoProfessor}</span>
        <p class="curso_descricao">${novoCursoDescricao}</p>
        <p class="curso_descricao">${novoCursoAulas}</p>
        <div class="curso_botoes_editar_deletar">
            <button class="curso_botao_editar" onclick="abrirEdicaoCurso(${novoCursoId})">Editar</button>
            <button class="curso_botao_deletar" onclick="deletarCurso(${novoCursoId})">Deletar</button>
        </div>`;

    novoCurso.classList.add(`container_curso`);
    novoCurso.setAttribute('id', `${novoCursoId}`);
    document.querySelector('#container').appendChild(novoCurso);    
    document.querySelector('#form').reset();
}

const cancelarCriacaoCurso = () => {
    limparInputsCriacao()
    document.querySelector('.modal').classList.remove('active');
}

const limparInputsCriacao = () => {
    document.querySelector('#form').reset();
}

const abrirEdicaoCurso = (id) => {
    document.querySelector('.modal').classList.add('active');

    btnSalvarCurso.style.display = 'none';
    btnSalvarEdicaoCurso.style.display ='initial';

    for(let i = 0; i < dadosCursos.length; i++) {        
        if (dadosCursos[i]['id'] == id){
            document.getElementById('novo_img').value = dadosCursos[i]['image'];
            document.getElementById('novo_titulo').value = dadosCursos[i]['titulo'];
            document.getElementById('novo_id').value = dadosCursos[i]['id'];
            document.getElementById('novo_professor').value = dadosCursos[i]['professor'];
            document.getElementById('novo_descricao').value = dadosCursos[i]['descricao'];
            document.getElementById('novo_aulas').value = dadosCursos[i]['aulas'];
        }        
    }   
}

const atualizarCurso = () => {  
    let atualizaCurso = document.getElementById('novo_id').value

    abrirEdicaoCurso();    
    deletarCurso(atualizaCurso);
    criarCurso();
}

const deletarCurso = (id) => {    
    document.getElementById(id).remove();
    for(let i = 0; i < dadosCursos.length; i++) {        
        if (dadosCursos[i]['id'] == id){
            dadosCursos.splice(i, 1);
        }        
    }
}


////////////////
/// EVENTOS ///
//////////////
btnCadastroCurso.addEventListener('click', cadastrarCurso);
btnSalvarCurso.addEventListener('click', criarCurso);
btnCancelarCadastroCurso.addEventListener('click', cancelarCriacaoCurso);
btnSalvarEdicaoCurso.addEventListener('click', atualizarCurso);

