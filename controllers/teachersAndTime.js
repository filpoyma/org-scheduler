const TeachersTime = require('../models/TeachersTime');

exports.allTeachersAndTime = async (req, res) => {
  const groupType = req.query.groupType;
  try {
    let teachersTime = null;
    if (groupType === 'undefined') teachersTime = await TeachersTime.find({}, { _id: 0 }).lean();
    else teachersTime = await TeachersTime.findOne({ groupType }, { _id: 0 }).lean();
    res.status(200).json(teachersTime);
  } catch (err) {
    console.log('teachersAndTime get error', err);
    res.status(500).json({ err: err.message });
  }
};

exports.updTeachersAndTime = async (req, res) => {
  const { teachers, timegaps, groupType } = req.body;
  try {
    let teachersTime = await TeachersTime.findOne({ groupType });
    if (!teachersTime) {
      teachersTime = new TeachersTime({ teachers, timegaps, groupType });
    } else {
      teachersTime.teachers = teachers;
      teachersTime.timegaps = timegaps;
    }
    await teachersTime.save();
    res.status(200).json({ message: 'ok' });
  } catch (err) {
    console.log('teachersAndTime update error', err);
    res.status(500).json({ err: err.message });
  }
};
