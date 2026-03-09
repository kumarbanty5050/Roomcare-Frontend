const ACCESS = "roomcare_access";
const REFRESH = "roomcare_refresh";

export const setTokens = (access, refresh) => {
  localStorage.setItem(ACCESS, access);
  localStorage.setItem(REFRESH, refresh);
};

export const getAccessToken = () => localStorage.getItem(ACCESS);
export const getRefreshToken = () => localStorage.getItem(REFRESH);


export const clearTokens = () => {
  localStorage.removeItem(ACCESS);
  localStorage.removeItem(REFRESH);
};
