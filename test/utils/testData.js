// test/utils/testData.js
export const generateUser = () => {
  const t = Date.now();
  return {
    email: `test_${t}@starwars.test`,
    password: `Test@123_${t}`,
    groupName: `group_${t}`
  };
};