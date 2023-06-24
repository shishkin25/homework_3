import "@/scss/style.scss";
import { initApp, makeNavItemActive, deletePreviousComponent } from '@/js/functions.js';

import { postProjectWIthXML, postProjectWithFetch, postProjectWithAxios, postTaskWithXML, postTaskWithFetch, postTaskWithAxios } from '@/js/functions-post.js';
import { getProjectWithXML, getProjectWithFetch, getProjectWithAxios, getTaskWithXML, getTaskWithFetch, getTaskWithAxios } from '@/js/functions-get.js';
import { putProjectWIthXML, putProjectWithFetch, putProjectWithAxios, putTaskWithXML, putTaskWithFetch, putTaskWithAxios } from '@/js/functions-put.js';
import { deleteProjectWithXML, deleteProjectWithFetch, deleteProjectWithAxios, deleteTaskWithXML, deleteTaskWithFetch, deleteTaskWithAxios } from '@/js/functions-delete.js';


import { getNavigation } from '@/components/navigation/index';
import { getBtnsForProjects } from '@/components/btns-projects/index';
import { getBtnsForTasks } from '@/components/btns-tasks/index';

initApp(
    getNavigation(),
    getBtnsForProjects()
);

const messageAboutGettingProject = 'Для получения проекта сначала необходимо его создать. При создании нескольких проектов и нажатии "получить" будет приходить только последний созданный проект.'
const messageAboutPuttingProject = 'Для редактирования проекта сначала необходимо его создать. При создании нескольких проектов и нажатии "редактировать" будет изменяться только последний созданный проект'
const messageAboutDeletingProject = 'Для удаления проекта сначала необходимо его создать. При создании нескольких проектов удалить можно все, но сначала будет удаляться последний созданый проект.';

const messageAboutCreatingTask = 'Для создания задачи необходимо сначала создать проект. При создании нескольких проектов и нажатии "создать задачу" будет происходить создание задачи в последний созданный проект';
const messageAboutGettingTask = 'Для получения задачи сначала необходимо создать задачу. При создании нескольких задач и нажатии "получить задачу" будет приходить только последняя созданная задача.'
const messageAboutPuttingTask = 'Для редактирования задачи сначала необходимо создать задачу. При создании нескольких задач и нажатии "редактировать задачу" будет изменяться последняя созданная задача.'
const messageAboutDeletingTask = 'Для удаления задачи сначала необходимо ее создать. При создании нескольких задач удалить можно все, но сначала будет удаляться последняя созданная задача.';


// получение токена
fetch('http://45.12.239.156:8081/api/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        login: 'shishkin.a',
        password: 'jc63fk'
    })
})
    .then(response => response.json())
    .then(data => localStorage.setItem('token', data.token))
    .catch(error => console.error('Ошибка!' + error));




