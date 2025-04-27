import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, StatusBar } from 'react-native';
import { Card, Switch, Provider as PaperProvider, useTheme } from 'react-native-paper';


const gamesData = [
  {
    id: 1,
    day: 1,
    title: "Первая видеоигра",
    description: "Первая видеоигра была создана в 1958 году физиком Уильямом Хигинботамом и называлась «Теннис для двоих».",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tennis_for_Two_-_The_Original_Video_Game.webm/220px--Tennis_for_Two_-_The_Original_Video_Game.webm.jpg",
    additionalInfo: "Разработана в Брукхейвенской национальной лаборатории"
  },
  {
    id: 2,
    day: 2,
    title: "Настоящее имя Пакмана",
    description: "Первоначально Пакман назывался «Пак-Мэн» в Японии. Имя изменили для международного релиза.",
    image: "https://gamelayer.ru/gameimg/igry-pakman.jpg",
    additionalInfo: "Выпущен в 1980 году компанией Namco"
  },
  {
    id: 3,
    day: 3,
    title: "Профессия Марио",
    description: "В оригинальной игре Donkey Kong Марио был плотником, а не водопроводчиком.",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRvT4JvwzuOjIRAxoUREwKXVTnn_b7k__ft24gV5X_GsXV394V85RO_9w63xTHhk1NHORtyceE6Hq5EzdG4zm6bZLldAl-b7PmKGmnjAA",
    additionalInfo: "Первое появление: Donkey Kong (1981)"
  },
  {
    id: 4,
    day: 4,
    title: "Самый продаваемый игровой сериал",
    description: "Сериал игр Mario является самым продаваемым в истории.",
    image: "https://tlum.ru/uploads/4e02b6355a6944e6fca892aa93a9898c9d99e41f6f7a1d1a076d906aa87c65a8.jpeg"
  },
  {
    id: 5,
    day: 5,
    title: "Рекорд GTA V",
    description: "GTA V заработала 1 миллиард долларов быстрее любого другого продукта.",
    image: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png"
  },
  {
    id: 6,
    day: 6,
    title: "Эволюция Соника",
    description: "Первоначально Соник должен был быть кроликом.",
    image: "https://mario.wiki.gallery/images/thumb/1/12/Tokyo2020triviasonic.png/250px-Tokyo2020triviasonic.png"
  },
  {
    id: 7,
    day: 7,
    title: "Секрет Тетриса",
    description: "Советская Россия не получала отчислений от Тетриса.",
    image: "https://img.fix-price.kz/800x800/_marketplace/images/origin/d9/d9e14b5cf0720de18a9a4316631618f8.jpg"
  },
  {
    id: 8,
    day: 8,
    title: "Самая длинная игра",
    description: "The Elder Scrolls II: Daggerfall имеет самую большую игровую карту.",
    image: "https://images.gog-statics.com/89dbf9cbf36f1f68194b3384042828320f80a75ac506e411f1b52c370abb9858_product_card_v2_mobile_slider_639.jpg"
  },
  {
    id: 9,
    day: 9,
    title: "Прототип Лары Крофт",
    description: "Лара Крофт вдохновлена певицей Нене Черри.",
    image: "https://upload.wikimedia.org/wikipedia/ru/0/04/Tomb_Raider_%282013_cover%29.jpg"
  },
  {
    id: 10,
    day: 10,
    title: "Рождение PlayStation",
    description: "PlayStation изначально была совместным проектом с Nintendo.",
    image: "https://i5.walmartimages.com/seo/Restored-Sony-PlayStation-Ps-One-PS1-Video-Game-Console-Refurbished_e488e6a3-3015-4557-ae56-b815e84a1545.a342c54f45e418540b85073f63aebd6a.jpeg"
  },
  {
    id: 11,
    day: 11,
    title: "Самый дорогой артефакт",
    description: "Копия Super Mario Bros. 1985 года была продана за 2 миллиона долларов.",
    image: "https://zn.ua/img/article/4644/32_main-v1628506130.jpg"
  },
  {
    id: 12,
    day: 12,
    title: "Тайна Half-Life 3",
    description: "Valve избегает цифры 3 из-за высоких ожиданий игроков.",
    image: "https://www.goha.ru/s/A:DH/gL/QIDwbdQrRk.jpg"
  },
  {
    id: 13,
    day: 13,
    title: "Рекорд Minecraft",
    description: "Minecraft — самая продаваемая игра в истории.",
    image: "https://upload.wikimedia.org/wikipedia/ru/f/f4/Minecraft_Cover_Art.png"
  },
  {
    id: 14,
    day: 14,
    title: "Происхождение Zelda",
    description: "Имя 'Zelda' вдохновлено Зельдой Фицджеральд.",
    image: "https://upload.wikimedia.org/wikipedia/ru/3/34/TLoZ_BotW_boxart.png"
  },
  {
    id: 15,
    day: 15,
    title: "Секрет Street Fighter II",
    description: "Рю и Кен изначально задумывались как один персонаж.",
    image: "https://upload.wikimedia.org/wikipedia/ru/thumb/1/1d/SF2_JPN_flyer.jpg/274px-SF2_JPN_flyer.jpg"
  },
  {
    id: 16,
    day: 16,
    title: "Рождение киберспорта",
    description: "Первый турнир прошёл в 1972 году по игре Spacewar!",
    image: "https://photobooth.cdn.sports.ru/preset/wysiwyg/5/8d/45727643f4b2a9175b183abaafb4d.jpeg"
  },
  {
    id: 17,
    day: 17,
    title: "Тайна Final Fantasy",
    description: "Изначально Final Fantasy должна была быть последней игрой студии.",
    image: "https://gmedia.playstation.com/is/image/SIEPDC/final-fantasy-hub-keyart-01-en-29jun23?$facebook$"
  },
  {
    id: 18,
    day: 18,
    title: "Рекорд Fortnite",
    description: "Fortnite заработала 9 миллиардов долларов за два года.",
    image: "https://cdn1.epicgames.com/offer/fn/FNBR_34-30_Dashberry_EGS_Launcher_KeyArt_Blade_2560x1440_2560x1440-2081d96515f8b67cb666c484e21f07b2"
  },
  {
    id: 19,
    day: 19,
    title: "Секрет Call of Duty",
    description: "В Call of Duty записаны настоящие звуки оружия.",
    image: "https://store-images.s-microsoft.com/image/apps.5980.13510798887669283.9f4cd29a-ecef-4566-87f3-692bc32ff679.306d08ab-fe63-4b65-811e-86c9cb091f28?h=1280"
  },
  {
    id: 20,
    day: 20,
    title: "Самая сложная игра",
    description: "Battletoads считается одной из самых сложных игр.",
    image: "https://upload.wikimedia.org/wikipedia/ru/e/e8/Battletoads_Coverart.png"
  },
  {
    id: 21,
    day: 21,
    title: "Рождение Xbox",
    description: "Xbox создавался как ПК для гостиной.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Xbox-console.jpg/330px-Xbox-console.jpg"
  },
  {
    id: 22,
    day: 22,
    title: "Секрет Resident Evil",
    description: "Resident Evil базируется на игре Sweet Home.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV8cM7ZGMKvjrIFR5N7NllmtVuK6HzLh1q6Q&s"
  },
  {
    id: 23,
    day: 23,
    title: "Рекорд Among Us",
    description: "Игра стала популярной через 2 года после релиза благодаря Twitch.",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Among_Us_cover_art.jpg/250px-Among_Us_cover_art.jpg"
  },
  {
    id: 24,
    day: 24,
    title: "Тайна Metal Gear Solid",
    description: "Изначально Кодзима хотел сделать реалистичный шпионский симулятор.",
    image: "https://m.media-amazon.com/images/M/MV5BYjU5NWRmYmMtN2U0MS00NjE4LWIzOGUtMGQwZjc3ZTZhNjk2XkEyXkFqcGc@._V1_.jpg"
  },
  {
    id: 25,
    day: 25,
    title: "Самая долгая разработка",
    description: "Duke Nukem Forever разрабатывалась 15 лет.",
    image: "https://upload.wikimedia.org/wikipedia/ru/e/e6/Duke_Nukem_Forever_Box_art.jpg"
  },
  {
    id: 26,
    day: 26,
    title: "Рождение World of Warcraft",
    description: "WoW вдохновлена успехом EverQuest.",
    image: "https://upload.wikimedia.org/wikipedia/ru/8/8e/World_of_Warcraft_Box_Cover_Art.jpg"
  },
  {
    id: 27,
    day: 27,
    title: "Секрет The Sims",
    description: "The Sims изначально задумывалась как архитектурный симулятор.",
    image: "https://simg.marwin.kz/media/catalog/product/cache/41deb699a7fea062a8915debbbb0442c/migrated/article/11317/81_tn3.jpg"
  },
  {
    id: 28,
    day: 28,
    title: "Рекорд League of Legends",
    description: "Более 180 миллионов игроков в месяц.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiV_Y7kR7WDOEHBDXQxdbqqDnGluVJLY7S8g&s"
  },
  {
    id: 29,
    day: 29,
    title: "Тайна Silent Hill",
    description: "Туман в Silent Hill был сделан из-за слабости железа.",
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202404/2513/0c858140c6d66dd3536416181904b166835ace3edb0d5754.jpg"
  },
  {
    id: 30,
    day: 30,
    title: "Будущее игр",
    description: "Игровая индустрия обгонит кино и музыку вместе взятые к 2025 году.",
    image: "https://app2top.ru/wp-content/uploads/2023/12/Screen-Shot-12-21-23-at-07.38-PM.png"
  }
];



