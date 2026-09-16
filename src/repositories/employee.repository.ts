import { Employee } from '../models/employee.model'

export class EmployeeRepository {
   async guardarEmpleado ( datosEmpleados: any ) {
        const employee = await Employee.create( datosEmpleados );
        return employee 
   } 

   async buscarTodosEmpleados() {
     const employees = await Employee.find().sort({ createdAt: -1 });
        return employees
   }

   async buscarEmpeladoId( id: string,) {
     const employee = await Employee.findById( id );
         return employee
    }
}

