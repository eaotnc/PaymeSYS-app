import { APIRequest } from '.'
import { selectBrokerSuccess, selectBrokerFailure } from '../reducers/postBox'

const SIMPLERQ_URI = '/api/postbox'
export function postBox(passwordToConfirm) {
  return dispatch => {
    const options = {
      method: 'post',
      url: SIMPLERQ_URI,
      data: {
        passwordToConfirm,
      },
    }

    APIRequest(options, true)
      .then(res => {
        console.log(res)
        dispatch(selectBrokerSuccess(res.data))
        window.location.href = '/ipd'
      })
      .catch(err => {
        dispatch(selectBrokerFailure(err.response.data))
        console.log(err.response)
      })
  }
}
