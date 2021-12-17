const { checkToken } = require('../jwtToken/getAndSetJwtToken');
const { missingAuthToken, jwtMalformed } = require('../utils/errMessages');
const getByEmail = require('../model/getUserByEmail');

module.exports = async (req, _res, next) => {
  const token = req.headers.authorization;

  if (!token) next(missingAuthToken);

  try {
    const email = checkToken(token);
    const user = await getByEmail(email);

    if (!user) next(jwtMalformed);

    req.user = user;
    next();
  } catch (_e) {
    next(jwtMalformed);
  }
};