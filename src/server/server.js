"use server"

export const getSecretData = async () => {
    console.log('test');
  return { secret: "This is hidden from the client" };
};
