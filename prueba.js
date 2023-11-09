const cursos = require('./data/data_courses.json')
for (var curso in cursos){
    console.log(cursos[curso])
}

const cowsay  = require("cowsay")
console.log(
    cowsay.say({
        text:"Hola amigos",
        e:"00",
        T:"u"
    })
)