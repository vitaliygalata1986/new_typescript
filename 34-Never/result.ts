const enum TypesOfMedia {
  Video = 'video',
  Audio = 'audio',
}

const enum FormatsOfMedia {
  MP4 = '.mp4',
  MOV = '.mov',
  MKV = '.mkv',
  FLV = '.flv',
  WEBM = '.webM',
}

interface MediaProps {
  name: string;
  type: TypesOfMedia;
  format: FormatsOfMedia;
  subtitles?: string;
  marks?: unknown;
}

function playMedia(
  { name, type, format, subtitles, marks }: MediaProps = {
    name: 'example',
    type: TypesOfMedia.Video,
    format: FormatsOfMedia.MP4,
  }
): string {
  let marksLog: string;

  // Если marks - это массив, "сложить" все элементы в одну строку и поместить в marksLog
  if (Array.isArray(marks)) {
    marksLog = marks.join(' ');
  }
  // Если marks - это строка, просто поместить её в marksLog
  else if (typeof marks === 'string') {
    marksLog = marks;
  }
  // Если marks имеет другой тип, поместить "Unsupported type of marks" в marksLog
  else {
    marksLog = 'Unsupported type of marks';
  }

  console.log(`Media ${name} ${format} is ${type}
    Marks: ${marksLog}
    Subtitles: ${subtitles ?? 'none'}`);
  // Оператор ?? используется для задания значения по умолчанию, если subtitles - undefined или null

  return 'Media started';
}

// Пример вызова функции playMedia
// console.log(playMedia()); // отработают значения по умолчанию для функции
console.log(
  playMedia({
    name: 'WoW',
    format: FormatsOfMedia.MP4,
    type: TypesOfMedia.Audio,
    subtitles: 'hmhmhm hmhmhm doh',
    marks: ['4:30', '5:40'],
  })
);

/*
В этом коде:

Перечисления TypesOfMedia и FormatsOfMedia включают строковые типы и форматы соответственно.
Интерфейс MediaProps определяет структуру объекта медиафайла.
Функция playMedia обрабатывает параметры, задает значение по умолчанию и выводит информацию о медиафайле.

*/
