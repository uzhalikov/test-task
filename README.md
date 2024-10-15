Приложение запускается в два терминала(клиент/сервер)
1. В первом терминале переходим в папку client, вводим следующие команды:
 - npm i
 - npm run dev
2. Во втором терминале переходим в папку server, вводим следующие команды:
 - python -m venv venv
 - source venv/bin/activate (если linux), call venv/Scripts/activate(если windows)
 - pip install -r requirements.txt
 - python manage.py runserver
Клиентская часть будет работать на: http://localhost:5173/ (При клике на строки логов, будет открываться модальное окно с доп. данными)
Серверная: http://localhost:8000/
Эндпоинты: api/logs/ и api/logs/<id>
Доступ к панели администратора: http://localhost:8000/admin/
УЗ: login: adm, password: adm
