import React from 'react'
import ReactDOM from 'react-dom/client'
import {GlobalApp} from './global-app.jsx'
import i18n from '/translations/lang-tool.jsx';
import {I18nextProvider} from "react-i18next";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <GlobalApp/>
        </I18nextProvider>
    </React.StrictMode>
)
