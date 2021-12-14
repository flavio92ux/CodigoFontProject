const requestError = {
    status: 500,
    message: 'Request Error',
};

const invalidId = {
    status: 400,
    message: 'Argument passed in must be a string of 12 bytes or a string of 24 hex characters',
};

const jwtMalformed = {
    status: 400,
    message: 'JWT Malformed',
};

const userAlreadyExist = {
    status: 409,
    message: 'User already exist',
};

const missingAuthToken = {
    status: 401,
    message: 'missing auth token',
};

const userDoesNotExist = {
    status: 400,
    message: 'User does not exist',
};

const productDoesNotExist = {
    status: 400,
    message: 'Product does not exist',
};
  
const invalidPassword = {
status: 400,
message: 'Password Incorrect',
};

module.exports = {
    invalidPassword,
    userDoesNotExist,
    requestError,
    userAlreadyExist,
    productDoesNotExist,
    invalidId,
    missingAuthToken,
    jwtMalformed,
};