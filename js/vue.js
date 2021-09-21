    Vue.component('crear-tarea',{
        data: function(){
            return{
                text: ""
                

            }
        }, 
         props:{
            arreglo:{
                type: Array, required: true
            },
            
            add:{
                type: Function, required: true

            }

         },
         template: 
            `
                <div>
                    <input type="text" v-model="text"/>
                    <button v-on:click="$emit('text', add(text))">submit</button>

                </div>
                `
    ,
    // methods:{
    //         add(tarea) {
    //             console.log(tarea);
    //             if(tarea == undefined || tarea == null || tarea == ""){
    //                 alert("empty task");
    //             }else{
    //                 console.log("que paso amiguito")
    //                 this.arreglo.push(tarea);
    //             }
    //         } 
    //     }
    })
    


    new Vue({
            el: "#app", 
            data:{
                tareas: ["Example"]
            },
            methods:{
                mounted(tarea) {
                    console.log(this.tareas);
                    if(tarea == undefined || tarea == null || tarea == ""){
                        alert("empty task");
                    }else{
                        this.tareas.push(tarea);
                    }
                },
                borrarTarea(index){
                    console.log(index);
                    setTimeout(()=>{
                        this.tareas.splice(index,1);
                    }, 3000)
                }
            }
    })
 