const lightTheme = {
  colors: {
    primary: '#6200ee',
    secondary: '#03dac6',
    background: '#f6f6f6',
    surface: '#ffffff',
    text: '#121212',
    error: '#b00020',
  },
};

const darkTheme = {
  colors: {
    primary: '#bb86fc',
    secondary: '#03dac6',
    background: '#121212',
    surface: '#1e1e1e',
    text: '#ffffff',
    error: '#cf6679',
  },
};


const GameCard = ({ item }) => {
  const { colors } = useTheme();

  return (
    <Card style={[styles.card, { backgroundColor: colors.surface }]}>
      <Card.Content>
        <Text style={[styles.day, { color: colors.primary }]}>Факт {item.day}</Text>
        <Text style={[styles.title, { color: colors.text }]}>{item.title}</Text>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={[styles.description, { color: colors.text }]}>{item.description}</Text>
        {item.additionalInfo && (
          <Text style={[styles.additional, { color: colors.secondary }]}>{item.additionalInfo}</Text>
        )}
      </Card.Content>
    </Card>
  );
};


const ThemeToggle = ({ isDarkTheme, setIsDarkTheme }) => {
  const { colors } = useTheme();

  return (
    <Switch
      value={isDarkTheme}
      onValueChange={() => setIsDarkTheme(!isDarkTheme)}
      color={colors.primary}
      style={{ margin: 16, alignSelf: 'flex-end' }}
    />
  );
};


export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  const renderItem = ({ item }) => <GameCard item={item} />;

  return (
    <PaperProvider theme={theme}>
      <StatusBar barStyle={isDarkTheme ? 'light-content' : 'dark-content'} />
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <ThemeToggle isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
        <FlatList
          data={gamesData}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.list}
        />
      </View>
    </PaperProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
    elevation: 4,
  },
  day: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 4,
    marginBottom: 8,
    resizeMode: 'cover',
  },
  description: {
    fontSize: 14,
    marginBottom: 4,
  },
  additional: {
    fontSize: 12,
    fontStyle: 'italic',
  },
});