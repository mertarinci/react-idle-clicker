import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    idleWorker: 10,
    activeWorker: 0
}

export const workerSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addWorker: (state) => {

            if (state.idleWorker !== 0) {
                state.activeWorker += 1
                state.idleWorker -= 1
            }

        },
        removeWorker: (state) => {
            if (state.activeWorker !== 0) {
                state.activeWorker -= 1
                state.idleWorker += 1
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { addWorker, removeWorker, incrementByAmount } = workerSlice.actions

export default workerSlice.reducer