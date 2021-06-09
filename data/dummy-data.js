import CheckList from '../models/checkList';
import Image from '../models/image';
import Task from '../models/task';
import Condition from '../models/condition';
import Content from '../models/content';

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
     new Task('diagnostic', 'Диагностика', 'task'),
     new Task('hygiene', 'Гигиена сна', 'task'),
     new Task('breathing', 'Дыхательные техники', 'task'),
     new Task('relaxing', 'Упражнения релаксации', 'task'),
     new Task('findAround', 'Найдите вокруг себя', 'task'),
     new Task('cl1', 'Плохое самочувствие', 'checkList'),
     new Task('cl2', 'Правильный сон', 'checkList'),
     new Task('cl3', 'Забота о себе', 'checkList'),
];

export const CONTENT = [
     new Content('co1', 'check', 'cl3', 'Я ел что-то в последние 4-5 часов?'),
     new Content(
          'co2',
          'check',
          'cl3',
          'Общался ли я с кем-то последние 2 дня?'
     ),
     new Content('co3', 'check', 'cl1', 'травма произошла менее 3 дней назад'),
     new Content(
          'co4',
          'check',
          'cl1',
          'не можете контактировать с другими людьми'
     ),
     new Content('co5', 'check', 'cl2', 'сон'),
     new Content(
          'co6',
          'advice',
          'cl3',
          'Вы отметили 6 и более пунктов, обратитесь к врачу-психотерапевту. Сделайте звонок клиническому психологу, психиатру врачу-психотерапевту для получения эффективной и профессиональной помощи. Примерный текст для звонка: «Я получил травму, и возможно, нахожусь в состоянии шока. Мне рекомендовано позвонить специалисту и попросить его консультации»'
     ),
];

export const CONDITIONS = [
     new Condition('con1', ['c1', 'c2'], 'cl1'),
     new Condition('con2', ['c4'], 'cl2'),
];
