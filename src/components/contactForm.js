import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../App.scss';


const ContactForm = () => {
  const [state, handleSubmit] = useForm("xwkglgwz");
  const [question, setQuestion] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false); // Ajoutez l'état pour la case à cocher
  const [message, setMessage]=useState('');

  const handleChange = (e) => {
    let valueC = '';
    valueC = e;
    setQuestion(valueC);
    // Appeler la fonction pour gérer le changement de la question
    handleSubmitQuestion(valueC);
  };

  // const handleChangeTerms = (props) => {
  //   if (props === 'acceptTerms') {
  //     handleSubmit()
  //   } else {
  //     setMessage('pensez à cocher la case & à renseigner votre nom et adresse mail pour que je vous contacte :)');
  //     setTimeout(() => {
  //       setMessage('');
  //     }, 10000);
  //   }
  // };



  const handleSubmitQuestion = (props) => {
    if (props !== '' && acceptTerms) {
      console.log('See you in hell,bitch');
      window.location.href = 'https://www.bible.com/fr/bible/63/MAT.13.24-48.BFC';      
    } else {
      handleSubmit(props);
    }
  };

  if (state.succeeded) {
      return <p>Merci pour votre message, je vous recontacte prochainement !</p>;
  }

  return (
      <form onSubmit={handleSubmit}>

      <div className='flexCol'>
      <label htmlFor="email">
       Prénom
      </label>
      <input
        id="prenom"
        name="prenom"
        required
      />
      <ValidationError 
        prefix="Prenom" 
        field="prenom"
        errors={state.errors}
      />
      </div>

      <div className='flexCol'>
      <label htmlFor="email">
       Votre adresse mail
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      </div>
      
      <div className='flexCol'>
      <label htmlFor="email">
       Votre message
      </label>
      <textarea
        id="message"
        name="message"
        required
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      </div>
      <div className='c'>
        <label htmlFor="question">Aimez-vous le chocolat ?</label>
        <input type="text" id="question" name="question" value={question} onChange={(e)=>handleChange(e)}/>
      </div>
     

      <div className='flexForm'>
        <div className='flexForm'>
        <input
          id='acceptTerms'
          type='checkbox'
          name='acceptTerms'
          required
          // checked={acceptTerms}
          // onChange={()=>handleChangeTerms('acceptTerms')}
        />
        <label htmlFor="acceptTerms">j’accepte de contacter une personne super ✨cool✨</label>
        <ValidationError 
          prefix="AcceptTerms" 
          field="acceptTerms"
          errors={state.errors}
        />
        </div>
        <button id='form-btn' type="submit" disabled={state.submitting}>Envoyer</button>
        <div>{message}</div>
      </div>
     
      

      
    </form>
  );
}

export default ContactForm
