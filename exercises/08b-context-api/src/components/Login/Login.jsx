// Import what you need from React
import React from "react";
import translations from "./LoginTranslations.json";
import { useContext, createContext} from 'react';
import {TranslatorContext} from '../../contexts/TranslatorContext'
// Import "TranslatorContext"
import {useContext} from "react";
import {TranslatorContext} from "../../contexts/TranslatorContext.jsx";

function Login() {
<<<<<<< HEAD
  const {language} = useContext(TranslatorContext);
=======
  const [language, setLanguage]  = useContext(TranslatorContext);
>>>>>>> 3e818c3fe64faa5d2493e35443e8331a8bb198de
  /**
   * You will need to add something here. This component should be similar to the "CreateAccount" component in the first context API exercise.
   * @see exercises/08a-context-api/src/App.jsx
   * @see solutions/08a-context-api/App.solutions.jsx
   */

  /**
   * Replace "en" with a constant or variable.
   */
<<<<<<< HEAD
  const t = translations[language];
=======
   const t = translations[language];
>>>>>>> 3e818c3fe64faa5d2493e35443e8331a8bb198de

  /**
   * You do not have to change anything below this line.
   */
  return (
    <form className="row g-2">
      <div className="col-auto">
        <input
          className="form-control mr-sm-2"
          type="email"
          placeholder={t["Email"]}
          aria-label={t["Email"]}
        />
      </div>
      <div className="col-auto">
        <input
          className="form-control mr-sm-2"
          type="password"
          placeholder={t["Password"]}
          aria-label={t["Password"]}
        />
      </div>
      <div className="col-auto">
        <button className="btn btn-dark my-2 my-sm-0" type="submit">
          {t["Login In"]}
        </button>
      </div>
    </form>
  );
}

export default Login;
