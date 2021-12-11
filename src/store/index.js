import { createStore } from "vuex";

export default createStore({
  state: {
    languages: {
      english: {
        my_profession: "Fullstack Developer",
        profile_details: "Profile Details",
        skills: {
          skill: "Skills",
          skills: {
            html: {
              name: "HTML 5",
              description:
                "main language for publishing Web pages, as well as a tool most used for the creation of content and mobile applications.",
              path_img: "img/logos/html_5.png",
            },
            css: {
              name: "CSS 3",
              description:
                "language for adding style (colors, fonts, spacing, etc.) to a web document.",
              path_img: "img/logos/css_3.png",
            },
            javascript: {
              name: "JavaScript",
              description:
                "main client-side programing language used to make web pages interactive. JavaScript, along with HTML and CSS, is one of the main front-end programming technologies on the web.",
              path_img: "img/logos/javascript.png",
            },
            vuejs3: {
              name: "Vue Js 3",
              description:
                "used to create SPA applications (single page application) and also to develop various types of interfaces, which have greater interaction needs and a more valuable experience for the user.",
              path_img: "img/logos/vue_js.png",
            },
            vuerouter4: {
              name: "Vue Router 4",
              description:
                "content manager based on the url that the user is accessing, this control gives a great dynamic to the application, making better the user experience and navigation between web pages.",
              path_img: "img/logos/vue_router.png",
            },
            vuex4: {
              name: "Vuex 4",
              description:
                "standard state manager for Vue JS applications. It serves as a centralized store for all components of an application, with rules ensuring that the state can only be changed in a predictable way.",
              path_img: "img/logos/vuex.png",
            },
            php8: {
              name: "PHP 8",
              description:
                "one of the main Serve-Side programming language, widely used for web development with HTML and CSS manipulation, a lot of Frameworks, documentation and has a large community and forum for support.",
              path_img: "img/logos/php_8.png",
            },
            laravel8: {
              name: "Laravel 8",
              description:
                "an open source framework, with its main objective, to allow programmers to work in a fast and organized way, keeping a streamlined and functional code.",
              path_img: "img/logos/laravel_8.png",
            },
            mysql: {
              name: "MySQL",
              description:
                "is a popular open source RDBMS (relational database management system) for managing SQL relational databases, capable of storing and managing data.",
              path_img: "img/logos/mysql.png",
            },
            mariadb: {
              name: "Maria DB",
              description:
                "It is a native DBMS (relational database management system) from a fork of MySQL.",
              path_img: "img/logos/maria_db.png",
            },
            npm: {
              name: "NPM",
              description:
                "is a default package manager for the Node.js runtime environment for the JavaScript programming language.",
              path_img: "img/logos/npm.png",
            },
            composer: {
              name: "Composer",
              description:
                "is a package manager for the PHP programming language, which provides a standard format for managing the dependencies of projects and required libraries.",
              path_img: "img/logos/composer.png",
            },
            packagist: {
              name: "Packagist",
              description: "is the main Composer repository.",
              path_img: "img/logos/packagist.png",
            },
            restapi: {
              name: "Rest API",
              description:
                "also known as RESTful API, it is a programming interface that allows the exchange of information between applications according to the restrictions of the REST architectural style, allowing interaction with web services.",
              path_img: "img/logos/rest_api.png",
            },
            git: {
              name: "Git",
              description:
                "is a system that allows version control in software development and allows multiple developers to collaborate on the same project at the same time.",
              path_img: "img/logos/git.png",
            },
            github: {
              name: "GitHub",
              description:
                "is a web-based Git version control tool that allows programmers to work in a coordinated way in the same code base, flagging problems and commenting on the project's progress.",
              path_img: "img/logos/github.png",
            },
            bitbucket: {
              name: "Bitbucket",
              description: "",
              path_img: "img/logos/bitbucket.png",
            },
            cpanel: {
              name: "cPanel",
              description:
                "is a graphical control panel for the management and administration of websites and web hosting",
              path_img: "img/logos/cpanel.png",
            },
            cronjob: {
              name: "Cron Job",
              description:
                "are configuration that specifies shell commands to run periodically on a given schedule.",
              path_img: "img/logos/cron_job.png",
            },
            oop: {
              name: "OOP",
              description:
                "(Object Oriented programming) is a programming paradigm that relies on the concept of classes and objects. It is used to structure a software program into simple, reusable pieces of code blueprints",
              path_img: "img/logos/oop.png",
            },
            xml: {
              name: "XML",
              description:
                "is a markup language designed to give a great amount of flexibility in marking up data, is normally used for transporting data through feeds, API calls and the like.",
              path_img: "img/logos/xml.png",
            },
            json: {
              name: "JSON",
              description:
                "(JavaScript Object Notation) is a JavaScript object syntax standard to represent data. It is commonly used for transmitting data in web applications and API (Application programming interface).",
              path_img: "img/logos/json.png",
            },
            visualstudiocode: {
              name: "Visual Studio Code",
              description:
                "is a source code editor developed by Microsoft. Includes debugging support, a built-in Git check, Syntax highlighting, and code refactoring.",
              path_img: "img/logos/vs_code.png",
            },
            // ecmascript: {
            //   name: "ECMA script",
            //   description: "",
            //   path_img: "img/logos/ecmascript.png",
            // },
            // ui: {
            //   name: "ui",
            //   description: "",
            //   path_img: "img/logos/ui.png",
            // },
            // ux: {
            //   name: "ux",
            //   description: "",
            //   path_img: "img/logos/ux.png",
            // },
          },
        },
        about: {
          about: "About me",
          address: {
            from: {
              from: "I'm from",
              city: "Gramado RS, BR",
              google_maps: "https://goo.gl/maps/GH2JP18Sbxo4axmVA",
            },
            current: {
              lives_in: "I live in",
              city: "Rome, IT",
              google_maps: "https://goo.gl/maps/Hc7UpuLZ2FjeEmLo9",
            },
          },
          work_at: {
            work_at: "I work at",
            company: "Sellmasters",
            site: "https://www.sellmasters.it/",
          },
        },
        social_media: "Social Media",
      },
      portugues: {
        my_profession: "Desenvolvedor Fullstack",
        profile_details: "Detalhes de Perfil",
        skills: {
          skill: "Conhecimentos",
          skills: {
            html: {
              name: "HTML 5",
              description:
                "principal linguagem de publicação de páginas Web, além de ser a ferramenta mais utilizada para a criação de conteúdos e aplicações mobile.",
              path_img: "img/logos/html_5.png",
            },
            css: {
              name: "CSS 3",
              description:
                "linguagem para adicionar estilo (cores, fontes, espaçamento, etc.) a um documento web.",
              path_img: "img/logos/css_3.png",
            },
            javascript: {
              name: "JavaScript",
              description:
                "principal linguagem de programação Client-Side usada para tornar as páginas da web interativas. JavaScript, junto com HTML e CSS, é uma das principais tecnologias de programação front-end da web.",
              path_img: "img/logos/javascript.png",
            },
            vuejs3: {
              name: "Vue Js 3",
              description:
                "utilizado para criar aplicações SPA (single page application) e também para desenvolver vários tipos de interfaces, que possuem necessidades de maior interação e experiência mais valorosa para o usuário.",
              path_img: "img/logos/vue_js.png",
            },
            vuerouter4: {
              name: "Vue Router 4",
              description:
                "gerenciador do conteúdo com base na url que o usuário está acessando, e esse controle da uma dinâmica grande para a aplicação, tornando melhor a experiência do usuário e navegação entre paginas Web.",
              path_img: "img/logos/vue_router.png",
            },
            vuex4: {
              name: "Vuex 4",
              description:
                "gerenciamento de estado padrão para aplicações Vue JS. Ele serve como um store centralizado para todos os componentes em uma aplicação, com regras garantindo que o estado só possa ser mutado de forma previsível.",
              path_img: "img/logos/vuex.png",
            },
            php8: {
              name: "PHP 8",
              description:
                "uma das principal linguagem de programação Serve-Side, muito utilizada para o desenvolvimento web com a manipilação do HTML e CSS, repleta de Frameworks, documentações e possue uma grande comunidade e forum para suporte.",
              path_img: "img/logos/php_8.png",
            },
            laravel8: {
              name: "Laravel 8",
              description:
                "um framework de código aberto, com seu principal objetivo, permitir que os programadores trabalhem de forma rápida e organizada, mantendo um código enxuto e funcional.",
              path_img: "img/logos/laravel_8.png",
            },
            mysql: {
              name: "MySQL",
              description:
                "é um popular RDBMS (relational database management system) de código aberto para o gerenciamento de bancos de dados relacionais SQL, capaz de armazenar e gerenciar dados.",
              path_img: "img/logos/mysql.png",
            },
            mariadb: {
              name: "Maria DB",
              description:
                "é um DBMS (relational database management system) criado por uma fork do MySQL.",
              path_img: "img/logos/maria_db.png",
            },
            npm: {
              name: "NPM",
              description:
                "é um gerenciador de pacotes padrão para o ambiente runtime de Node.js para a linguagem de programação JavaScript.",
              path_img: "img/logos/npm.png",
            },
            composer: {
              name: "Composer",
              description:
                "é um gerenciador de pacotes para a linguagem de programação PHP, que fornece um formato padrão para gerenciar as dependências de projetos e bibliotecas necessárias.",
              path_img: "img/logos/composer.png",
            },
            packagist: {
              name: "Packagist",
              description: "é o repositório principal do Composer.",
              path_img: "img/logos/packagist.png",
            },
            restapi: {
              name: "Rest API",
              description:
                "também conhecida como RESTful API, é uma interface de programação que permite a troca de informações entre aplicações conforme com as restrições do estilo arquitetônico REST, permitindo a interação com serviços da web.",
              path_img: "img/logos/rest_api.png",
            },
            git: {
              name: "Git",
              description:
                "é um sistema que permite o controle de versão no desenvolcimento de softwares e permite que vários desenvolvedores colaborem no mesmo projeto ao mesmo tempo.",
              path_img: "img/logos/git.png",
            },
            github: {
              name: "GitHub",
              description:
                "é uma ferramenta de controle de versão Git na web, que permite a programadores trabalhar de forma coordenada na mesma base de código, sinalizando problemas e fazendo comentarios sobre o desenvolcimento do projeto.",
              path_img: "img/logos/github.png",
            },
            bitbucket: {
              name: "Bitbucket",
              description: "",
              path_img: "img/logos/bitbucket.png",
            },
            cpanel: {
              name: "cPanel",
              description:
                "é um painel de controle gráfico para o gerenciamento e administração de sites e hospedagem na web",
              path_img: "img/logos/cpanel.png",
            },
            cronjob: {
              name: "Cron Job",
              description:
                "são configurações que especificam comandos shell para serem executados periodicamente em um determinado cronograma.",
              path_img: "img/logos/cron_job.png",
            },
            oop: {
              name: "OOP",
              description:
                "Programação orientada a objetos (Object Oriented programming) é um paradigma de programação que se baseia no conceito de classes e objetos. É usado para estruturar um programa de software em peças simples e reutilizáveis de projetos de código",
              path_img: "img/logos/oop.png",
            },
            xml: {
              name: "XML",
              description:
                "é uma linguagem de marcação projetada para fornecer uma grande flexibilidade na marcação de dados, normalmente é usada para transportar dados através de feeds, chamadas de API e similares.",
              path_img: "img/logos/xml.png",
            },
            json: {
              name: "JSON",
              description:
                "(JavaScript Object Notation) é um padrão de sintaxe de objeto JavaScript para representar dados. É comumente usado para transmitir dados em aplicativos da web e API (interface de programação de aplicativos).",
              path_img: "img/logos/json.png",
            },
            visualstudiocode: {
              name: "Visual Studio Code",
              description:
                "é um editor de código-fonte desenvolvido pela Microsoft. Inclui suporte para depuração, verificação Git integrada, destaque de sintaxe e refatoração de código.",
              path_img: "img/logos/vs_code.png",
            },
            // ecmascript: {
            //   name: "ECMA script",
            //   description: "",
            //   path_img: "img/logos/ecmascript.png",
            // },
            // ui: {
            //   name: "ui",
            //   description: "",
            //   path_img: "img/logos/ui.png",
            // },
            // ux: {
            //   name: "ux",
            //   description: "",
            //   path_img: "img/logos/ux.png",
            // },
          },
        },
        about: {
          about: "Sobre min",
          address: {
            from: {
              from: "Sou de ",
              city: "Gramado RS, BR",
              google_maps: "https://goo.gl/maps/GH2JP18Sbxo4axmVA",
            },
            current: {
              lives_in: "Moro em",
              city: "Roma, IT",
              google_maps: "https://goo.gl/maps/Hc7UpuLZ2FjeEmLo9",
            },
          },
          work_at: {
            work_at: "Trabalho em",
            company: "Sellmasters",
            site: "https://www.sellmasters.it/",
          },
        },
        social_media: "Mídias Sociais",
      },
      italiano: {
        my_profession: "Sviluppatore Fullstack",
        profile_details: "Dettagli del Profilo",
        skills: {
          skill: "Conoscenza",
          skills: {
            html: {
              name: "HTML 5",
              description:
                "principale linguaggio di pubblicazione di pagine Web, oltre che uno strumento sempre più utilizzato per la realizzazione di contenuti e applicazioni mobile.",
              path_img: "img/logos/html_5.png",
            },
            css: {
              name: "CSS 3",
              description:
                "linguaggio per aggiungere stile (colori, fonti, spaziatura, ecc.) a un documento web.",
              path_img: "img/logos/css_3.png",
            },
            javascript: {
              name: "JavaScript",
              description:
                "principale linguaggio di scripting lato client utilizzato per rendere interattive le pagine web. JavaScript, insieme ad HTML e CSS, è una delle tecnologie principali della programmazione web front end.",
              path_img: "img/logos/javascript.png",
            },
            vuejs3: {
              name: "Vue Js 3",
              description:
                "utilizzato per creare applicazioni SPA (single page application) e anche per sviluppare vari tipi di interfacce, che hanno maggiori esigenze di interazione e un'esperienza più preziosa per l'utente.",
              path_img: "img/logos/vue_js.png",
            },
            vuerouter4: {
              name: "Vue Router 4",
              description:
                "content manager basato sull'url a cui l'utente sta accedendo, questo controllo dona una grande dinamica all'applicazione, migliorando l'esperienza dell'utente e la navigazione tra le pagine web",
              path_img: "img/logos/vue_router.png",
            },
            vuex4: {
              name: "Vuex 4",
              description:
                "gestore dello stato standard per le applicazioni Vue JS. Funge da archivio centralizzato per tutti i componenti di un'applicazione, con regole che garantiscono che lo stato possa essere modificato solo in modo prevedibile.",
              path_img: "img/logos/vuex.png",
            },
            php8: {
              name: "PHP 8",
              description:
                "uno dei principali linguaggi di programmazione Serve-Side, ampiamente utilizzato per lo sviluppo web con manipolazione di HTML e CSS, con molti Framework, documentazione e ha una vasta comunità e forum di supporto.",
              path_img: "img/logos/php_8.png",
            },
            laravel8: {
              name: "Laravel 8",
              description:
                "un framework open source, con il suo obiettivo principale, consentire ai programmatori di lavorare in modo veloce e organizzato, mantenendo un codice snello e funzionale.",
              path_img: "img/logos/laravel_8.png",
            },
            mysql: {
              name: "MySQL",
              description:
                "è un popolare sistema open source RDBMS (relational database management system) per gestione di database relazionali SQL, in grado di archiviare e gestire dati.",
              path_img: "img/logos/mysql.png",
            },
            mariadb: {
              name: "Maria DB",
              description:
                "è un DBMS (relational database management system) nato da un fork di MySQL.",
              path_img: "img/logos/maria_db.png",
            },
            npm: {
              name: "NPM",
              description:
                "è un gestore di pacchetti predefinito per l'ambiente di runtime Node.js per il linguaggio di programmazione JavaScript.",
              path_img: "img/logos/npm.png",
            },
            composer: {
              name: "Composer",
              description:
                "è un gestore di pacchetti per il linguaggio di programmazione PHP, che fornisce un formato standard per la gestione delle dipendenze dei progetti e delle librerie richieste.",
              path_img: "img/logos/composer.png",
            },
            packagist: {
              name: "Packagist",
              description: "è il principale repository di Composer.",
              path_img: "img/logos/packagist.png",
            },
            restapi: {
              name: "Rest API",
              description:
                "nota anche come API RESTful, è un'interfaccia di programmazione che permette lo scambio di informazioni tra applicazioni secondo i vincoli dello stile architetturale REST, consentendo l'interazione con i servizi web.",
              path_img: "img/logos/rest_api.png",
            },
            git: {
              name: "Git",
              description:
                "è un sistema che consente il controllo della versione nello sviluppo del software e consente a più sviluppatori di collaborare allo stesso progetto contemporaneamente.",
              path_img: "img/logos/git.png",
            },
            github: {
              name: "GitHub",
              description:
                "è uno strumento di controllo della versione Git basato sul web che consente ai programmatori di lavorare in modo coordinato sulla stessa base di codice, segnalando problemi e commentando lo stato di avanzamento del progetto.",
              path_img: "img/logos/github.png",
            },
            bitbucket: {
              name: "Bitbucket",
              description: "",
              path_img: "img/logos/bitbucket.png",
            },
            cpanel: {
              name: "cPanel",
              description:
                "è un pannello di controllo grafico per la gestione e l'amministrazione di siti internet e web hosting",
              path_img: "img/logos/cpanel.png",
            },
            cronjob: {
              name: "Cron Job",
              description:
                "sono configurazioni che specificano i comandi della shell da eseguire periodicamente su una determinata pianificazione.",
              path_img: "img/logos/cron_job.png",
            },
            oop: {
              name: "OOP",
              description:
                "Programmazione orientata agli oggetti (Object Oriented programming) è un paradigma di programmazione che si basa sul concetto di classi e oggetti. Viene utilizzato per strutturare un programma software in pezzi di codice semplici e riutilizzabili",
              path_img: "img/logos/oop.png",
            },
            xml: {
              name: "XML",
              description:
                "è un linguaggio di markup progettato per offrire una grande flessibilità nel markup dei dati, viene normalmente utilizzato per il trasporto di dati tramite feed, chiamate API e simili.",
              path_img: "img/logos/xml.png",
            },
            json: {
              name: "JSON",
              description:
                "(JavaScript Object Notation) è uno standard di sintassi degli oggetti JavaScript per rappresentare i dati. È comunemente utilizzato per la trasmissione di dati in applicazioni Web e API (interfaccia di programmazione dell'applicazione).",
              path_img: "img/logos/json.png",
            },
            visualstudiocode: {
              name: "Visual Studio Code",
              description:
                "è un editor di codice sorgente sviluppato da Microsoft. Include il supporto per debugging, un controllo per Git integrato, Syntax highlighting e refactoring del codice.",
              path_img: "img/logos/vs_code.png",
            },
            // ecmascript: {
            //   name: "ECMA script",
            //   description: "",
            //   path_img: "img/logos/ecmascript.png",
            // },
            // ui: {
            //   name: "ui",
            //   description: "",
            //   path_img: "img/logos/ui.png",
            // },
            // ux: {
            //   name: "ux",
            //   description: "",
            //   path_img: "img/logos/ux.png",
            // },
          },
        },
        about: {
          about: "Su di me",
          address: {
            from: {
              from: "Sono nato a",
              city: "Gramado RS, BR",
              google_maps: "https://goo.gl/maps/GH2JP18Sbxo4axmVA",
            },
            current: {
              lives_in: "Vivo a",
              city: "Roma, IT",
              google_maps: "https://goo.gl/maps/Hc7UpuLZ2FjeEmLo9",
            },
          },
          work_at: {
            work_at: "Lavoro a",
            company: "Sellmasters",
            site: "https://www.sellmasters.it/",
          },
        },
        social_media: "Social Media",
      },
    },
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {},
});
