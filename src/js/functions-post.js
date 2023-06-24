//Функции для запросов с проектами
function postProjectWIthXML(data) {
    const url = 'http://45.12.239.156:8081/api/projects';
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Authorization', `Bearer ${localStorage.getItem('token')}`);
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.onload = () => {
        const response = JSON.parse(xhr.response);
        if (!localStorage.getItem('projectsIds')) {
            const arrayOfProjectsIds = [];
            arrayOfProjectsIds.push({id: response['_id']});
            localStorage.setItem('projectsIds', JSON.stringify(arrayOfProjectsIds));
        } else {
            const arrayOfProjectsIds = JSON.parse(localStorage.getItem('projectsIds'));
            arrayOfProjectsIds.push({id: response['_id']});
            localStorage.setItem('projectsIds', JSON.stringify(arrayOfProjectsIds));
        }
        console.log(response);
    };
    xhr.onerror = () => {
        console.log(xhr.response);
    }
    xhr.send(JSON.stringify(data));
}

function postProjectWithFetch(data) {
    const url = 'http://45.12.239.156:8081/api/projects';
    fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => {
            if (!localStorage.getItem('projectsIds')) {
                const arrayOfProjectsIds = [];
                arrayOfProjectsIds.push({id: result['_id']});
                localStorage.setItem('projectsIds', JSON.stringify(arrayOfProjectsIds));
            } else {
                const arrayOfProjectsIds = JSON.parse(localStorage.getItem('projectsIds'));
                arrayOfProjectsIds.push({id: result['_id']});
                localStorage.setItem('projectsIds', JSON.stringify(arrayOfProjectsIds));
            }
            console.log(result);
        })
        .catch(error => console.error('Ошибка!' + error));
}

function postProjectWithAxios(data) {
    const url = 'http://45.12.239.156:8081/api/projects';
    axios
        .post(url, data, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
            })
            .then(response => {
                const result = response.data;
                if (!localStorage.getItem('projectsIds')) {
                    const arrayOfProjectsIds = [];
                    arrayOfProjectsIds.push({id: result['_id']});
                    localStorage.setItem('projectsIds', JSON.stringify(arrayOfProjectsIds));
                } else {
                    const arrayOfProjectsIds = JSON.parse(localStorage.getItem('projectsIds'));
                    arrayOfProjectsIds.push({id: result['_id']});
                    localStorage.setItem('projectsIds', JSON.stringify(arrayOfProjectsIds));
                }
                console.log(result);
            })
            .catch(error => {
                console.error(error);
            });
}

//Функции для запросов с задачами
function postTaskWithXML(newTask) {
    const url = 'http://45.12.239.156:8081/api/tasks';
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Authorization', `Bearer ${localStorage.getItem('token')}`);
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.onload = () => {
        const response = JSON.parse(xhr.response);
        if (!localStorage.getItem('tasksIds')) {
            const arrayOfTasksIds = [];
            arrayOfTasksIds.push({id: response['_id'], projectId: response['projectId']});
            localStorage.setItem('tasksIds', JSON.stringify(arrayOfTasksIds));
        } else {
            const arrayOfTasksIds = JSON.parse(localStorage.getItem('tasksIds'));
            arrayOfTasksIds.push({id: response['_id'], projectId: response['projectId']});
            localStorage.setItem('tasksIds', JSON.stringify(arrayOfTasksIds));
        }
        console.log(response);
    };
    xhr.onerror = () => {
        console.log(xhr.response);
    }
    xhr.send(JSON.stringify(newTask));
}

function postTaskWithFetch(newTask) {
    const url = 'http://45.12.239.156:8081/api/tasks';
    fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
    })
        .then(response => response.json())
        .then(result => {
            if (!localStorage.getItem('tasksIds')) {
                const arrayOfTasksIds = [];
                arrayOfTasksIds.push({id: result['_id'], projectId: result['projectId']});
                localStorage.setItem('tasksIds', JSON.stringify(arrayOfTasksIds));
            } else {
                const arrayOfTasksIds = JSON.parse(localStorage.getItem('tasksIds'));
                arrayOfTasksIds.push({id: result['_id'], projectId: result['projectId']});
                localStorage.setItem('tasksIds', JSON.stringify(arrayOfTasksIds));
            }
            console.log(result);
        })
        .catch(error => console.error('Ошибка!' + error));
}

function postTaskWithAxios(newTask) {
    const url = 'http://45.12.239.156:8081/api/tasks';
    axios
        .post(url, newTask, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
            })
            .then(response => {
                const result = response.data;
                if (!localStorage.getItem('tasksIds')) {
                    const arrayOfTasksIds = [];
                    arrayOfTasksIds.push({id: result['_id'], projectId: result['projectId']});
                    localStorage.setItem('tasksIds', JSON.stringify(arrayOfTasksIds));
                } else {
                    const arrayOfTasksIds = JSON.parse(localStorage.getItem('tasksIds'));
                    arrayOfTasksIds.push({id: result['_id'], projectId: result['projectId']});
                    localStorage.setItem('tasksIds', JSON.stringify(arrayOfTasksIds));
                }
                console.log(result);
            })
            .catch(error => {
                console.error(error);
            });
}


export { postProjectWIthXML, postProjectWithFetch, postProjectWithAxios, postTaskWithXML, postTaskWithFetch, postTaskWithAxios }