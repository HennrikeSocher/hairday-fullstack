"use strict"

// Configuração do day js
import "./libs/dayjs.js"

//Css importa todos arquivos para load, sendo assim removemos o index.css e tiramos o import de dentro do html
// graças ao web pack não precisamos fazer essas coisas pois ele transforma tudo em bundler
import "./styles/global.css"
import "./styles/form.css"
import "./styles/schedule.css"

//JS
import "./modules/form/submit.js"
import "./modules/form/date-change.js"
import "./modules/page-load.js"
