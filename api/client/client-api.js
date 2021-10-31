const END_POINT = "http://localhost:3000";

function* doFetch({ method, url, data }) {
  const fullPath = END_POINT + url;

  try {
    let response = yield fetch(fullPath, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });
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

export function* submitNote(note) {
  try {
    const requestParams = {
      method: "POST",
      url: "/notes",
      data: note,
    };

    return yield doFetch(requestParams);
  } catch (error) {
    return error;
  }
}

export function* updateNote(id, note) {
  try {
    const requestParams = {
      method: "PATCH",
      url: "/notes/" + id,
      data: note,
    };

    return yield doFetch(requestParams);
  } catch (error) {
    return error;
  }
}

export function* removeNote(id) {
  try {
    const requestParams = {
      method: "DELETE",
      url: "/notes/" + id,
    };

    return yield doFetch(requestParams);
  } catch (error) {
    return error;
  }
}
