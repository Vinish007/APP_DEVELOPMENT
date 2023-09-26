import React, { useState } from 'react';
import './Faq.css'; // Import your CSS file

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'What is the largest land animal?',
      answer: 'The African elephant is the largest land animal on Earth.',
    },
    {
      question: 'How fast can a cheetah run?',
      answer: 'Cheetahs can run at speeds of up to 75 miles per hour.',
    },
    {
      question: 'What is the lifespan of a sea turtle?',
      answer: 'The lifespan of a sea turtle can range from 50 to 100 years or more.',
    },
    {
      question: 'Which bird is known for its colorful plumage?',
      answer: 'The peacock is known for its colorful and vibrant plumage.',
    },
    {
      question: 'What is the main diet of a panda?',
      answer: 'Pandas primarily eat bamboo leaves and stems.',
    },
  ];

  return (
    <div class="faq">
    <div className="container">
      <h2>Wildlife FAQs</h2>
      <div className="accordion">
        {faqData.map((item, index) => (
          <div className="accordion-item" key={index}>
            <button
              className={`accordion-button ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index ? 'true' : 'false'}
            >
              <span className="accordion-title">{item.question}</span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            {activeIndex === index && (
              <div className="accordion-content">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Faq;
