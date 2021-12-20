const Document = require('../models/document');

const getAllDocs = async (req, res) => {
  try {
    const documents = await Document.find();
    return res.status(200).json({ documents });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateDoc = async (req, res) => {
  try {
    const { id } = req.params;
    await Document.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, document) => {
        if (err) {
          res.status(500);
          console.log(err);
        }
        if (!document) {
          res.status(500);
          console.log('No document found');
        }
        return res.status(200).json(document);
      }
    );
  } catch (Error) {
    return res.status(500);
    console.log(error.message);
  }
};

const createDoc = async (req, res) => {
  try {
    const document = await new Document(req.body);
    await document.save();
    return res.status(201).json({
      document
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getDocByTitle = async (req, res) => {
  const title = req.params.title;
  try {
    const document = await Document.find({ name: title });
    return res.status(200).json({ document });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
module.exports = {
  getAllDocs,
  updateDoc,
  createDoc,
  getDocByTitle
};
