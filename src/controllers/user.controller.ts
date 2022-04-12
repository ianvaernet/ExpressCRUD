import express from 'express';
import { UserService } from '@services';

const router = express.Router();
// const { check } = require('express-validator');

router.get('/', function (req, res, next) {
  res.send('GET api/users');
});

/**
 * POST /api/users
 * @tags users
 * @summary CREATE USER
 * @param { CreateUserInput } request.body.required
 * @return { UserResponse } 201 - user create response
 * @return { object } 422 - user not created
 */
// router.post(
//   '/',
//   [
//     check('firstName', 'First name is required').notEmpty(),
//     check('lastName', 'Last name is required').notEmpty(),
//     check('email').custom((value) =>
//       User.findOne({ where: { email: value } }).then((user) => {
//         if (user) {
//           return Promise.reject('E-mail already in use');
//         }
//       })
//     ),
//     check('email').isEmail().normalizeEmail(),
//     check('password', 'Password is required').notEmpty(),
//     check('password', 'The password must have at least 8 characters.').isLength({ min: 8 }),
//     check('country', 'Country is required').notEmpty(),
//     check('city', 'City is required').notEmpty(),
//   ],
//   async (req, res) => {
//     validateRequest(req, res);
//     const { password, email } = req.body;
//     try {
//       if (email == password) {
//         res.status(baseApi.httpCodes.HTTP_INVALID_REQUEST).json({
//           errors: [{ message: baseApi.apiString.EMAIL_DIFFERENT_PASSWORD }],
//         });
//       } else {
//         const user = await createUser(req.body);
//         if (user && process.env.NODE_ENV != 'test') {
//           const cv = await createCurriculum(user.id);
//           await notifySlackCreated(user);
//         }
//         res.status(baseApi.httpCodes.HTTP_CREATED).json({ data: user });
//       }
//     } catch (err) {
//       returnErrors(res, err);
//     }
//   }
// );

export default router;
