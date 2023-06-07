import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const formId = process.env.GATSBY_FORMSPREE_FORM_ID;
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <div className='mb-4 w-full md:w-9/12 '>
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="">
        <label htmlFor="name" className="block text-black text-md py-2  font-medium mb-1">
          Imię
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="w-full border-gray-300 border-0   text-md rounded-md py-2 px-4"
          placeholder="Jak Ci na imię?"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-black text-md py-2  font-medium mb-1">
          Adres email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="w-full border-gray-300 border-0 text-md  rounded-md py-2 px-4"
          placeholder="Pod jaki adres email mamy się z Tobą skontaktować?"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-black text-md py-2 font-medium mb-1">
          Wiadomość
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full h-40 border-gray-300 border-0 text-md rounded-md py-2 px-4 resize-none"
          placeholder="Co miłego Cię do mnie sprowadza?"
        />
      </div>

      <button type="submit" disabled={state.submitting} className="w-full flex rounded-[50px!important] justify-between bg-black text-white py-2 px-4 rounded-md flex items-center justify-center">
        Wyślij wiadomość
        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.66699 12H20.667" stroke="white" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
          <path d="M16 18C16 14.6863 18.6863 12 22 12" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M16 6C16 9.31371 18.6863 12 22 12" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
        </svg>
      </button>
    </form>
    </div>
  );
}

function App() {
  return <ContactForm />;
}

export default App;
