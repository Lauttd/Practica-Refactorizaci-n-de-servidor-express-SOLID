import { EmployeeRepository } from '../repositories/employee.repository'
import { EmployeeService } from '../services/employee.service'
import { EmployeeController } from '../controllers/employee.controller'
import { Router } from 'express';

const router = Router();

const repository = new EmployeeRepository();
const service = new EmployeeService( repository );
const controller = new EmployeeController( service )

router.post('/empleados', ( req, res ) => controller.crearEmpleado( req, res ))
router.get('/empleados', ( req, res ) => controller.obtenerTodosEmpleados( req, res ))
router.get('/empleados/:id', ( req, res ) => controller.ObtenerEmpleadosId( req, res))

export default router;