import { EmployeeService } from '../services/employee.service'
import { Request, Response } from 'express'
export class EmployeeController {
    constructor( private service: EmployeeService ) {}

   async crearEmpleado( req: Request, res: Response ) {
        const datosBody = req.body

        const crear = await this.service.crearEmpleadoNuevo( datosBody )
            res.status( 201 ).json( crear )
    }

    async obtenerTodosEmpleados( req: Request, res: Response ) {
        const obtenerTodos = await this.service.obtenerTodos()
            res.status(200).json( obtenerTodos )
    }

    async ObtenerEmpleadosId ( req: Request, res: Response ) {
        const id = req.params.id as string

        const obtenerPorId = await this.service.obtenerPorId( id ) 
            res.status(200).json( obtenerPorId )
    }
}