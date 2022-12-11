import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: 0,
        name: "Lemon",
        count: 0,
        workerEfficiency: 1,
        clickEfficiency: 1,
        worker: 0,
        workerPrice: 100
    },
    {
        id: 1,
        name: "Giant Bone",
        count: 0,
        workerEfficiency: 1,
        clickEfficiency: 1,
        worker: 0,
        workerPrice: 1000
    },
    {
        id: 2,
        name: "Troll Blood",
        count: 0,
        workerEfficiency: 1,
        clickEfficiency: 1,
        worker: 0,
        workerPrice: 10000
    }]

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        increment: (state, action) => {

            state[action.payload].count += 1 * state[action.payload].clickEfficiency

        },
        incrementByAmount: (state, action) => {

            state[action.payload].count += state[action.payload].worker * state[action.payload].workerEfficiency

        },

        buyWorker: (state, action) => {
            state[action.payload].worker += 1
        }
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, buyWorker } = productSlice.actions

export default productSlice.reducer