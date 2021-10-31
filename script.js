const Component = {
    data() {
        return {
        sba:"",
        status:"",
        }
    },

    methods:{
        saisieSBA(e){
            this.sba=e.target.value;
            console.log(sba.value)
        },
        statutCadre(e){
            this.status=e.target.checked;
            console.log(e.target.checked)
        }
    },

    computed:{
        sna(){
            if(this.status == true){
                return this.sba * 0.75
            }
                else{
                    return this.sba * 0.78
                }
        },
        sbm(){
            return this.sba / 12
        },
        snm(){
            if(this.status == true){
                return this.sbm * 0.75 
            }
                else{
                    return this.sbm * 0.78 
                }
        }
    },

    
    watch:{
        alerte(newValue){
            if(newValue > 26856){
            alert("Selon l'INSEE, vous vous situez au-dessus du revenu moyen qui est de 26 856€ par an")
            }
        }
    }
}

 
  Vue.createApp(Component).mount('#root')