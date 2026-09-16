import { EmployeeRepository } from '../repositories/employee.repository';

export interface DatosCrearEmpleado {
    name: string
    position: string
    baseSalary: number
    yearsOfService: number
}

export class EmployeeService {
    constructor( private repository: EmployeeRepository ) {}
    
    async crearEmpleadoNuevo( datosEmpleados: DatosCrearEmpleado ) {
        const bonus = datosEmpleados.baseSalary * 0.02 * datosEmpleados.yearsOfService

        const finalSalary = datosEmpleados.baseSalary + bonus;

        const empleadoCompleto = {
            name: datosEmpleados.name,
            position: datosEmpleados.position,
            baseSalary: datosEmpleados.baseSalary,
            yearsOfService: datosEmpleados.yearsOfService,
            finalSalary: finalSalary
        }

        const resultado = await this.repository.guardarEmpleado(empleadoCompleto)
        
        return resultado;
    }

    async obtenerTodos() {
        const obtener = await this.repository.buscarTodosEmpleados();
            return obtener
    }

    async obtenerPorId( id: string) {
        const obtenerId = await this.repository.buscarEmpeladoId( id )
            return obtenerId
    }
}