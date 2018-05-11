import {
  API
} from '../constants';
import {
  rest
} from '../utils';

const DEFAULT_POST = {
  addressId: 1,
  remarks: '',
  // cartDetailIds: []
}

const getByUserId = async function(userId, token) {
  return await rest.get(userId, token)(
    `${API}/user/${userId}/order`
  )
}

const create = async function(userId, token, addressId, remarks, cartDetailIds) {
  cartDetailIds = transArrayIntoString(cartDetailIds)
  const params = Object.assign({}, DEFAULT_POST, {
    addressId,
    remarks,
    cartDetailIds
  })

  return await rest.post(userId, token)(
    `${API}/user/${userId}/order`,
    params
  )
}

function transArrayIntoString(array) {
  const length = array.length
  if (length <= 0) {
    return ''
  }

  let str = ''
  for (let i = 0; i < length; i++) {
    if (i === length - 1) {
      str += array[i]
    } else {
      str += `${array[i]},`
    }
  }

  return str
}

export default {
  getByUserId,
  create
}
