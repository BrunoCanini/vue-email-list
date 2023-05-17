const { createApp } = Vue

createApp({
    data() {
      return {
        arrayMail : [],
        apiEmail : " https://flynn.boolean.careers/exercises/api/random/mail"
      }
    },
    methods: {

      },
    mounted() {
        
        for (let i = 0; i < 10; i++) {

            axios.get(this.apiEmail).then((risposta)=> {
                this.arrayMail.push(risposta.data.response)
            })
            
        }

      }
  }).mount('#app')