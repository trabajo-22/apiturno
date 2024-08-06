const configsql = require("../config/sqlserver");
const sql = require("mssql");

const Area = {};




Area.getArea = async() => {
    try {
        const sqlQuery = 'SELECT * FROM area';

        let cnn = await sql.connect(configsql);
        let result = await cnn.request()
            .query(sqlQuery);

        let area = result.recordset;
        await cnn.close();

        return area;

    } catch (error) {
        throw error;
    }
}




Area.create = async(anombre, aicon) => {
    try {
        const query = `
           INSERT INTO area (anombre) 
            OUTPUT  inserted.anombre, aicon
            VALUES (@anombre, @aicon)`;

        let cnn = await sql.connect(configsql);
        let result = await cnn.request()
            .input('anombre', sql.NVarChar, anombre)
            .input('aicon', sql.NVarChar, aicon)
            .query(query);

        await cnn.close();

        if (result.recordset && result.recordset.length > 0) {
            return result.recordset[0];
        } else {
            throw new Error('No se encontraron registros después de la inserción.');
        }

    } catch (error) {
        throw error;
    }
};




module.exports = Area;