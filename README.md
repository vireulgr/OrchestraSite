<<<<<<< HEAD
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
=======
# OrchestraSite

# ТЗ для сайта оркестра

## Общие требования
HTTPS, сертификат от let’s encrypt
## Разделы сайта
**Главная страница** c фотокой оркестра, лого петербургконцера, лого оркестра, лого министерства культуры СПб, с официальным названием оркестра

**Новости**
просто список постов, посты помимо текста, могут содержать картинки, ссылки, видео.

**Календарь мероприятий**
Выглядит как календарь на месяц, на котором дни, в которые идут выступления оркестра, как-то выделены. При клике на этот день открывается список событий в этот день. Каждый элемент списка - краткое описание события со ссылкой на продажу билетов.

**Медиа**
Фото и видеогалерея, другие материалы, упоминания в прессе со ссылками на источники

**Об оркестре**
Текст об оркестре, список участников оркестра со ссылками на их страницы на этом же сайте

**Контакты**
Контакты концертмейстера, контакты директора оркестра
## Админка
Нужно предоставить администратору сайта возможность создавать/удалять/редактировать записи, посты, медиа-объекты и остальные сущности на сайте.
### Форма загрузки медиа-объектов
Видео, фото, статьи
### Форма редактирования таблиц
События, Новости, Галерея - предусмотреть возможность группировки медиа-объектов в альбомы
### Форма редактирования контактной информации
Добавление/удаление/редактирование контактов администрации оркестра
### Форма редактирования информации об оркестре
Возможность добавления/удаления/редактирования страниц с информацией об участниках оркестра
## Сущности
### Новость
Дата публикации, текст, название
### Медиа-объект
Сюда относятся видео, фотографии, большие текстовые статьи. Сам объект должен храниться на жёстком диске, в БД должен храниться только путь. Для всех медиа-объектов на сайте должна быть отдельная таблица, содержащая внутренний ID объекта, путь на диске, дату добавления на сайт, дату создания самого объекта, геотег (опционально).
### Медиа-альбом
Логическая сущность, содержит список медиа-объектов и других медиа-альбомов. Добавляет иерархичность в коллекцию медиа-объектов.

Содержит ID, список медиа-объектов и медиа-альбомов, дату создания
### Событие
Для календаря.
Дата добавления, текст, название, краткое описание, дата события, ссылка на билеты или на сайт заведения, где будет проводиться.
## Backend
Предусмотреть возможность хранения медиа-объектов
БД для хранения инфы
>>>>>>> e7aecabe8d905931d8d4a805612249d1c46638a8
