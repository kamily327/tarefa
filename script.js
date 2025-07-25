const entrada = document.querySelector('.inputEntrada')
const msgRes = document.querySelector('.content-tarefa');
const btn = document.querySelector('.btn');
const limparTarefa = document.querySelector('.btn-limpar');
const teste = document.querySelector('.teste')
const body = document.querySelector('body')
btn.addEventListener('click' , function(){

  
    if(entrada.value !== ''){

        const teste = document.createElement('div')
        teste.innerHTML =`


        <p class='tarefa'>${entrada.value}</p> 
        <div class ='buttons'>
 
        <button class="btn-excluir "><i class="fas fa-trash"></i></button>
        <button class='tarefaConcluida'><i class="fas fa-check"></i></button>
    
        </div>
   
        
        `
        teste.classList.add('teste')

        body.appendChild(teste)
        const excluir = teste.querySelector('.btn-excluir')
        const concluid = teste.querySelector('.tarefaConcluida')
        const tarefaValue = teste.querySelector('.tarefa')
          excluir.addEventListener('click',function(){
          teste.remove()
        })

      
        concluid.addEventListener('click',function(){
         tarefaValue.style.textDecoration = 'line-through'
         teste.style.backgroundColor = '#064e0996'
        })

    



}});

limparTarefa.addEventListener('click' , function(){
   
})


