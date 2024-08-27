const texto1 = document.querySelector('.texto1');
const mensagem = document.querySelector('.mensagem');
const div2 = document.getElementById("div2")

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar(desaparecer){
    const textoEncriptado = criptografar(texto1.value);
    mensagem.value = textoEncriptado;
    texto1.value = "";
    atualizarVisibilidadeDiv2()


};


function btnDesencriptar(){
 const textoDesencriptado = desencriptar(mensagem.value , texto1.value)
 texto1.value = textoDesencriptado;
 mensagem.value ="";
 atualizarVisibilidadeDiv2()
};

mensagem.addEventListener('input', atualizarVisibilidadeDiv2);
texto1.addEventListener('input', atualizarVisibilidadeDiv2);

let matrizCodigo = [["e", "enter"] , ["i" , "imes"] , ["a" , "ai" ] , ['o', 'ober'] , ["u", "ufat"]]
console.table(matrizCodigo)

function criptografar(stringEncriptada){ 
    let matrizCodigo = [["e", "enter"] , ["i" , "imes"] , ["a" , "ai" ] , ['o', 'ober'] , ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++)
    {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        };
    };

    return stringEncriptada
}
    function desencriptar(stringDesencriptada){ 
        let matrizCodigo = [["e", "enter"] , ["i" , "imes"] , ["a" , "ai" ] , ['o', 'ober'] , ["u", "ufat"]]
        stringDesencriptada = stringDesencriptada.toLowerCase();
    
        for(let i = 0; i < matrizCodigo.length; i++)
        {
            if(stringDesencriptada.includes(matrizCodigo[i][1])) {
                stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
            };
        };
    
        return stringDesencriptada
}   

function atualizarVisibilidadeDiv2() {
    console.log(`Mensagem atual: '${mensagem.value.trim()}'`);  

    if (mensagem.value.trim().length === 0) {
        div2.style.display = "block";  
    } else {
        div2.style.display = "none"; 
    }
}


function copiar(navigatorclipboard) {
    navigator.clipboard.writeText(mensagem.value)
    .then(() => {

        alert ('Texto copiado para a área de transferência!');
    }
    )
    .catch(err => {
        console.error('Erro ao copiar o texto: ', err)
    });
}
    
