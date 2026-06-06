export const apiLinks = {
  home: '/api/',
  newPage: '/api/new-page',
  // Add other page endpoints as needed
};

export const sendResponse = (res, data, status = 200) => {
  return res.status(status).json({
    data,
    links: apiLinks
  });
};

export const sendError = (res, message, status = 400) => {
  return res.status(status).json({
    error: message,
    links: apiLinks
  });
};
