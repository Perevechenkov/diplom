import Image from '../models/image';
import Task from '../models/task';

export const IMAGES = [
     new Image(
          'c1',
          'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRknZKVJqi9kac2VjfQlBetRDaL0XEcwcEvwZWpX_hlSzUWpqe5SBOHMRVavD0VhhdCQUU6fBUJ3zFkwg1TfX8'
     ),
     new Image(
          'c2',
          'https://learnenglishteens.britishcouncil.org/sites/teens/files/styles/article/public/field/image/rs930_135120665-low.jpg?itok=g5LI5W4C'
     ),
     new Image(
          'c3',
          'https://www.floraqueen.com/blog/wp-content/uploads/2020/03/shutterstock_381952246.jpg'
     ),
     new Image(
          'c4',
          'https://upload.wikimedia.org/wikipedia/commons/9/98/F5_tornado_Elie_Manitoba_2007.jpg'
     ),
     new Image(
          'c5',
          'https://images.unsplash.com/photo-1611735547606-7b45fe8b137d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2ludGVyJTIwZm9yZXN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
     ),
];

export const TASKS = [
     new Task(
          'diagnostic',
          'Диагностика',
          ['checkList', 'c1', 'c2'],
          'checkList'
     ),
     new Task('checkList', 'Диагностика', null, 'hygiene'),
     new Task('hygiene', 'Гигиена сна', null, null),
     new Task('breathing', 'Дыхательные техники', null, null),
     new Task('relaxing', 'Упражнения релаксации', null, null),
];
