//Функции для запросов с проектами
function putProjectWIthXML(data) {
    const url = 'http://45.12.239.156:8081/api/projects';
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', url);
    xhr.setRequestHeader('Authorization', `Bearer ${localStorage.getItem('token')}`);
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.onload = () => {
        const response = JSON.parse(xhr.response);
        console.log(response);
    };
    xhr.onerror = () => {
        console.log(xhr.response);
    }
    xhr.send(JSON.stringify(data));
}

function putProjectWithFetch(data) {
    const url = 'http://45.12.239.156:8081/api/projects';
    fetch(url, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.error('Ошибка!' + error));
}

function putProjectWithAxios(data) {
    const url = 'http://45.12.239.156:8081/api/projects';
    axios
        .put(url, data, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        }
        })
            .then(response => console.log(response.data))
            .catch(error => console.error(error));
}


//Функции для запросов с задачами
function putTaskWithXML(data) {
    const url = 'http://45.12.239.156:8081/api/tasks';
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', url);
    xhr.setRequestHeader('Authorization', `Bearer ${localStorage.getItem('token')}`);
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.onload = () => {
        const response = JSON.parse(xhr.response);
        console.log(response);
    };
    xhr.onerror = () => {
        console.log(xhr.response);
    }
    xhr.send(JSON.stringify(data));
}

function putTaskWithFetch(data) {
    const url = 'http://45.12.239.156:8081/api/tasks';
    fetch(url, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.error('Ошибка!' + error));
}

function putTaskWithAxios(data) {
    const url = 'http://45.12.239.156:8081/api/tasks';
    axios
        .put(url, data, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        }
        })
            .then(response => console.log(response.data))
            .catch(error => console.error(error));
}

export { putProjectWIthXML, putProjectWithFetch, putProjectWithAxios, putTaskWithXML, putTaskWithFetch, putTaskWithAxios }