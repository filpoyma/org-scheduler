##  Приложения для организации пар студентов во время обучения

##  Технологии
React, Redux, NodeJS, Express, MongoDB, MaterialUI

##  Сайт
https://pairs-generator.onrender.com/

##  Запуск (dev c локальной БД)
npm install      - в корневой папке
npm install      - в ./client папке
npm run seed  
npm run dev-back - из корневой папки
npm start        - из ./client папки

##  Запуск (dev c удаленной тестовой БД)
npm install                          - в корневой папке
npm install                          - в ./client папке
NODE_ENV=prodtest npm run seed  
NODE_ENV=prodtest npm run dev-back   - из корневой папки
npm start                            - из ./client папки

##  Запуск (production)
npm install  
NODE_ENV=production npm run seed  
npm run build  
NODE_ENV=production npm start

### Редактирование группы

- при удалении студента из группы он попадает в группу inactive
- при удалении группы ее студенты попадает в группу inactive

- для переноса студента внутри одного типа групп - зайти в группу -> редактировать и выбрать нужного студента из списка. студент добавиться в текущую группу и удалиться из которой он был
- для переноса студентов из другого типа группы (напр. online -> msk) - выбрать студента -> редактирование -> перенести студента в нужную группу.

- студенты из группы waitlist видны для добавлении в группу во время ее редактирования
- студенты из группы inactive не видны в списке групп

### Редактирование студента
- для переноса студента в какую либо группу - перейдите в его профиль, нажмите кнопку Edit
