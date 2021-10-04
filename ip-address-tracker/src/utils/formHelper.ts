export const checkIPAddressIPv4 = (ip: string) =>
  /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
    ip
  );

export const handleErrors = (reason: ErrorReasons): FormCompError => {
  const error: FormCompError = {
    isError: true,
    msg: "",
  };
  if (reason === "INVALID_IP") {
    error.msg = "Error! Invalid IP.";
  } else if (reason === "BAD_API_RESPONSE") {
    error.msg = "Server Error! Please try again later.";
  } else if (reason === "PRIVATE_IP") {
    error.msg = "Error! Private IP.";
  }
  return error;
};
