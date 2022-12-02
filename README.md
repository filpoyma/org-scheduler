##  Приложения для организации пар студентов во время обучения

##  Технологии
React, Redux, NodeJS, Express, MongoDB, MaterialUI

##  Сайт
https://pairs-generator.onrender.com/

##  Запуск (production)
npm install  
npm run seed  
npm run build  
npm start

##  Запуск (dev c локальной БД)
npm install      - в корневой папке
npm install      - в ./client папке
npm run seed  
npm run dev-back - из корневой папки
npm start        - из ./client папки

##  Запуск (dev c удаленной тестовой БД)
npm install                          - в корневой папке
npm install                          - в ./client папке
npm run seed  
NODE_ENV=prodtest npm run dev-back   - из корневой папки
npm start                            - из ./client папки

### Редактирование группы
- при удалении студента из группы он попадает в группу inactive
- при удалении группы ее студенты попадает в гр. inactive
- для переноса студента внутри одного типа групп - зайти в группу -> редактировать и выбрать нужного студента из списка. студент добавиться в текущую группу и удалиться из которой он был
- студенты из группы inactive не видны в списке групп

### Редактирование студента
- для переноса студента в какую либо группу - перейдите в его профиль, нажмите кнопку Edit
