//Extender mais funcionalidades? (forks... forks.. forks...)

//Exibe mensagem de alerta sobre o login (email ou telefone)
function validateLogin() {
    let msgContainerLogin = document.getElementById("msg-container-login");

    msgContainerLogin.innerHTML = ""; //Limpa o conteúdo de div container

    if (inputLogin.value.length == 0) {
        //Usuário não alterou o campo ( input vazio )
        msgContainerLogin.insertAdjacentHTML("afterbegin", "<p style='margin:3px 0px 0 0;color:var(--msg-error);font:12.5px var(--font-alert);'>Informe um email ou número de telefone válido</p>");
        inputLogin.style.borderBottom = "";
    }
}

//Exibe mensagem de alerta sobre a validação de senha
function validatePassword() {
    let msgContainerPassword = document.getElementById("msg-container-password");

    msgContainerPassword.innerHTML = "";

    if (inputPassword.value.length < 4 || inputPassword.value.length > 64) {
        msgContainerPassword.insertAdjacentHTML("afterbegin", "<p style='margin:3px 0px 0 0;color:var(--msg-error);font:12.5px var(--font-alert);'>A senha deve ter de 4 a 64 caracteres</p>");
    }
}

let inputLogin = document.getElementById("input-login");
let inputPassword = document.getElementById("input-password");
inputLogin.addEventListener("blur", validateLogin); //Listener 1
inputPassword.addEventListener("blur", validatePassword); //Listener 2
