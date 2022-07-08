Vue.createApp({
    data(){
        return{
            key: "value",
            itPushesEnter:  ""
        }
    },
    methods:{
        rightclick:()=>{
            alert("you made a right click!!")
        },
        leftclick:()=>{
            alert("you made a right left click!!")
        },
        // itWritesOnInput: function(e){
        //     console.log("WriteOnInput was invoked with =>", e.target.value)
        //     console.log("this is the THIS =>", this)
        //     this.itPushesEnter = e.target.value
        // },
        // This also works as we are declaring the func to es6
        itWritesOnInput(e){
            console.log("this is the THIS =>", this)
            this.itPushesEnter = e.target.value
        },
        //DONT EVER USER ARROW FUNCTIONS IN VUE YOU LOSE THE THIS REF AND IT SETS IT TO THE WINDOW OBJS
        // itWritesOnInput: (e) =>{
        //     console.log("this is the THIS =>", this)
        //     this.itPushesEnter = e.target.value
        // },
    }
}).mount("#assignment")