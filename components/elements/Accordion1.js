'use client'
import { useState } from 'react';

export default function Accordion1() {
    const [activeItem, setActiveItem] = useState(null);

    const faqData = [
        {
            id: 1,
            question: "What IT services does VeravalOnline provide?",
            answer: "We offer full-stack web and app development, SaaS solutions, DevOps, ERP/CRM systems, open-source customization, UI/UX design, cybersecurity, digital marketing, and server management to help businesses grow."
        },
        {
            id: 2,
            question: "How can VeravalOnline improve my website’s SEO and digital marketing?",
            answer: "Our SEO experts implement on-page and off-page optimization, keyword research, content marketing, PPC campaigns, and social media strategies to boost search rankings and increase traffic."
        },
        {
            id: 3,
            question: "Do you develop mobile apps for both Android and iOS?",
            answer: "Yes, we create custom Android and iOS apps with high performance, user-friendly UI/UX, and scalable functionality for startups and enterprises."
        },
        {
            id: 4,
            question: "What is included in VeravalOnline’s Webmaster Services?",
            answer: "Our Webmaster Package covers website development, security updates, performance optimization, content management, and 24/7 IT support to keep your site running smoothly."
        },
        {
            id: 5,
            question: "How does VeravalOnline ensure data security and cybersecurity?",
            answer: "We implement firewalls, data encryption, secure cloud solutions, and threat monitoring to protect your sensitive business information."
        }
    ];

    return (
        <div className="accordion" id="accordion">
            {faqData.map(({ id, question, answer }) => (
                <div key={id} className="accordion-item mb-3 wow fadeInUp" data-wow-delay={`${id * 0.2}s`}>
                    <h5 className="accordion-header" onClick={() => setActiveItem(activeItem === id ? null : id)}>
                        <button
                            className={`accordion-button ${activeItem === id ? '' : 'collapsed'}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#faq${id}`}
                            aria-expanded={activeItem === id}
                            aria-controls={`faq${id}`}
                        >
                            {question}
                        </button>
                    </h5>
                    <div
                        id={`faq${id}`}
                        className={`accordion-collapse collapse ${activeItem === id ? 'show' : ''}`}
                        data-bs-parent="#accordion"
                    >
                        <div className="accordion-body">{answer}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
