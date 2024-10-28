import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

const app = createApp(App)
const i18n = createI18n({
    locale: 'pt',
    fallbackLocale: 'en',
    messages: {
        pt: {
            mainshow: {
                title: "Uma maneira inteligente de aprender idiomas",
                desc: "Facilite o aprendizado de idiomas usando suas <br>músicas internacionas favoritas."
            },
            info: {
                one: "O WordView analisa a letra das músicas <br> e cria uma aula especifica <br> baseada nela.",
                two: "Ou se preferir, o WordView também oferece <br> as aulas tradicionais sobre tópicos específicos <br>para ajudar no seu vocabulário."
            },
            email: {
                main: "O WordView ainda esta sob desenvolvimento, caso tenha se interessado <br> você pode cadastrar seu email e será notificado <br> assim que o aplicativo estiver pronto para testes.",
                small: "(não será enviado nada além de atualizações sobre o desenvolvimento)",
                button: "Enviar"
            }
        },
        en: {
            mainshow: {
                title: "A smart way to learn a language",
                desc: "Make language learning more fun by engaging with <br>your favorite international songs"
            },
            info: {
                one: "WordView analyzes the lyrics of the <br> music to create a custom lesson for <br> each song.",
                two: "If you prefer, WordView also provides <br>topic specific lessons to improve<br>your vocabulary."
            },
            email: {
                main: "WordView is currently at development, if you feel interested<br>you can subscribe your email and be notified<br>when the app is ready for testing.",
                small: "(nothing but updates about the development will be sent)",
                button: "Send"
            }
        }
    }
})

app.use(i18n)
app.mount('#app')
