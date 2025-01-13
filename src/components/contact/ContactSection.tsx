"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const SectionContainer = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-family: var(--font-montserrat);
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  grid-column: 1 / -1;
  background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-family: var(--font-montserrat);
  font-weight: 500;
  color: #2d3748;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-family: var(--font-opensans);
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #0070f3;
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-family: var(--font-opensans);
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #0070f3;
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(135deg, #0070f3 0%, #00a8ff 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-family: var(--font-montserrat);
  font-weight: 500;
  cursor: pointer;
  margin-top: 1rem;
`;

const FAQSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FAQItem = styled(motion.div)`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const Question = styled.h3`
  font-family: var(--font-montserrat);
  font-size: 1.2rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
`;

const Answer = styled.p`
  font-family: var(--font-opensans);
  color: #4a5568;
  line-height: 1.6;
`;

const faqs = [
  {
    question: "How accurate is the occupancy detection?",
    answer:
      "Our system maintains 95%+ accuracy through advanced computer vision and machine learning algorithms, providing real-time updates every 30 seconds.",
  },
  {
    question: "Is the system GDPR compliant?",
    answer:
      "Yes, our system is fully GDPR compliant. We don't store any personal data or identifiable information, focusing solely on anonymous occupancy metrics.",
  },
  {
    question: "What's the installation process like?",
    answer:
      "Installation is quick and non-intrusive, typically completed within 1-2 days. Our team handles the entire setup, including hardware mounting and software configuration.",
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <SectionContainer id="contact-section">
      <ContentWrapper>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Contact Us
        </SectionTitle>

        <ContactForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="institution">Institution</Label>
            <Input
              type="text"
              id="institution"
              name="institution"
              value={formData.institution}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </SubmitButton>
        </ContactForm>

        <FAQSection>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Question>{faq.question}</Question>
              <Answer>{faq.answer}</Answer>
            </FAQItem>
          ))}
        </FAQSection>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default ContactSection;
