export const FETCH_SOFTWARES_BEGIN   = 'FETCH_SOFTWARES_BEGIN';
export const FETCH_SOFTWARES_SUCCESS = 'FETCH_SOFTWARES_SUCCESS';
export const FETCH_SOFTWARES_FAILURE = 'FETCH_SOFTWARES_FAILURE';

export const fetchSoftwaresBegin = () => ({
  type: FETCH_SOFTWARES_BEGIN
});

export const fetchSoftwaresSuccess = softwares => ({
  type: FETCH_SOFTWARES_SUCCESS,
  payload: { softwares }
});

export const fetchSoftwaresFailure = error => ({
  type: FETCH_SOFTWARES_FAILURE,
  payload: { error }
});

export function fetchSoftwares() {
  return dispatch => {
    dispatch(fetchSoftwaresBegin());
    return fetch("/local/softwares.json")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchSoftwaresSuccess(json.softwares));
        return json.softwares;
      })
      .catch(error => dispatch(fetchSoftwaresFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}