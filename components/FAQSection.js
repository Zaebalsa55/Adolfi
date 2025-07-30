import { useState } from 'react';

const faqData = [
  {
    id: 1,
    question: "Сколько времени занимает ремонт?",
    answer: "Обычно ремонт занимает от 30 минут до 2 часов, в зависимости от сложности проблемы. Простые неисправности устраняем сразу, для замены сложных деталей может потребоваться дополнительное время."
  },
  {
    id: 2,
    question: "Какую гарантию вы предоставляете?",
    answer: "Мы предоставляем гарантию до 24 месяцев на выполненные работы и установленные детали. Гарантийные обязательства прописываются в договоре на оказание услуг."
  },
  {
    id: 3,
    question: "Сколько стоит диагностика?",
    answer: "Диагностика бесплатная при выезде мастера. Мы определяем причину неисправности и называем точную стоимость ремонта."
  },
  {
    id: 4,
    question: "Будет ли у мастера детали для моей техники?",
    answer: "У нас есть склад оригинальных запчастей для всех популярных брендов. Редкие детали можем заказать и получить в течение 1-2 дней."
  },
  {
    id: 5,
    question: "Как проблемы с отжимом влияют на стирку?",
    answer: "Проблемы с отжимом могут привести к некачественной стирке и долгой сушке вещей. Исправляем любые неисправности двигателя и механизма отжима."
  }
];

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="faq-section-container">
      {/* Main FAQ content */}
      <div className="faq-main-content">
        {/* Left decorative container */}
        <div className="faq-left-line">
        </div>

        {/* FAQ Content */}
        <div className="faq-content">
          <h2 className="faq-title">Ответы на часто задаваемые вопросы!</h2>
          
          <div className="faq-items">
            {faqData.map((item) => (
              <div key={item.id} className="faq-item">
                <div 
                  className="faq-question"
                  onClick={() => toggleFAQ(item.id)}
                >
                  <div className="faq-question-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style={{
                        transform: openFAQ === item.id ? 'rotate(45deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                        color: '#ED9E65'
                      }}
                    >
                      <path
                        d="M12 5v14m-7-7h14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="faq-question-text">{item.question}</span>
                </div>
                
                <div 
                  className="faq-answer"
                  style={{
                    maxHeight: openFAQ === item.id ? '200px' : '0px',
                    opacity: openFAQ === item.id ? 1 : 0,
                    paddingTop: openFAQ === item.id ? '10px' : '0px',
                  }}
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
