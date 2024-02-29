<template>
  <h1>Создать нового персонажа</h1>
  <div class="card mb-4">
    <div class="card-body">
      <form class="row g-3">
        <div class="mb-3">
          <label for="title" class="form-label">Название</label>
          <input
            type="text"
            class="form-control"
            id="title"
            name="title"
            placeholder="Иван Иванов"
          />
        </div>

        <div class="col-md-6">
          <label for="role" class="form-label">Роль в истории</label>
          <select id="role" class="form-select">
            <option selected>Главная</option>
            <option>Второстепенная</option>
            <option>Эпизодическая</option>
            <option>Не установлено</option>
          </select>
        </div>

        <div class="col-md-2">
          <label for="age" class="form-label">Возраст</label>
          <input type="number" class="form-control" id="age" />
        </div>

        <div class="col-md-4">
          <label for="sex" class="form-label">Пол</label>
          <select id="sex" class="form-select">
            <option selected>Мужчина</option>
            <option>Женщина</option>
            <option>Прочее</option>
            <option>Не установлено</option>
          </select>
        </div>

        <div class="mb-3">
          <label for="description" class="form-label">Краткое описание</label>
          <textarea
            class="form-control"
            id="description"
            rows="3"
            placeholder="Главный герой"
          ></textarea>
        </div>

        <div class="mb-3">
          <label for="description" class="form-label">Подробное описание</label>
          <textarea
            class="form-control"
            id="description"
            rows="3"
            placeholder="Сын главы мафии 22-ух лет. Ничем не примечательный кроме того, что играет на гитаре."
          ></textarea>
        </div>

        <div class="mb-3">
          <button type="submit" class="btn btn-primary">Сохранить</button>
        </div>
      </form>
    </div>
  </div>

  <div class="card mb-4">
    <div class="card-header">История</div>

    <div class="card-body">
      <div class="mb-3">
        <label for="title" class="form-label">Внешняя цель</label>
        <input
          type="text"
          class="form-control"
          id="title"
          name="title"
          placeholder="Внешняя цель"
        />
      </div>

      <div class="mb-3">
        <label for="title" class="form-label">Внутренняя цель</label>
        <input
          type="text"
          class="form-control"
          id="title"
          name="title"
          placeholder="Внутренняя цель"
        />
      </div>

      <div class="mb-3">
        <label for="title" class="form-label">Исходные убеждения</label>
        <input
          type="text"
          class="form-control"
          id="title"
          name="title"
          placeholder="Исходные убеждения"
        />
      </div>

      <div class="mb-3">
        <label for="title" class="form-label">Измененные убеждения</label>
        <input
          type="text"
          class="form-control"
          id="title"
          name="title"
          placeholder="Измененные убеждения"
        />
      </div>

      <div class="mb-3">
        <label for="title" class="form-label">Что приводит к изменениям</label>
        <input
          type="text"
          class="form-control"
          id="title"
          name="title"
          placeholder="Что приводит к изменениям"
        />
      </div>

      <div class="mb-3">
        <label for="title" class="form-label">Первое появление</label>
        <input
          type="text"
          class="form-control"
          id="title"
          name="title"
          placeholder="Первое появление"
        />
      </div>

      <div class="mb-3">
        <label for="title" class="form-label">Вовлеченность в сюжет</label>
        <input
          type="text"
          class="form-control"
          id="title"
          name="title"
          placeholder="Вовлеченность в сюжет"
        />
      </div>

      <div class="mb-3">
        <label for="title" class="form-label">Конфликт</label>
        <input
          type="text"
          class="form-control"
          id="title"
          name="title"
          placeholder="Конфликт"
        />
      </div>

      <div class="mb-3">
        <label for="title" class="form-label">Решающий момент</label>
        <input
          type="text"
          class="form-control"
          id="title"
          name="title"
          placeholder="Решающий момент"
        />
      </div>

      <a href="#" class="btn btn-primary">Сохранить</a>
    </div>
  </div>
</template>

<script setup></script>
<style lang=""></style>
