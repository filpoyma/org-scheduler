const GroupShema = require('../models/GroupSchema');

exports.allSchemas = async (req, res) => {
  const schemas = await GroupShema.find({}, {}, { _id: 0 });
  res.json(schemas);
};

exports.schemas = async (req, res) => { //todo try - catch
  const { phase } = req.params;
  const schemas = await GroupShema.findOne({ phase: phase }, { _id: 0 });
  res.json(schemas);
};

exports.updSchemas = async (req, res) => {
  const { phase } = req.params;
  const { grschema, key } = req.body;

  try {
    let schemas = await GroupShema.findOne({ phase: phase });
    if (!schemas) {
      schemas = new GroupShema({ [key]: grschema, phase: phase });
      await schemas.save();
    }
    const group = await GroupShema.updateOne({ phase: phase }, { [key]: grschema }); //todo оптимизировать в save()
    res.status(200).json({ message: 'ok', group });
  } catch (err) {
    console.log('Schema update error', err);
    res.status(500).json({ err: err.message });
  }
};
