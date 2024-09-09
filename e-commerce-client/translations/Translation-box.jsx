import React from 'react';
import {useTranslation} from "react-i18next";
import {LangSelector, Option} from "./lang-selector.jsx";

export const TranslationBox = () => {
    const [,i18n] = useTranslation("translation");
    const selectLanguage = (lang) => {
        i18n.changeLanguage(lang);
    }
    const flags = {russia: '🇷🇺', usa: '🇺🇸', uzbekistan: '🇺🇿'};
  return (
    <div id={`translator`}
        className={`translator-container`}>
        <LangSelector id="language"
                      onChange={(lang) => selectLanguage(lang.target.value)}>
            <Option value="en" name=" En " flag={flags.usa}/>
            <Option value="ru" name=" Ru " flag={flags.russia}/>
            <Option value="uz" name=" Uz " flag={flags.uzbekistan}/>
        </LangSelector>
    </div>
  );
}
