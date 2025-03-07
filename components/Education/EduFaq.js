import React, { useState } from 'react';

const faqData = [
  {
    question: "What courses are available at Zenith Institute?",
    answer: "Zenith prepares students for engineering and medical entrance exams such as IITJEE, BITSAT, WBJEE, NEET and Olympiads. Students from class VII to XII and XII pass can avail the above courses."
  },
  {
    question: "Where can I study for the above courses at Zenith?",
    answer: "Zenith Institute has centres at Saltlake, Phoolbagan, Howrah, Andul, Serampore, Raiganj, Balurghat, Chandannagar, Mogra and Rampurhat. Students can visit our centre and join for IITJEE, BITSAT, WBJEE, NEET and Foundation courses."
  },
  {
    question: "Can I get a scholarship at Zenith?",
    answer: "We conduct a scholarship exam, Zenith Scholarship Test (ZST) throughout the year through which students can avail scholarship on the course fee. The scholarship exam is completely offline and can be taken at our nearest centre/branch."
  },
  {
    question: "I have some questions regarding courses and the admission process. Can I talk to someone at Zenith?",
    answer: "Yes, you can contact us @9051509444 or visit our nearest centre for details regarding courses and admission process."
  },
];

const styles = {
  faqContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem 1rem',
  },
  faqTitle: {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1f2937',
    marginBottom: '2rem',
  },
  accordionItem: {
    borderBottom: '1px solid #e5e7eb',
    marginBottom: '1rem',
  },
  accordionButton: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '1rem 0',
    textAlign: 'left',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  question: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#374151',
  },
  icon: {
    fontSize: '1.25rem',
    color: '#6b7280',
  },
  answer: {
    paddingBottom: '1rem',
    paddingRight: '1rem',
    color: '#4b5563',
  },
};

const EduFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={styles.faqContainer}>
      <h2 style={styles.faqTitle}>Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div key={index} style={styles.accordionItem}>
          <button
            style={{
              ...styles.accordionButton,
              backgroundColor: openIndex === index ? '#f3f4f6' : 'transparent',
            }}
            onClick={() => toggleAccordion(index)}
          >
            <h3 style={styles.question}>{faq.question}</h3>
            <span style={styles.icon}>
              {openIndex === index ? '▲' : '▼'}
            </span>
          </button>
          {openIndex === index && (
            <div style={styles.answer}>{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default EduFAQ;