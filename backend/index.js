/*
 * Auto generated Codehooks (c) example
 * Install: npm i codehooks-js codehooks-crudlify
 */
import { app } from 'codehooks-js';
import { crudlify } from 'codehooks-crudlify';
import { date, object, string, boolean } from 'yup';

const todoYup = object({
  info: string().required(),
  checked: boolean().required(),
  createdOn: date().default(() => new Date()),
});

// Use Crudlify to create a REST API for any collection
crudlify(app, { toDo: todoYup });

// bind to serverless runtime
export default app.init();
