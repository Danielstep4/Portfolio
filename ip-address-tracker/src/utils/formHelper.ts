export const checkIPAddressIPv4 = (ip: string) =>
  /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
    ip
  );
export const checkIPPrivate = (response: IPResponse) => {
  let isPrivate = false;
  if (response.isp.toLowerCase().includes("private")) isPrivate = true;
  else if (!response.location.timezone) isPrivate = true;
  else if (!response.location.city || !response.location.region)
    isPrivate = true;

  return handleErrors(isPrivate ? "PRIVATE_IP" : undefined);
};
export const handleErrors = (reason?: ErrorReasons): FormCompError => {
  const error: FormCompError = {
    isError: true,
    msg: "",
  };
  if (reason === "INVALID_IP") {
    error.msg = "Error! Invalid IP.";
  } else if (reason === "BAD_API_RESPONSE") {
    error.msg = "Server Error! Please try again later or a different ip.";
  } else if (reason === "PRIVATE_IP") {
    error.msg = "Error! Private IP.";
  } else if (reason === "LIMIT") {
    error.msg = "Error! Limit Exceeded (20 requests).";
  } else (error.isError = false), (error.msg = null);
  return error;
};
