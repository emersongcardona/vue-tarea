
    new Vue({
            el: "#app", 
            data:{
            tareas: ["comer","trabajar"]
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
 