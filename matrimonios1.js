class Matrimonio{
    
    constructor(fecha, lugar ){
        this.fecha = fecha;
        this.lugar = lugar; 
    }
    asignarjuez(){
        
    }
    asignarjurados(){

    }
    asignarcontrayentes(){

    }
}
class Persona extends Matrimonio{
    constructor(fecha, lugar, nombre, apellido, edad, sexo, direccion, tipo){
        super(fecha, lugar)
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sexo = sexo;
        this.direccion = direccion;
        this.tipo = tipo;
    }
    informacionPersonas(){
         console.log(`Matrimonio:
            Fecha: ${this.fecha}
            Lugar: ${this.lugar}
            Contrayentes: ${this.nombre} ${this.apellido}
            Edad: ${this.edad}
            Sexo: ${this.sexo}
            Direccion: ${this.direccion}
            `)
    }
}