const express = require('express');
const Project = require('./../models/projectModel');

// exports.getProjects = async (req, res) => {
//   const allProjects = await Project.find(req.body);

//   res.send({
//     allProjects,
//   });
// };

exports.createProject = async (req, res) => {
  try {
    const newProject = await Project.create(req.body);
    res.status(201).json({
      status: 'success',
      message: 'New project created successfully!',
      data: {
        project: newProject,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};
