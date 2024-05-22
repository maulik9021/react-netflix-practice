export const checkValidData = (name, email, password) => {
     const isNameValid = /^(?!\\s)[A-Za-z0-9\\s]+$/.test(name);
     const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
     const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

     if (!isNameValid) {
          return "Name is not Valid";
     }

     if (!isEmailValid) {
          return "Email is not Valid";
     }

     if (!isPasswordValid) {
          return "Password is not Valid";
     }

     return null;
};