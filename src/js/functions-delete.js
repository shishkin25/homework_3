//Функции для запросов с проектами
function deleteProjectWithXML(id) {
    const url = `http://45.12.239.156:8081/api/projects/${id}`;
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', url);
    xhr.setRequestHeader('Authorization', `Bearer ${localStorage.getItem('token')}`);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => {
        if (xhr.status >= 400) {
            console.log('error! ' + xhr.response);
        } else {
            console.log(xhr.response);    
        }
    }
    xhr.onerror = () => {
        console.log(xhr.response);
    }
    xhr.send();
}

function deleteProjectWithFetch(id) {
    const url = `http://45.12.239.156:8081/api/projects/${id}`;
    fetch(url, {
        method: 'DELETE',
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

function deleteProjectWithAxios(id) {
    const url = `http://45.12.239.156:8081/api/projects/${id}`;
    axios
        .delete(url, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        }
        })
            .then(response => {
                const result = response.data;
                console.log(result);
            })
            .catch(error => {
                console.error(error);
            });
}



//Функции для запросов с задачами
function deleteTaskWithXML(id) {
    const url = `http://45.12.239.156:8081/api/tasks/${id}`;
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', url);
    xhr.setRequestHeader('Authorization', `Bearer ${localStorage.getItem('token')}`);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => {
        if (xhr.status >= 400) {
            console.log('error! ' + xhr.response);
        } else {
            console.log(xhr.response);    
        }
    }
    xhr.onerror = () => {
        console.log(xhr.response);
    }
    xhr.send();
}

function deleteTaskWithFetch(id) {
    const url = `http://45.12.239.156:8081/api/tasks/${id}`;
    fetch(url, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.error('Ошибка!' + error));
}

function deleteTaskWithAxios(id) {
    const url = `http://45.12.239.156:8081/api/tasks/${id}`;
    axios
        .delete(url, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        }
        })
            .then(response => console.log(response.data))
            .catch(error => console.error(error));
}

export { deleteProjectWithXML, deleteProjectWithFetch, deleteProjectWithAxios, deleteTaskWithXML, deleteTaskWithFetch, deleteTaskWithAxios } 