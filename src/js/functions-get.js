//Функции для запросов с проектами
function getProjectWithXML(id) {
    const url = `http://45.12.239.156:8081/api/projects/${id}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.setRequestHeader('Authorization', `Bearer ${localStorage.getItem('token')}`);
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.onload = () => {
        const response = JSON.parse(xhr.response);
        console.log(response);
    };
    xhr.onerror = () => {
        console.log(xhr.response);
    }
    xhr.send();
}

function getProjectWithFetch(id) {
    const url = `http://45.12.239.156:8081/api/projects/${id}`;
    fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(error => console.error('Ошибка!' + error));
}

function getProjectWithAxios(id) {
    const url = `http://45.12.239.156:8081/api/projects/${id}`;
    axios
        .get(url, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
            })
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
}


//Функции для запросов с задачами
function getTaskWithXML(id) {
    const url = `http://45.12.239.156:8081/api/tasks/${id}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.setRequestHeader('Authorization', `Bearer ${localStorage.getItem('token')}`);
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.onload = () => {
        const response = JSON.parse(xhr.response);
        console.log(response);
    };
    xhr.onerror = () => {
        console.log(xhr.response);
    }
    xhr.send();
}

function getTaskWithFetch(id) {
    const url = `http://45.12.239.156:8081/api/tasks/${id}`;
    fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.error('Ошибка!' + error));
}

function getTaskWithAxios(id) {
    const url = `http://45.12.239.156:8081/api/tasks/${id}`;
    axios
        .get(url, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
            })
                .then(response => console.log(response.data))
                .catch(error => console.error(error));
}

export { getProjectWithXML, getProjectWithFetch, getProjectWithAxios, getTaskWithXML, getTaskWithFetch, getTaskWithAxios }