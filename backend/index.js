/*
 * Auto generated Codehooks (c) example
 * Install: npm i codehooks-js codehooks-crudlify
 */
import { app } from 'codehooks-js';
import { crudlify } from 'codehooks-crudlify';
import { date, object, string, boolean } from 'yup';

//Do we need this?
// const userAuth = async (req, res, next) => {
//   try {
//     const { authorization } = req.headers;
//     if (authorization) {
//       const token = authorization.replace('Bearer ', '');
//       const token_parsed = jwtDecode(token);
//       req.user_token = token_parsed;
//     }
//     next();
//   } catch (error) {
//     next(error);
//   }
// };
// app.use(userAuth);

const todoYup = object({
  info: string().required(),
  checked: boolean().required(),
  createdOn: date().default(() => new Date()),
});

// Use Crudlify to create a REST API for any collection
crudlify(app, { toDo: todoYup });

// bind to serverless runtime
export default app.init();
