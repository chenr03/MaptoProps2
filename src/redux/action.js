
    export const addCar = (car) => {
        return {
            type: 'ADD_CAR',
            value: car
        }
    };

    export const removeCar = (index) => {
        return {
            type: 'REMOVE_CAR',
            value: index
        }
    };


    // export const setUser = (newUser) => {
    //     return {
    //         type: 'SET_USER',
    //         value: newUser
    //     }
    // }
    //
    // export const unsetUser = (index) => {
    //     return {
    //         type: 'UNSET_USER',
    //         value: index
    //     }
    // }