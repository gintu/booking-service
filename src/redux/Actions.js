export const UPDATE_REQUEST = 'UPDATE_REQUEST'
export const UPDATE_SERVICE = 'UPDATE_SERVICE'
export const UPDATE_PAYMENT = 'UPDATE_PAYMENT'
export const UPDATE_ENVIRONMENT = 'UPDATE_ENVIRONMENT'


export const updateRequest = (id) => {

    return {
        type:UPDATE_REQUEST,
        id:id
    }
}

export const updateService = (id) => {
    return {
        type:UPDATE_SERVICE,
        id:id
    }
}

export const updateEnvironment =(id) => {
    return {
        type:UPDATE_ENVIRONMENT,
        id:id
    }
}