const app = document.querySelector('.app');
app.addEventListener('click', (e) => {
    //обработка нажатия на item навигационной панели
    const navItem = e.target.closest('.menu__nav-item');
    if (navItem && !navItem.classList.contains('menu__nav-item_active')) {
        makeNavItemActive(navItem);
        deletePreviousComponent(app);
        if (navItem.id == 'tasks') {
            const component = getBtnsForTasks();
            app.insertAdjacentHTML("beforeend", component);
        }
        if (navItem.id == 'projects') {
            const component = getBtnsForProjects();
            app.insertAdjacentHTML("beforeend", component);
        }
    }


    let arrayOfProjectsIds = JSON.parse(localStorage.getItem('projectsIds'));
    let arrayOfTasksIds = JSON.parse(localStorage.getItem('tasksIds')); 
    //обработка действий с проектами
    switch(e.target.id) {
        case 'post-xml-project':
            postProjectWIthXML({name: 'project-xml',code: '#1'});
            break;
        case 'post-fetch-project':
            postProjectWithFetch({name: 'project-fetch',code: '#2'});
            break;
        case 'post-axios-project':
            postProjectWithAxios({name: 'project-axios',code: '#3'});
            break;
        case 'get-xml-project':
            if (!localStorage.getItem('projectsIds') || arrayOfProjectsIds.length == 0) {
                console.log(messageAboutGettingProject)
            } else {
                const idOfLastProject = arrayOfProjectsIds[arrayOfProjectsIds.length - 1].id;
                getProjectWithXML(idOfLastProject);
            }
            break;
        case 'get-fetch-project':
            if (!localStorage.getItem('projectsIds') || arrayOfProjectsIds.length == 0) {
                console.log(messageAboutGettingProject)
            } else {
                const idOfLastProject = arrayOfProjectsIds[arrayOfProjectsIds.length - 1].id;
                getProjectWithFetch(idOfLastProject);
            }
            break;
        case 'get-axios-project':
            if (!localStorage.getItem('projectsIds') || arrayOfProjectsIds.length == 0) {
                console.log(messageAboutGettingProject)
            } else {
                const idOfLastProject = arrayOfProjectsIds[arrayOfProjectsIds.length - 1].id;
                getProjectWithAxios(idOfLastProject);
            }
            break;
        case 'put-xml-project':
            if (!localStorage.getItem('projectsIds') || arrayOfProjectsIds.length == 0) {
                console.log(messageAboutPuttingProject);
            } else {
                const idOfLastProject = arrayOfProjectsIds[arrayOfProjectsIds.length - 1].id;
                const data = {
                    _id: idOfLastProject,
                    name: 'newName-xml',
                    code: 'newCode-xml'
                }
                putProjectWIthXML(data);
            }
            break;
        case 'put-fetch-project':
            if (!localStorage.getItem('projectsIds') || arrayOfProjectsIds.length == 0) {
                console.log(messageAboutPuttingProject);
            } else {
                const idOfLastProject = arrayOfProjectsIds[arrayOfProjectsIds.length - 1].id;
                const data = {
                    _id: idOfLastProject,
                    name: 'newName-fetch',
                    code: 'newCode-fetch'
                }
                putProjectWithFetch(data);
            }
            break;
        case 'put-axios-project':
            if (!localStorage.getItem('projectsIds') || arrayOfProjectsIds.length == 0) {
                console.log(messageAboutPuttingProject);
            } else {
                const idOfLastProject = arrayOfProjectsIds[arrayOfProjectsIds.length - 1].id;
                const data = {
                    _id: idOfLastProject,
                    name: 'newName-axios',
                    code: 'newCode-axios'
                }
                putProjectWithAxios(data);
            }
            break;
        case 'delete-xml-project':
            if (!localStorage.getItem('projectsIds') || arrayOfProjectsIds.length == 0) {
                console.log(messageAboutDeletingProject)
            } else {
                const idOfLastProject = arrayOfProjectsIds.pop().id;
                localStorage.setItem('projectsIds', JSON.stringify(arrayOfProjectsIds));
                //удаление всех задач проекта в случае если они есть
                if (localStorage.getItem('tasksIds') && arrayOfTasksIds.length !== 0) {
                    for (let i = arrayOfTasksIds.length - 1; i >= 0; i--) {
                        if (arrayOfTasksIds[i].projectId == idOfLastProject) {
                            deleteTaskWithXML(arrayOfTasksIds[i].id);
                            arrayOfTasksIds.splice(i, 1);
                        }
                      }
                    localStorage.setItem('tasksIds', JSON.stringify(arrayOfTasksIds));
                }
                //удаление самого проекта
                deleteProjectWithXML(idOfLastProject);
            }
            break;
        case 'delete-fetch-project':
            if (!localStorage.getItem('projectsIds') || arrayOfProjectsIds.length == 0) {
                console.log(messageAboutDeletingProject)
            } else {
                const idOfLastProject = arrayOfProjectsIds.pop().id;
                localStorage.setItem('projectsIds', JSON.stringify(arrayOfProjectsIds));
                //удаление всех задач проекта в случае если они есть
                if (localStorage.getItem('tasksIds') && arrayOfTasksIds.length !== 0) {
                    for (let i = arrayOfTasksIds.length - 1; i >= 0; i--) {
                        if (arrayOfTasksIds[i].projectId == idOfLastProject) {
                            deleteTaskWithFetch(arrayOfTasksIds[i].id);
                            arrayOfTasksIds.splice(i, 1);
                        }
                      }
                    localStorage.setItem('tasksIds', JSON.stringify(arrayOfTasksIds));
                }
                //удаление самого проекта
                deleteProjectWithFetch(idOfLastProject);
            }
            break;
        case 'delete-axios-project':
            if (!localStorage.getItem('projectsIds') || arrayOfProjectsIds.length == 0) {
                console.log(messageAboutDeletingProject)
            } else {
                const idOfLastProject = arrayOfProjectsIds.pop().id;
                localStorage.setItem('projectsIds', JSON.stringify(arrayOfProjectsIds));
                //удаление всех задач проекта в случае если они есть
                if (localStorage.getItem('tasksIds') && arrayOfTasksIds.length !== 0) {
                    for (let i = arrayOfTasksIds.length - 1; i >= 0; i--) {
                        if (arrayOfTasksIds[i].projectId == idOfLastProject) {
                            deleteTaskWithAxios(arrayOfTasksIds[i].id);
                            arrayOfTasksIds.splice(i, 1);
                        }
                      }
                    localStorage.setItem('tasksIds', JSON.stringify(arrayOfTasksIds));
                }
                //удаление самого проекта
                deleteProjectWithAxios(idOfLastProject);
            }
            break;
    }


    
    //обработка действий с задачами
    switch(e.target.id) {
        case 'post-xml-task':
            if (!localStorage.getItem('projectsIds') || arrayOfProjectsIds.length == 0) {
                console.log(messageAboutCreatingTask);
            } else {
                const idOfLastProject = arrayOfProjectsIds[arrayOfProjectsIds.length - 1].id;
                const newTask = {
                    name: 'task-xml',
                    description: 'description of task-xml',
                    projectId: idOfLastProject
                }
                postTaskWithXML(newTask);
            }
            break;
        case 'post-fetch-task':
            if (!localStorage.getItem('projectsIds') || arrayOfProjectsIds.length == 0) {
                console.log(messageAboutCreatingTask);
            } else {
                const idOfLastProject = arrayOfProjectsIds[arrayOfProjectsIds.length - 1].id;
                const newTask = {
                    name: 'task-fetch',
                    description: 'description of task-fetch',
                    projectId: idOfLastProject
                }
                postTaskWithFetch(newTask);
            }
            break;
        case 'post-axios-task':
            if (!localStorage.getItem('projectsIds') || arrayOfProjectsIds.length == 0) {
                console.log(messageAboutCreatingTask);
            } else {
                const idOfLastProject = arrayOfProjectsIds[arrayOfProjectsIds.length - 1].id;
                const newTask = {
                    name: 'task-axios',
                    description: 'description of task-axios',
                    projectId: idOfLastProject
                }
                postTaskWithAxios(newTask);
            }
            break;
        case 'get-xml-task':
            if (!localStorage.getItem('tasksIds') || arrayOfTasksIds.length == 0) {
                console.log(messageAboutGettingTask);
            } else {
                const idOfLastTask = arrayOfTasksIds[arrayOfTasksIds.length - 1].id;
                getTaskWithXML(idOfLastTask);
            }
            break;
        case 'get-fetch-task':
            if (!localStorage.getItem('tasksIds') || arrayOfTasksIds.length == 0) {
                console.log(messageAboutGettingTask);
            } else {
                const idOfLastTask = arrayOfTasksIds[arrayOfTasksIds.length - 1].id;
                getTaskWithFetch(idOfLastTask);
            }
            break;
        case 'get-axios-task':
            if (!localStorage.getItem('tasksIds') || arrayOfTasksIds.length == 0) {
                console.log(messageAboutGettingTask);
            } else {
                const idOfLastTask = arrayOfTasksIds[arrayOfTasksIds.length - 1].id;
                getTaskWithAxios(idOfLastTask);
            }
            break;
        case 'put-xml-task':
            if (!localStorage.getItem('tasksIds') || arrayOfTasksIds.length == 0) {
                console.log(messageAboutPuttingTask);
            } else {
                const idOfLastTask = arrayOfTasksIds[arrayOfTasksIds.length - 1].id;
                const data = {
                    _id: idOfLastTask,
                    name: 'newTaskName-xml',
                    description: 'newDescription-xml'
                }
                putTaskWithXML(data);
            }
            break;
        case 'put-fetch-task':
            if (!localStorage.getItem('tasksIds') || arrayOfTasksIds.length == 0) {
                console.log(messageAboutPuttingTask);
            } else {
                const idOfLastTask = arrayOfTasksIds[arrayOfTasksIds.length - 1].id;
                const data = {
                    _id: idOfLastTask,
                    name: 'newTaskName-fetch',
                    description: 'newDescription-fetch'
                }
                putTaskWithFetch(data);
            }
            break;
        case 'put-axios-task':
            if (!localStorage.getItem('tasksIds') || arrayOfTasksIds.length == 0) {
                console.log(messageAboutPuttingTask);
            } else {
                const idOfLastTask = arrayOfTasksIds[arrayOfTasksIds.length - 1].id;
                const data = {
                    _id: idOfLastTask,
                    name: 'newTaskName-axios',
                    description: 'newDescription-axios'
                }
                putTaskWithAxios(data);
            }
            break;
        case 'delete-xml-task':
           if (!localStorage.getItem('tasksIds') || arrayOfTasksIds.length == 0) {
                console.log(messageAboutDeletingTask);
           } else {
                const idOfLastTask = arrayOfTasksIds.pop().id;
                localStorage.setItem('tasksIds', JSON.stringify(arrayOfTasksIds));
                deleteTaskWithXML(idOfLastTask);
           }
            break;
        case 'delete-fetch-task':
            if (!localStorage.getItem('tasksIds') || arrayOfTasksIds.length == 0) {
                console.log(messageAboutDeletingTask);
           } else {
                const idOfLastTask = arrayOfTasksIds.pop().id;
                localStorage.setItem('tasksIds', JSON.stringify(arrayOfTasksIds));
                deleteTaskWithFetch(idOfLastTask);
           }
            break;
        case 'delete-axios-task':
            if (!localStorage.getItem('tasksIds') || arrayOfTasksIds.length == 0) {
                console.log(messageAboutDeletingTask);
           } else {
                const idOfLastTask = arrayOfTasksIds.pop().id;
                localStorage.setItem('tasksIds', JSON.stringify(arrayOfTasksIds));
                deleteTaskWithAxios(idOfLastTask);
           }
            break;
    }
});
