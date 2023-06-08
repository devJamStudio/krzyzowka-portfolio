import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './contact-form.module.css';
function ContactForm() {
  const Error  = () => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    className="fill-white"    
  >
    <path
      stroke="#F04438"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.333}
      d="M8 5.333V8m0 2.667h.007M14.667 8A6.667 6.667 0 1 1 1.333 8a6.667 6.667 0 0 1 13.334 0Z"
    />
  </svg>
  );
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
            required
          />
        </div>

        <div className="mb-4 relative">
          <label htmlFor="email" className="block text-black text-md py-2  font-medium mb-1">
            Adres email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="w-full email  peer invalid:border text-md rounded-md py-2 px-4 invalid:border-[#FDA29B]  invalid:text-[#FDA29B] invalid:ring-[#FDA29B]-50"
            placeholder="Pod jaki adres email mamy się z Tobą skontaktować?"
            
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
     <p class="text-[#F04438] py-1 text-xs  invisible peer-invalid:visible">This is error message.</p><p class="text-[#F04438] py-1 text-xs absolute right-2 top-[48%] invisible peer-invalid:visible"><Error/></p>
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
            required
          />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full flex rounded-[50px!important] justify-between bg-black text-white py-2 px-4 rounded-md flex items-center justify-center"
        >
          Wyślij wiadomość
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.66699 12H20.667"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
            <path
              d="M16 18C16 14.6863 18.6863 12 22 12"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
            <path
              d="M16 6C16 9.31371 18.6863 12 22 12"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
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
