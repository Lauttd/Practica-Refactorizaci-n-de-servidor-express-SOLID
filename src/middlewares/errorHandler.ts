import { Request, Response, NextFunction } from 'express'

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction ) => {
    console.error(' Error capturado en el servidor ', err.message)

    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        status: 'error',
        message: err.message || 'Error interno del servidor, porfavor intentar mas tarde'
    })
}