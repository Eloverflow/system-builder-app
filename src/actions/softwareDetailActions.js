export const FETCH_SOFTWARE_DETAILS_BEGIN   = 'FETCH_SOFTWARE_DETAILS_BEGIN';
export const FETCH_SOFTWARE_DETAILS_SUCCESS = 'FETCH_SOFTWARE_DETAILS_SUCCESS';
export const FETCH_SOFTWARE_DETAILS_FAILURE = 'FETCH_SOFTWARE_DETAILS_FAILURE';

export const fetchSoftwareDetailsBegin = () => ({
  type: FETCH_SOFTWARE_DETAILS_BEGIN
});

export const fetchSoftwareDetailsSuccess = softwareDetails => ({
  type: FETCH_SOFTWARE_DETAILS_SUCCESS,
  payload: { softwareDetails }
});

export const fetchSoftwareDetailsFailure = error => ({
  type: FETCH_SOFTWARE_DETAILS_FAILURE,
  payload: { error }
});

export function fetchSoftwareDetails(softwareName) {
  return dispatch => {
    dispatch(fetchSoftwareDetailsBegin());
    return fetch("/api/software-details/" + softwareName)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchSoftwareDetailsSuccess(json.softwareDetails));
        return json.softwareDetails;
      })
      .catch(error => dispatch(fetchSoftwareDetailsFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}