// handle the errors that ocurrs on http methods
const handleHttpError = (res, message = "Somethig went wrong", code = 403) => {
  res.status(code);
  res.send({ error: message });
};

module.exports = { handleHttpError };
