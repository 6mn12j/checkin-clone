export const decoding = (data: string): string =>
  window.atob(data.split('.')[1]);

const getCookie = (): string => {
  const cookie = document.cookie;
  return cookie;
};

export const getToken = (): string => {
  const cookie = getCookie();
  const start = cookie.indexOf('=');
  return cookie.substring(start + 1, cookie.length);
};
