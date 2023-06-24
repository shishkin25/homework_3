function getBtnsForTasks() {
    return `<section class="btns">
                <div class="container">
                    <div class="btns__method">
                        <div class="btns__subheader">Создать задачу (POST)</div>
                        <div class="btns__wrapper">
                            <button id="post-xml-task" class="btns__item btn">Создать c XML</button>
                            <button id="post-fetch-task"class="btns__item btn">Создать c Fetch</button>
                            <button id="post-axios-task" class="btns__item btn">Создать c Axios</button>
                        </div>
                    </div>

                    <div class="btns__method">
                        <div class="btns__subheader">Получить задачу (GET)</div>
                        <div class="btns__wrapper">
                            <button id="get-xml-task" class="btns__item btn">Получить c XML</button>
                            <button id="get-fetch-task" class="btns__item btn">Получить c Fetch</button>
                            <button id="get-axios-task" class="btns__item btn">Получить c Axios</button>
                        </div>
                    </div>

                    <div class="btns__method">
                        <div class="btns__subheader">Редактировать задачу (PUT)</div>
                        <div class="btns__wrapper">
                            <button id="put-xml-task" class="btns__item btn">Редактировать с XML</button>
                            <button id="put-fetch-task" class="btns__item btn">Редактировать с Fetch</button>
                            <button id="put-axios-task" class="btns__item btn">Редактировать с Axios</button>
                        </div>
                    </div>

                    <div class="btns__method">
                        <div class="btns__subheader">Удалить задачу (DELETE)</div>
                        <div class="btns__wrapper">
                            <button id="delete-xml-task" class="btns__item btn">Удалить с XML</button>
                            <button id="delete-fetch-task" class="btns__item btn">Удалить с Fetch</button>
                            <button id="delete-axios-task" class="btns__item btn">Удалить с Axios</button>
                        </div>
                    </div>
                </div>
            </section>`;
}

export { getBtnsForTasks }