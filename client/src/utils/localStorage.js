const setCookie = (name, value, days) => {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `expires=${date.toUTCString()}`;
  }
  const domain = `domain=.pw.net`;
  document.cookie = `${name}=${value || ''}; ${expires}; ${domain}; path=/`;
};

const load = (item) => {
  try {
    const serializedState = localStorage.getItem(item);

    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const save = (name, value) => {
  const serializedState = JSON.stringify(value);
  localStorage.setItem(name, serializedState);

  if (name === 'token') {
    setCookie(name, value, 14);
  }
};

export default {
  load,
  save,
};
