import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactPage = () => {
  const contactData = [
    {
      header: 'Kontakt',
      text: 'Masz pytania? Chcesz wycenić projekt? Skontaktuj się ze mną. Na większość wiadomości odpowiadam w ciągu 48 godzin.',
    },
    {
      title: 'Opcjonalny tekst wspierający, np. to o czym warto wspomnieć w wiadomości.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor eros at lectus aliquet, ut efficitur mauris tincidunt.',
    },
    {
      title: 'Barbara Olejarczyk',
      text: 'b.olejarczyk@krzyzowka.studio',
    },
    {
      title: '+48 791 349 660',
    },
    {
      title: 'ul. Próchnika 1, lok. 9U',
      text: '90-408 Łódź',
    },
    {
      title: 'NIP 7922266365',
    },
  ];

  const socialMediaLinks = [
    {
      icon: FaFacebook,
      url: 'https://www.facebook.com/your-profile',
    },
    {
      icon: FaInstagram,
      url: 'https://www.instagram.com/your-profile',
    },
    {
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/your-profile',
    },
  ];

  return (
    <div>
        
      {contacts.map((contact, index) => (
        <div key={index}>
          <h2>{contact.title}</h2>
          {contact.text && <p>{contact.text}</p>}
        </div>
      ))}
      
      <div>
        {socialMediaLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
              <Icon />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ContactPage;
