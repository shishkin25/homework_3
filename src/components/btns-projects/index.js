function getBtnsForProjects() {
    return `<section class="btns">
                <div class="container">
                    <div class="btns__method">
                        <div class="btns__subheader">Создать проект (POST)</div>
                        <div class="btns__wrapper">
                            <button id="post-xml-project" class="btns__item btn">Создать c XML</button>
                            <button id="post-fetch-project"class="btns__item btn">Создать c Fetch</button>
                            <button id="post-axios-project" class="btns__item btn">Создать c Axios</button>
                        </div>
                    </div>

                    <div class="btns__method">
                        <div class="btns__subheader">Получить проект (GET)</div>
                        <div class="btns__wrapper">
                            <button id="get-xml-project" class="btns__item btn">Получить c XML</button>
                            <button id="get-fetch-project" class="btns__item btn">Получить c Fetch</button>
                            <button id="get-axios-project" class="btns__item btn">Получить c Axios</button>
                        </div>
                    </div>

                    <div class="btns__method">
                        <div class="btns__subheader">Редактировать проект (PUT)</div>
                        <div class="btns__wrapper">
                            <button id="put-xml-project" class="btns__item btn">Редактировать с XML</button>
                            <button id="put-fetch-project" class="btns__item btn">Редактировать с Fetch</button>
                            <button id="put-axios-project" class="btns__item btn">Редактировать с Axios</button>
                        </div>
                    </div>

                    <div class="btns__method">
                        <div class="btns__subheader">Удалить проект (DELETE)</div>
                        <div class="btns__wrapper">
                            <button id="delete-xml-project" class="btns__item btn">Удалить с XML</button>
                            <button id="delete-fetch-project" class="btns__item btn">Удалить с Fetch</button>
                            <button id="delete-axios-project" class="btns__item btn">Удалить с Axios</button>
                        </div>
                    </div>
                </div>
            </section>`;
}

export { getBtnsForProjects }