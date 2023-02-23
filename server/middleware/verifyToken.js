/* eslint-disable consistent-return */
/* eslint-disable prefer-destructuring */

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const promisify = require('promisify');
const catchAsync = require('../utils/catchAsync');
const User = require('../schema/user');

dotenv.config();
// module.exports = function verifyToken(req, res, next) {
//   const token = req.headers.authorization.split(' ')[1];
//   console.log(token);
//   if (!token) {
//     res.status(401).json({ error: 'Unauthorized, Missing header token' });
//   } else {
//     jwt.verify(token, process.env.TOKEN_SECRET, (error, decoded) => {
//       if (error) {
//         res.status(401).json({ error: 'Invalid token' });
//       } else {
//         req.userId = decoded.userId;
//         next();
//       }
//     });
//   }
// };

exports.verifyToken = catchAsync(async (req, res, next) => {
  // get token and check if its there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  console.log(token);

  if (!token) {
    return next(res.status(401).json({ error: 'Invalid token' }));
  }
  // verify token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // check if user still exists
  const currentUser = await User.findById(decoded.id);

  if (!currentUser) {
    return next(
      res
        .status(401)
        .json({ error: 'The user belongs to this token is no longer exist.' }),
    );
  }

  // check if user change password after token issued
  // if (currentUser.changePasswordAfter(decoded.id)) {
  //     return next(new AppError('User recently changed password. Please log in again', 401));
  // }

  // grant access
  req.user = currentUser;
  res.locals.user = currentUser;
  next();
});
