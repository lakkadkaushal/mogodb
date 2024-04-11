let usermodel = require("../model/usermodel");

exports.insert_data = async (req, res) => {
      let data = await usermodel.create(req.body);
      res.status(200).json({
            status: "Data Insert",
            data
      })
}

exports.find_data = async (req, res) => {
      let data = await usermodel.find();
      res.status(200).json({
            status: "Data Find",
            data
      })
}

exports.update_data = async (req, res) => {
      let id = req.params.id;
      let data = await usermodel.findByIdAndUpdate(id, req.body);
      res.status(200).json({
            status: "Data Updated",
            data
      })
}

exports.delete_data = async (req, res) => {
      let id = req.params.id;
      let data = await usermodel.findByIdAndDelete(id);
      res.status(200).json({
            status: "Data Deleted",
            data
      })
}