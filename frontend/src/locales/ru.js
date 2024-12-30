const translation = {
  translation: {
    header: {
      title: 'Hexlet Chat',
      logout: 'Выйти',
    },
    loginForm: {
      login: 'Войти',
      username: 'Ваш ник',
      password: 'Пароль',
      footerText: 'Нет аккаунта? ',
      signUp: 'Регистрация',
    },
    signUpForm: {
      signUp: 'Регистрация',
      username: 'Имя пользователя',
      password: 'Пароль',
      confirmPassword: 'Подтвердите пароль',
      signUpBtn: 'Зарегистрироваться',
    },
    chat: {
      channels: 'Каналы',
      newMessage: 'Новое сообщение',
      enterMessage: 'Введите сообщение...',
      send: 'Отправить',
      message_one: '{{count}} сообщение',
      message_few: '{{count}} сообщения',
      message_many: '{{count}} сообщений',
      manage: 'Управление каналом',
      plus: '+',
    },
    notFoundPage: {
      title: 'Страница не найдена',
      proposal: 'Но вы можете перейти ',
      direct: 'на главную страницу',
    },
    errors: {
      invalidData: 'Неверные имя пользователя или пароль',
      minMaxLength: 'От 3 до 20 символов',
      required: 'Обязательное поле',
      minLength: 'Не менее 6 символов',
      passwordMatch: 'Пароли должны совпадать',
      userExists: 'Такой пользователь уже существует',
      channelExists: 'Должно быть уникальным',
    },
    toasts: {
      addChannel: 'Канал создан',
      removeChannel: 'Канал удалён',
      renameChannel: 'Канал переименован',
      connectionError: 'Ошибка соединения',
    },
    modals: {
      addTitle: 'Добавить канал',
      removeTitle: 'Удалить канал',
      renameTitle: 'Переименовать канал',
      channelName: 'Имя канала',
      cancel: 'Отменить',
      send: 'Отправить',
      remove: 'Удалить',
      rename: 'Переименовать',
      text: 'Уверены?',
    },
  },
};

export default translation;
