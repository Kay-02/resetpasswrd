const {
    signUpController,
    resetPasswrdRequestController,
    resetPasswrdController,
  } = require("../controllers/auth.controller");
  
  const router = require("express").Router();
  
  router.post("/auth/signup", signUpController);
  router.post("/auth/requestResetPassword", resetPasswrdRequestController);
  router.post("/auth/resetPassword", resetPasswrdController);
  
  module.exports = router;