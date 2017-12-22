function executor(funcion){
  funcion()//funcion.aply(tutor); o funcion.call(tutor);
            //(no es optimo ya que para todas las funciones
            // que se reciban el contexto será tutor)
}

let tutor = {
  name = "Esmeralda";
  lastname = "Medrano";
  nombreCompleto: function(){
    console.log(this.name + " " + this.lastname);
  }
}
executor(tutor.nombrecompleto.bind(tutor));//se predefine quien va a ser el contexto
                                          //en este caso será el objeto tutor
class Curso{

  constructor(titulo, nombre= 'Pepe'){
    this.titulo = titulo;
    this._name= nombre;
  }
  inscribir(usuario){
    console.log(usuario + " se ha inscrito");
  }

  get name(){
    return this._name; //el nombre de la propiedad y el getter deben ser distintos
  }
  set name(nombre){
    this._name = nombre;
  }
}
let javaScript = new Curso("Curso de javaScript");
console.log(javaScript.titulo);
console.log(javaScript.inscribir("Esmeralda"));

//los metodos accesores set y get se inicializan como si se tratace de una propiedad
console.log(javaScript.name);
javaScript.name = 'Juan';
onsole.log(javaScript.name);


//prototipos
let user = {nombre: "esmeralda"}
let admin = Object.create(user);
console.log(admin.nombre);
