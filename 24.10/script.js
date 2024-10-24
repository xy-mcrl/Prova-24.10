function toggleForm() {
    const loginCard = document.querySelector('.login-card');
    const registerCard = document.querySelector('.register-card');
    
    // Alterna a exibição entre as telas de login e cadastro
    loginCard.style.display = (loginCard.style.display === 'none') ? 'block' : 'none';
    registerCard.style.display = (registerCard.style.display === 'none') ? 'block' : 'none';
}

function login() {
    // Lógica de login (substitua pelo seu método de autenticação)
    document.querySelector('.login-card').style.display = 'none';
    document.querySelector('.register-card').style.display = 'none';
    document.querySelector('.main-screen').style.display = 'block';
}

function register() {
    // Lógica de cadastro (substitua pelo seu método de registro)
    alert('Cadastro realizado com sucesso!');
    toggleForm(); // Retorna à tela de login após o cadastro
}

function logout() {
    alert('Você saiu do sistema.');
    document.querySelector('.main-screen').style.display = 'none'; // Oculta a tela principal
    document.querySelector('.login-card').style.display = 'block'; // Exibe a tela de login
}

function showTab(tabId) {
    const cards = document.querySelectorAll('.card');
    const tabs = document.querySelectorAll('.tab');

    cards.forEach(card => {
        card.classList.remove('active');
    });
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');
    document.querySelector(`.tab[onclick="showTab('${tabId}')"]`).classList.add('active');
}

function viewTasks(projectName) {
    alert('Visualizando tarefas do ' + projectName);
}

function deleteProject(projectName) {
    alert('Projeto ' + projectName + ' excluído.');
}

function editTask(taskName) {
    alert('Editando ' + taskName);
}

function deleteTask(taskName) {
    alert('Tarefa ' + taskName + ' excluída.');
}
