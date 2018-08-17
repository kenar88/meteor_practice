import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';

Meteor.startup(() => {

  });
  
  //presentation
  // WebApp.connectHandlers.use((req, res, next) => {
  //   console.log('From middleware');
  //   console.log(req.url, req.method, req.headers, req.query);
    // set HTTP status
    // res.statusCode = 404;
    // set HTTP headers
    // res.setHeader('my-header', 'Rustamchiq');
    // set HTTP body
    // res.write('<h1>This is my middleware</h1>');
    // End HTTP request
    // res.end();
    // next();
  // });


 //validation with SimpleSchema
  // const newSchema = new SimpleSchema({
  //   name: {
  //     type: String,
  //     min: 1,
  //     max: 200,
  //     optional: true
  //   },
  //   age: {
  //     type: Number,
  //     min: 0
  //   },
  //   contactNumber: {
  //     optional: true,
  //     type: String,
  //     regEx: SimpleSchema.RegEx.Phone
  //   }
  // });

  // newSchema.validate({
  //   name: 'Rustam',
  //   age: 30,
  //   contactNumber: '123'
  // });

  // const employeeSchema = new SimpleSchema({
  //   name: {
  //     type: String,
  //     min: 1,
  //     max: 200,
  //   },
  //   hourlyWage: {
  //     type: Number,
  //     min: 0.1,
  //   },
  //   email: {
  //   type: String,
  //   regEx: SimpleSchema.RegEx.Email,
  //   }
  // });

  // employeeSchema.validate({
  //   name: 'Rt',
  //   hourlyWage: 0.2,
  //   email: 'asd@gmail.com',
  // });


