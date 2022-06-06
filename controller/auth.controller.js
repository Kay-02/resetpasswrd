const {
    signup,
    requestPasswordReset,
    resetPassword,
  } = require("../services/auth.service");
  
  const signUpController = async (req, res, next) => {
    const signupService = await signup(req.body);
    return res.json(signupService);
  };
  
  const resetPasswrdRequestController = async (req, res, next) => {
    const requestPasswrdResetService = await requestPasswrdReset(
      req.body.email
    );
    return res.json(requestPasswrdResetService);
  };
  
  const resetPasswrdController = async (req, res, next) => {
    const resetPasswrdService = await resetPasswrd(
      req.body.userId,
      req.body.token,
      req.body.password
    );
    return res.json(resetPasswrdService);
  };
  
  module.exports = {
    signUpController,
    resetPasswrdRequestController,
    resetPasswrdController,
  };