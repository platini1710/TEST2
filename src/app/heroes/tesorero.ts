export class  Tesorero {
    idTesoreriaInstit: number;
    rut: string;
    nombreTesorero: string;
    funcion: string;
    ubicPersonal: number;
    nombreTesoreria: string;
    fechaIngresoTGR: string;
    fechaInicioCargo: string;
    fechaFinCargo: string;
    id: string;
    comunaTesoreria: string;

    constructor(    idTesoreriaInstit,rut,nombreTesorero,funcion,ubicPersonal,nombreTesoreria,
        fechaIngresoTGR,fechaInicioCargo,fechaFinCargo,id,comunaTesoreria) {
        this.idTesoreriaInstit = idTesoreriaInstit;
        this.nombreTesorero = nombreTesorero;
        this.funcion = funcion;
        this.ubicPersonal = ubicPersonal;
        this.nombreTesoreria = nombreTesoreria;
        this.fechaIngresoTGR = fechaIngresoTGR;

        this.fechaInicioCargo = fechaInicioCargo;
        this.fechaFinCargo = fechaFinCargo;
        this.id = id;
        this.comunaTesoreria = comunaTesoreria;
    }
  }
  
  