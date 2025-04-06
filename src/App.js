import logo from './logo.svg';
import './App.css';
import React, { useState, useRef } from "react";
import Sidebar from './components/Sidebar';
import Section from './components/Section';

import ImagesDescription from './images/ImagesDescription.png';

const sections = [
  {
    id: "context",
    title: "Контекст",
    content: [
      { type: "paragraph", text: "Ton Room —  сервис, где пользователи могут напрямую взаимодействовать с моделями для получения контента. Наш продукт помогает «подружить» пользователей и моделей, где модель может обозначить цену, а пользователь оттолкнуться от неё и принять решение о покупке" },
      { type: "heading", text: "Проблемы" },
      // { type: "paragraph", text: "Наш продукт помогает «подружить» пользователей и моделей..." }
      { type: "list", items: [
        "У моделей из РФ закрыт доступ к популярным adult-платформам",
        "Большое количество трафика базируется в Telegram",
        "90% выручки приходится на продажи контента в личных чатах с моделями",
        "Adult существует только в вебе, нет приложений"
      ]},
      { type: "heading", text: "Лояльность" },
      { type: "paragraph", text: "NPS в соцсетях 35%. Лояльность покупателей снизилась из-за сложного процесса покупки и отсутствия чёткой информации о продуктах и процессе доставки. Бизнесу сложно учитывать интересы и потребности конкретных сегментов аудитории." },
      {
        type: "image",
        src: ImagesDescription,
        alt: "Прототип Motiwish",
        // caption: "Финальный макет приложения",
        width: "100%"
      }
    ]
  },
  {
    id: "problems",
    title: "Проблемы",
    content: [
      { type: "list", items: [
        "У моделей из РФ закрыт доступ к популярным adult-платформам",
        "Большое количество трафика базируется в Telegram",
        "90% выручки приходится на продажи контента в личных чатах с моделями",
        "Adult существует только в вебе, нет приложений"
      ]}
    ]
  },
  {
    id: "loyalty",
    title: "Лояльность",
    content: [
      { type: "paragraph", text: "NPS в соцсетях 35%. Лояльность покупателей снизилась из-за сложного процесса покупки и отсутствия чёткой информации о продуктах и процессе доставки. Бизнесу сложно учитывать интересы и потребности конкретных сегментов аудитории." },
      { type: "paragraph", text: "Лояльность снизилась из-за сложного процесса покупки..." }
    ]
  },
  {
    id: "results",
    title: "Результаты",
    content: [
      { type: "paragraph", text: "Вот как выглядит прототип после внедрения:" },
      {
        type: "image",
        src: ImagesDescription,
        alt: "Прототип Motiwish",
        // caption: "Финальный макет приложения",
        width: "100%"
      }
    ]
  }
  // И так далее...
];

function App() {
  const refs = useRef({});

  const scrollToSection = (id) => {
    refs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="App">
      <Sidebar sections={sections} onSelect={scrollToSection} />
      <div className="Project">
        <div className="project-header">
          <h1>Motiwish</h1>
          <p className='text'>Планировщик с встроенной системой челленджей и статистики</p>
        </div>
        <main className="Sections">
          {sections.map((section) => (
            <Section
              key={section.id}
              ref={(el) => (refs.current[section.id] = el)}
              title={section.title}
              content={section.content}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
