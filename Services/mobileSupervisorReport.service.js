const { mobileSupervisorReport } = require('../Models');


const addMobileSupervisorReport = async (userBody) => {
    const response = await mobileSupervisorReport.create(userBody);
    return { status: 200, message: response };
  };

  const getMobileSupervisorReport = async () => {
    const response = await mobileSupervisorReport.find();
    return { status: 200, message: response };
  };

  const updateMobileSupervisorReport = async (id,updateBody) => {
    const response = await mobileSupervisorReport.findById(id);
    if (!response) {
      return { status: 401, message: 'Something went wrong please try later!' }
    }
    Object.assign(response, updateBody);
    await response.save();
    return { status: 200, message: response };

  };

  const deleteMobileSupervisorReport= async (id) => {
    const response = await mobileSupervisorReport.findById(id);
    if (response) {
      await response.remove();
      return {status: 200, message: response};
    }
     return {status: 401, message: 'Something went wrong! please try later'}
  };

  module.exports = {
    addMobileSupervisorReport,
    getMobileSupervisorReport,
    updateMobileSupervisorReport,
    deleteMobileSupervisorReport
  };