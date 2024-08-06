const agenciaModel = require('../models/agencia');




exports.getId = async(req, res) => {

    try {
        const id = req.params.agid;
        const nombre = req.params.agnombre;

        const existeCedula = await usuarioModel.getCedula(ucedula);

        if (existeCedula > 0) {
            const lista = await usuarioModel.OnUser(ucedula);
            return res.status(200).json({
                success: true,
                data: lista
            });
        } else {
            return res.status(404).json({
                success: false,
                message: 'no existe'
            });
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error en la base de datos',
            error: error.message
        });
    }

}




exports.getAgencia = async(req, res) => {
    try {
        const area = await agenciaModel.getAgencia();
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




exports.createAgencia = async(req, res) => {
    try {
        const { agnombre } = req.body;
        const resp = await agenciaModel.create(agnombre);
        return res.status(201).json({
            success: true,
            message: 'Agencia creada correctamente',
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