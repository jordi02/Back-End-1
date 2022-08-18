class Usuario {
    constructor (nombre, apellido, libros, mascotas)
    {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = [];
    this.mascotas = [];
    }

getFullName(){
    console.log(`${this.nombre} ${this.apellido}`);
}

addMascota(nombreMascotas){
this.mascotas.push(nombreMascotas);
}

countMascotas(){
    console.log(`${this.mascotas.length}`);
}

getBooksName(libros){
    this.libros.map((l) =>{
        console.log(`${l.nombreLibro}`);
    })
}

addBook(nombreLibro, autorLibro){
    this.libros.push({nombreLibro, autorLibro});
}
}

const persona = new Usuario ("Jordi", "Gimbernat");

persona.getFullName();
persona.addMascota("Kiara")