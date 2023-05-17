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
                console.log(risposta.data.response);
                this.arrayMail.push(risposta.data.response)
                console.log(this.arrayMail)
            })
            
        }

      }
  }).mount('#app')