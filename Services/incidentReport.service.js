const { incidentReport } = require('../Models');


const addIncidentReport = async (userBody) => {
    const response = await incidentReport.create(userBody);
    return { status: 200, message: response };
  };

  const getIncidentReport = async () => {
    const response = await incidentReport.find();
    return { status: 200, message: response };
  };

  const updateIncidentReport = async (id,updateBody) => {
    const response = await incidentReport.findById(id);
    if (!response) {
      return { status: 401, message: 'Something went wrong please try later!' }
    }
    Object.assign(response, updateBody);
    await response.save();
    return { status: 200, message: response };

  };

  const deleteIncidentReport= async (id) => {
    const response = await incidentReport.findById(id);
    if (response) {
      await response.remove();
      return {status: 200, message: response};
    }
     return {status: 401, message: 'Something went wrong! please try later'}
  };

  module.exports = {
    addIncidentReport,
    getIncidentReport,
    updateIncidentReport,
    deleteIncidentReport
  };