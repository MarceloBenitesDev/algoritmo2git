function verificarSenha() {

    const senha = document.getElementById('senha').value;

    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(senha);
    const hasLowerCase = /[a-z]/.test(senha);
    const hasDigit = /\d/.test(senha);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(senha);
    const isLengthValid = senha.length >= minLength;

    const isStrong = hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar && isLengthValid;

    let resultado = '';
    if (isStrong) {
        resultado = 'Senha forte!';
        document.getElementById('resultado').className = 'result valid';
    } else {
        resultado = 'Senha fraca. Verifique os critérios: \n' +
                    (isLengthValid ? '✔ Comprimento mínimo de 8 caracteres.\n' : '✘ Comprimento mínimo de 8 caracteres.\n') +
                    (hasUpperCase ? '✔ Contém pelo menos uma letra maiúscula.\n' : '✘ Contém pelo menos uma letra maiúscula.\n') +
                    (hasLowerCase ? '✔ Contém pelo menos uma letra minúscula.\n' : '✘ Contém pelo menos uma letra minúscula.\n') +
                    (hasDigit ? '✔ Contém pelo menos um dígito (número).\n' : '✘ Contém pelo menos um dígito (número).\n') +
                    (hasSpecialChar ? '✔ Contém pelo menos um caractere especial.\n' : '✘ Contém pelo menos um caractere especial.\n');
        document.getElementById('resultado').className = 'result invalid';
    }
    document.getElementById('resultado').textContent = resultado;
}