const END_POINT = "http://localhost:3000";

function* doFetch({ method, url, data }) {
  const fullPath = END_POINT + url;

  try {
    let response = yield fetch(fullPath);
    response = yield response.json();

    return { data: response };
  } catch (error) {
    return error;
  }
}

export function* getNotes() {
  try {
    const requestParams = {
      method: "GET",
      url: "/notes",
    };

    return yield doFetch(requestParams);
  } catch (error) {
    return error;
  }
}
