const CATEGORIES = {
  lipstick: {
    name: 'lipstick',
    title: 'Помада',
    image: 'images/Product_1.png',
  },
  lipgloss: {
    name: 'lipgloss',
    title: 'Блеск для губ',
    image: 'images/Product_4.png',
  },
  eyeliner: {
    name: 'eyeliner',
    title: 'Подводка',
    image: 'images/Product_5.png',
  },
  palette: {
    name: 'palette',
    title: 'Палетка теней',
    image: 'images/Product_3.png',
  },
  mascara: {
    name: 'mascara',
    title: 'Цветная тушь',
    image: 'images/Product_2.png',
  },
  other: {
    name: 'other',
    title: 'Прочее',
    image: 'images/Product_6.png',
  },
}

const PRODUCTS_LIST = [
  {
    id: 1,
    category: 'lipstick',
    title: 'LUXVISAGE Губная помада перламутровая тон 3 / макияж',
    description: 'Перламутровая помада LUXVISAGE содержит 95% натуральных компонентов, эффективно питает нежную кожу губ. Роскошная гамма мерцающих оттенков обладает высокой цветопередачей и обеспечивает плотное сияющее покрытие.',
    params: ['Цвет: красный', 'Вес, г: 100', 'Страна-изготовитель: Франция', 'Упаковка: Подарочная упаковка'],
    price: 456,
    image: 'https://ir.ozone.ru/s3/multimedia-o/wc1000/6132623736.jpg',
    reviews: [
      {
        name: 'Наталья Т.',
        text: 'Помада хорошая, но мне, сожаленю, не подошла',
        raiting: 4,
      },
      {
        name: 'Светлана У.',
        text: 'Мой любимый цвет, спасибо всё в целостности.',
        raiting: 5,
      },
    ]
  },

  {
    id: 2,
    category: 'lipstick',
    title: 'Розовая помада Herms Rosewood (No 30) губная помада',
    description: 'Коллекция косметики для губ Hermès – это коллекция для красоты губ. Это уникальные объекты, разработанные Пьером Харди, которые сочетают в себе поэзию, функциональность и переработку. Оболочка помады действительно экологична, изготовлена из лакированного, позолоченного, глянцевого металла, слегка завернута в холщовую оболочку и помещена в крошечную оранжевую коробочку.',
    params: ['Цвет: розовый', 'Вес, г: 100', 'Страна-изготовитель: Франция', 'Упаковка: Подарочная упаковка'],
    price: 1435,
    image: 'https://ir.ozone.ru/s3/multimedia-a/wc1000/6673421494.jpg',
    reviews: [],
  },

  {
    id: 3,
    category: 'lipstick',
    title: 'Nice View Помада для губ 104-074/ сахарный коралл',
    description: 'Коллекция увлажняющих губных помад Nice View дает возможность подобрать цвет к любому наряду, случаю и настроению. Благодаря особой увлажняющей формуле, содержащей витамин Е, губная помада восполняет естественную влажность губ, продает им эластичность и насыщенный цвет.',
    params: ['Цвет: красный', 'Вес, г: 5', 'Страна-изготовитель: Китай', 'Единиц в одном товаре: 1'],
    price: 173,
    image: 'https://ir.ozone.ru/s3/multimedia-1-y/wc1000/7018580770.jpg',
    reviews: [
      {
        name: 'Инна Р.',
        text: 'Не понравилась. Очень крупные блёстки, дёшево смотрится.',
        raiting: 3,
      },
      {
        name: 'Светлана Б.',
        text: 'Помада неочëм, совсем ее нет на губах может на любителя, но не мой вариант. ',
        raiting: 3,
      },
      {
        name: 'Варвара В.',
        text: 'Яркая, для танцев хорошо подойдёт',
        raiting: 5,
      },
    ]
  },

  {
    id: 4,
    category: 'lipgloss',
    title: 'Блеск для губ глянцевый с оттенком увлажняющий Charlotte',
    description: 'Глянцевый блеск в уникальном, трендовом оттенке – идеальное решение для создания нежного и соблазнительного лука. Жидкий блеск не просто придает красивый цвет, но и оснащен увеличивающей формулой, которая визуально увеличивает объем, делая губы более пухлыми и позволяя вам выглядеть сногсшибательно! ',
    params: ['Цвет: Charlotte', 'Вес, г: 40', 'Страна-изготовитель: Россия', 'Упаковка: Туба, Картонная коробка'],
    price: 356,
    image: 'https://ir.ozone.ru/s3/multimedia-w/wc1000/6818882144.jpg',
    reviews: [
      {
        name: 'Ольга Г.',
        text: 'Отличное качество, но с цветом немного ошиблась.',
        raiting: 5,
      },
      {
        name: 'Жанна С.',
        text: 'Блеск суховатый, оттенок немного отдаёт в рыжий.. Вообще м.. За такие деньги можно приобрести лучше. 3+',
        raiting: 3,
      },
    ]
  },

  {
    id: 5,
    category: 'lipgloss',
    title: 'LUXVISAGE HOT VANILLA LIP блеск для губ volumizer плампер тон 303',
    description: 'Блеск-плампер для губ LIP volumizer hot vanilla плампер создает временный эффект увеличения объема губ, делает контур более четким, разглаживает мелкие морщинки, усиливает яркость цвета губ за счет согревающего действия.',
    params: ['Цвет: 303', 'Страна-изготовитель: Беларусь', 'Единиц в одном товаре: 1', 'Целевая аудитория: Взрослая'],
    price: 281,
    image: 'https://ir.ozone.ru/s3/multimedia-i/wc1000/6192277350.jpg',
    reviews: [
      {
        name: 'Надежда Х.',
        text: 'Отличный товар. Беру 3 раз',
        raiting: 5,
      },
      {
        name: 'Ирина С.',
        text: 'Сильно щипет губы. Не очень это понравилось. ',
        raiting: 4,
      },
      {
        name: 'Елена Н.',
        text: 'Блеск мне понравился. Приятная текстура, аромат, только снизила оценку за то, что он немного покалывает. Эффекта особо никакого не дает хотя бы в мизерном увеличении губ. Я пользовалась пламперами и лучше. ',
        raiting: 4,
      },
    ]
  },

  {
    id: 6,
    category: 'eyeliner',
    title: 'Подводка для глаз водостойкая УГОЛЬНО ЧЕРНАЯ Million Pauline',
    description: 'Откройте для себя секрет идеального макияжа глаз с нашей подводкой-фломастером. Создавайте ультрагладкие линии, которые сохраняют свою форму в течение всего дня. ',
    params: ['Цвет: Черный', 'Объем, мл: 5', 'Вес, г: 10', 'Страна-изготовитель: Китай'],
    price: 330,
    image: 'https://ir.ozone.ru/s3/multimedia-f/wc1000/6883194795.jpg',
    reviews: [
      {
        name: 'Наташа Г.',
        text: 'Красивый маркер, кисточка удобная, но как будто подводка уже высохла ',
        raiting: 4,
      },
      {
        name: 'Эльвира М.',
        text: 'Удобная подводка',
        raiting: 5,
      },
      {
        name: 'Алена Ф.',
        text: 'Подводка отличная, хорошо рисует, водостойкая',
        raiting: 5,
      },
      {
        name: 'Татьяна С.',
        text: 'Заказала товар за 330₽, прислали другой вариант намного дешевле. Может она тоже хорошая, но я выбирала и оплачивала другой товар, поэтому за такой обман 1 звезда. ',
        raiting: 1,
      },
    ]
  },

  {
    id: 7,
    category: 'eyeliner',
    title: 'JEANMISHEL Подводка для глаз стрелок Perfect Line ONE фломастер лайнер маркер жидкая черная',
    description: 'Подводка с интенсивным пигментом позволяет легко рисовать тонкие линии и четкие стрелки. Тонким кончиком кисти удобно управлять - просто надавите на него чуть сильнее и вы получите идеальную стрелку, даже если очень торопитесь.',
    params: ['Цвет: Черный', 'Страна-изготовитель: Россия', 'Целевая аудитория: Взрослая', 'Вид подводки: Фломастер'],
    price: 181,
    image: 'https://ir.ozone.ru/s3/multimedia-3/wc1000/6381944523.jpg',
    reviews: [
      {
        name: 'Ирина К.',
        text: 'Самая лучшая и удобная подводка, беру не первый раз',
        raiting: 5,
      },
      {
        name: 'Даяна Л.',
        text: 'В целом хорошая, но сохнет быстро, не успеваешь сделать стрелку, как фломастер высыхает ',
        raiting: 4,
      },
      {
        name: 'Кристина Б.',
        text: 'Подводка хорошая, рисует очень тонко, но очень быстро заканчивается',
        raiting: 3,
      },
      {
        name: 'Алиса М.',
        text: 'Мне понравилась! Хороший кончик, быстро схватывается на веке, легко смывается. ',
        raiting: 5,
      },
    ]
  },

  {
    id: 8,
    category: 'palette',
    title: 'Eyeshadow palette Golden brown Тени для век Stellary',
    description: '',
    params: ['Цвет: Golden Brown', 'Бренд: Stellary', 'Вес, г: 13,44', 'Страна-изготовитель: Китай'],
    price: 579,
    image: 'https://ir.ozone.ru/s3/multimedia-1-9/wc1000/6973666737.jpg',
    reviews: [
      {
        name: 'Екатерина Ч.',
        text: 'Отличная пигментация',
        raiting: 5,
      },
      {
        name: 'Наталья Е.',
        text: 'Не смотря на то, что товар никак(!) не был упакован, тени пришли целыми, наклейка озон прям сверху наклеили, спасибо что я себе брала, а не на подарок.',
        raiting: 4,
      },
      {
        name: 'Екатерина Б.',
        text: 'Тени понравились, пришли целые, рекомендую',
        raiting: 5,
      },
    ]
  },

  {
    id: 9,
    category: 'palette',
    title: 'Тени для век MAXI RELOADED PALETTE Big Shot',
    description: '45 высокопигментированных оттенков, которые идеально сочетаются друг с другом и вдохновляют на создание красивых образов.',
    params: ['Цвет: Big Shot', 'Объем, мл: 61', 'Вес, г: 891', 'Страна-изготовитель: Великобритания'],
    price: 2078,
    image: 'https://ir.ozone.ru/s3/multimedia-b/wc1000/6844054907.jpg',
    reviews: [
      {
        name: 'Евгения К.',
        text: 'Отличная палетка для нюдовых и не только образов. Большое количество оттенков, ложатся плотно, даже без нанесения основы. Держаться долго, не размазываются. Покупкой более чем довольна ',
        raiting: 5,
      },
      {
        name: 'Валерия М.',
        text: 'Очень нравится эта палетка. Универсальная, хорошо пигментированная, прекрасно наносятся с помощью кистей и не пылят. Беру палетки этой фирмы не первый раз, очень нравятся, не уступают более дорогим. Советую',
        raiting: 5,
      },
      {
        name: 'Алевтина Н.',
        text: 'Пришла в отличном состоянии, без повреждений, пигментация хорошая',
        raiting: 5,
      },
    ]
  },
  
  {
    id: 10,
    category: 'mascara',
    title: 'Тушь для ресниц цветная сине-фиолетовая удлиняющая для объема с эффектом накладных ресниц разделяющая подкручивающая для макияжа глаз',
    description: 'Ультрамодный цвет для самых дерзких и смелых образов. Она знает, что делать с ресницами. Насыщенный пигмент, экстремальный объем и неклассический оттенок.',
    params: ['Цвет: Violet', 'Страна-изготовитель: Беларусь', 'Виды туши: Объемная', 'Упаковка: Флакон'],
    price: 657,
    image: 'https://ir.ozone.ru/s3/multimedia-t/wc1000/6736170593.jpg',
    reviews: [
      {
        name: 'Елена Е.',
        text: 'Спасибо за новую тушь. Была защищена спец.упаковкой от вскрытия. Впервые за многие годы почувствовала запах свежей туши и клокочащий звук на ограничителе туши. Тушь действительно свежая. Ее много. Единственная тушь, с которой получается накрасить мои "три" ресницы и выглядеть достойно. Благодарю! ',
        raiting: 5,
      },
      {
        name: 'Кириаки П.',
        text: 'Прокрашивает мои ровные ресницы хорошо. Керлером не пользуюсь. Но тем не менее тушью подкручиваю ресницы',
        raiting: 5,
      },
      {
        name: 'Ольга Г.',
        text: 'Не сыпется, комков нет. Понравилось. Дополняю отзыв- радости хватило ненадолго,Через пару недель использования начала сыпаться. Разочарована',
        raiting: 3,
      },
    ]
  },

  {
    id: 11,
    category: 'mascara',
    title: 'Handaiyan Тушь цветная неоновая для ресниц светящаяся в ультрафиолете',
    description: 'Цветная неоновая тушь HANDAIYAN придает ресницам выразительность и яркость. Насыщенный и смелый оттенок помогает создавать дерзкий макияж, подчеркивает красоту взгляда и открывает новые возможности для самовыражения - тушь светится под воздействием ультрафиолета (например, на дискотеке в клубе).',
    params: ['Цвет: #04 Розовый', 'Страна-изготовитель: Китай', 'Виды туши: Удлиняющая', 'Упаковка: Картонная коробка'],
    price: 235,
    image: 'https://ir.ozone.ru/s3/multimedia-8/wc1000/6782458436.jpg',
    reviews: [
      {
        name: 'олеся с.',
        text: 'Тушь хорошая, но ни многа суховата ',
        raiting: 4,
      },
      {
        name: 'Татьяна К.',
        text: 'Данный товар мне не подошел. На мои ресницы плохо ложится, ресницы между собой слипаются, щетка отстой. Жаль что уже вернуть нельзя',
        raiting: 1,
      },
      {
        name: 'ксения С.',
        text: 'Цвет классный но щеточка отстой ',
        raiting: 3,
      },
    ]
  },

  {
    id: 12,
    category: 'other',
    title: 'Консилер для лица и глаз Sparcli тон 01, корректор для лица, корректор для глаз',
    description: 'Консилер-корректор для лица и глаз - это уникальное средство, которое способно скрывать любые несовершенства и покраснения кожи, маскировать темные круги под глазами, делать морщинки менее заметными и устранять пигментные пятна. ',
    params: ['Цвет: Тон 01 Светло-бежевый', 'Объем, мл: 3.2', 'Вес, г: 3.2', 'Страна-изготовитель: Китай'],
    price: 288,
    image: 'https://ir.ozone.ru/s3/multimedia-1-r/wc1000/6967222263.jpg',
    reviews: [
      {
        name: 'Ксюша Ж.',
        text: 'Отличный консилер! Меня устраивает полностью! Советую',
        raiting: 5,
      },
      {
        name: 'Юлия С.',
        text: 'Вроде сначала появилась аллергия, покраснело лицо, решила проверить еще раз на коже, со второго применения все было хорошо. Тон ложится ровно, перекрывает красноту и синяки ',
        raiting: 5,
      },
    ]
  },

  {
    id: 13,
    category: 'other',
    title: 'Румяна для лица кремовые розовые матовые, тинт, тени 3в1 B.COLOUR PROFESSIONAL',
    description: 'Румяна для лица B.COLOUR PROFESSIONAL CAPSULE 04 Naked с натуральным оттенком и матовым бархатистым финишем легко тушуются и стойко держатся на коже 12 часов. Румяна мультифункциональны и заменяют сразу 3 средства в твоей косметичке: румяна кремовые, тинт для губ и тени для век.',
    params: ['Цвет: 04 Naked', 'Бренд: 7DAYS', 'Вес, г: 3', 'Страна-изготовитель: Италия'],
    price: 358,
    image: 'https://ir.ozone.ru/s3/multimedia-1-d/wc1000/6952150849.jpg',
    reviews: [
      {
        name: 'Анна М.',
        text: 'Супер качество, нежная текстура. Очень довольна.нанесла на губы после бальзама, плюс в качестве румян и теней, все гармонично смотрится. Освежает нереально. Думала ,что будет мощный ярко 🍊, а на деле деликатный персиковый. Подойдёт смуглым девочкам с теплым тоном кожи. ',
        raiting: 5,
      },
      {
        name: 'Вероника П.',
        text: 'румяна очень хорошие, мне понравились',
        raiting: 5,
      },
      {
        name: 'Алина Л.',
        text: 'Очень приятная консистенция, красивая упаковка, сами румяна классные, легко тушуются',
        raiting: 5,
      },
    ]
  },

  {
    id: 14,
    category: 'other',
    title: 'Крем для лица тональный Чистая Линия. Мгновенное преображение с экстрактом розы 40 мл',
    description: 'Восхищайте ровным и сияющим тоном лица с кремом 10 в 1 Идеальная кожа от бренда Чистая Линия. Его невесомая текстура со светоотражающими частицами мгновенно преображает кожу. Средство ровно ложится, не создавая эффект маски. Экстракт розы увлажняет и улучшает цвет лица. ',
    params: ['Цвет: Светло-бежевый', 'Бренд: Чистая Линия', 'Страна-изготовитель: Россия', 'Упаковка: Коробка'],
    price: 194,
    image: 'https://ir.ozone.ru/s3/multimedia-1-t/wc1000/6958255301.jpg',
    reviews: [
      {
        name: 'Юлия П.',
        text: 'Все отлично, скоро закажу ещё:)',
        raiting: 5,
      },
      {
        name: 'Людмила Н.',
        text: 'Хороший увлажняющий, тонирующий, защищающий от солнца крем с лёгкой текстурой.',
        raiting: 5,
      },
      {
        name: 'Элина Н.',
        text: 'Тонирует замечательно ',
        raiting: 5,
      },
    ]
  },

];