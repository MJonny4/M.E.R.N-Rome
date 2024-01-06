import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

import Hotel from '../models/Hotel'

export const getAllHotels = async (req: Request, res: Response) => {
    try {
        const hotels = await Hotel.findAll()
        res.status(StatusCodes.OK).json({
            message: 'Hotels fetched successfully\n',
            data: hotels,
        })
    } catch (err: unknown) {
        const error = err as Error
        console.error("Error executing 'GET /hotels': ", error.message)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: error.message,
        })
    }
}

export const createHotel = async (req: Request, res: Response) => {
    try {
        const hotel = await Hotel.create(req.body)
        res.status(StatusCodes.CREATED).json({
            message: 'Hotel created successfully\n',
            data: hotel,
        })
    } catch (err: unknown) {
        const error = err as Error
        console.error("Error executing 'POST /hotels': ", error.message)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: error.message,
        })
    }
}

export const updateHotel = async (req: Request, res: Response) => {
    try {
        const hotel = await Hotel.findByPk(req.params.id)
        if (hotel) {
            await hotel.update(req.body)
            res.status(StatusCodes.OK).json({
                message: 'Hotel updated successfully\n',
                data: hotel,
            })
        } else {
            res.status(StatusCodes.NOT_FOUND).json({
                message: 'Hotel not found\n',
            })
        }
    } catch (err: unknown) {
        const error = err as Error
        console.error("Error executing 'PUT /hotels/:id': ", error.message)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: error.message,
        })
    }
}

export const deleteHotel = async (req: Request, res: Response) => {
    try {
        const hotel = await Hotel.findByPk(req.params.id)
        if (hotel) {
            await hotel.destroy()
            res.status(StatusCodes.OK).json({
                message: 'Hotel deleted successfully\n',
            })
        } else {
            res.status(StatusCodes.NOT_FOUND).json({
                message: 'Hotel not found\n',
            })
        }
    } catch (err: unknown) {
        const error = err as Error
        console.error("Error executing 'DELETE /hotels/:id': ", error.message)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: error.message,
        })
    }
}
