const db = require('../db').db()

async function addCat(req, res) {
    const body = req.body;
    try {
        const result = await db.collection("cats").insertOne(body, {});
        const cat = { _id: result.insertedId.toString(), ...body }
        return res.json({ statusCode: 201, data: cat, message: "cat added successfully" });
    } catch (ex) {
        return res
            .status(500)
            .json({ error: `an error occured adding cat: ${ex.message}` });
    }
}

async function getCats(req, res) {
    try {
        const cats = await db.collection("cats").find({}).toArray();
        return res
            .json({ statusCode: 200, data: cats, message: "cats fetched successfully" });
    } catch (error) {
        return res
            .status(500)
            .json({ error: `an error occured adding cat: ${ex.message}` });
    }
}

module.exports = {
    getCats,
    addCat
}