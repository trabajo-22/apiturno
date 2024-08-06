const areaModel = require('../models/area');




exports.getArea = async(req, res) => {
    try {
        const area = await areaModel.getArea();
        res.status(200).json({
            success: true,
            data: area
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error en la base de datos',
            error: error.message
        });
    }
}




exports.createArea = async(req, res) => {
    try {
        const { anombre, aicon } = req.body;
        const resp = await areaModel.create(anombre, aicon);
        return res.status(201).json({
            success: true,
            message: 'Area creada correctamente',
            resp
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Database error',
            error: error.message
        });
    }

};