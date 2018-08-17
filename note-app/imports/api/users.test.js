import expect from 'expect';
import { Meteor } from 'meteor/meteor';

import { validateNewUser } from './users';


if (Meteor.isServer) {
  describe ('USERS', function () {

    it ('should allow valid email', function() {
      const testUser = {
        emails: [
          {
            address: 'test@mail.com'
          }
        ]
      };
  
      const res = validateNewUser(testUser);
  
      expect(res).toBe(true);
    });

    it ('if invalid email', function () {
      const testUser = {
        emails: [
          {
            address: 'testmail'
          }
        ]
      };

      expect(() => {
        validateNewUser(testUser);
      }).toThrow();
    });
  });
}




// const add = (a, b) => {
//   if (typeof b !== 'number') {
//     return a + a;
//   }

//   return a + b;
// };

// describe ('ADD', function () {
//   it ('should do smth', function(){
//     const res = add(1, 2);

//     expect(res).toBe(3);
//   });
  
//   it ('Double number', function () {
//     const res = add(44);

//     expect(res).toBe(88);
//   });
// });
