const cpfInput = document.getElementById('cpf');
        const cpfValidado = document.getElementById('cpfValidado');

        cpfInput.addEventListener('keypress', () => {
            
            let cpflength = cpfInput.value.length;

                if(cpflength === 3 || cpflength === 7) {
                    cpfInput.value += '.'
                } else if(cpflength === 11) {
                    cpfInput.value += '-';
                }
        });

        cpfInput.addEventListener('input', function(){
            if(cpfInput.value.length === 14) {
                cpfValidado.textContent = 'CPF válido!';
                cpfInput.style.border = '1px solid green'
                cpfValidado.style.color = 'green';
            } else {
                cpfValidado.textContent = 'CPF inválido!';
                cpfInput.style.border = '1px solid red'
                cpfValidado.style.color = 'red';
            }
        });