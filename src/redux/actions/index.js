const USER_EMAIL = 'USER_EMAIL';

const getUserEmail = (email) => ({
  type: USER_EMAIL,
  email,
});

export default getUserEmail;
