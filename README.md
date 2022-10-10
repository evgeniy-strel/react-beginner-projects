# Проекты для начинающих на ReactJS

Все проекты разработаны для бесплатного курса на канале [Archakov Blog](https://www.youtube.com/c/ArchakovBlog)

Каждый проект хранится в отдельной ветке и переписан на TypeScript.

## Счётчик
![1660249082356](https://user-images.githubusercontent.com/12086860/184235207-2d20299a-0b9a-40e6-acf7-be582f6ecbfe.png)

**🌿 Ветка**: `counter`

🔥 Реализация через хук useState.

## Модальное окно
![1660249510674](https://user-images.githubusercontent.com/12086860/184235807-bfb5d74b-68dc-4903-8b15-e18f6427fcc2.png)

**🌿 Ветка**: `modal`

🔥 Реализация всплывающего анимированного модального окна через хук useState.

## Quiz (опросник)
![1660249609940](https://user-images.githubusercontent.com/12086860/184236063-9f807f93-f6a4-4577-9a12-443ff1d3fd43.png)

**🌿 Ветка**: `quiz`

🔥Реализовано:
1. Поэтапный рендер
2. ProgressBar до окончания текста
3. Анимированное градиентное background body.
4. Каждый раз генерируется случаный порядок вопросов и вариантов ответа через метод Shuffle.
5. В конце теста показывается количество правильных ответов, а также разбор полетов(ответ пользователя и правильный вариант ответа у каждого вопроса).
6. Возможность пройти тест заново.

## Список гостей (пользователей)
![image](https://user-images.githubusercontent.com/82458628/194759049-8d04a421-de58-4b31-8e76-26e9fbb959aa.png)

**🌿 Ветка**: `users`

🔥Реализовано:
1. Скелетон с помощью библиотеки `react-content-loader`
2. Получение пользователей с сервера.
3. Поиск пользователей по имени/фамилии/почте.
4. Добавление пользователей в список приглашенных.
5. "Отправка" добавленных пользователей на сервер.
6. Окно об успешной отправки данных и возможность перейти назад.

## Конвертер валют
![image](https://user-images.githubusercontent.com/82458628/194948698-530c4975-ee38-45c0-8236-b4af727b493c.png)

**🌿 Ветка**: currency-converter

Идея взята с https://cash.rbc.ru/converter.html?from=USD&to=RUR&sum=25&date=2022-10-10&rate=cbrf

🔥 Реализовано:
1. Получение курсов валют по отношению к доллару через API: https://cur.su/pages/api
2. Логика конвертации валют.
3. Возможность выбора дополнительных валют через стрелочку.
4. Свап валют местами.

**🌿 Ветка**: `photos`

**👀 Что изучим?**
1. Фильтрация коллекций с помощью категорий
2. Поиск коллекций
3. Пагинация
4. Получение, пагинация через бэкенд
5. Отображение информации о загрузке контента
