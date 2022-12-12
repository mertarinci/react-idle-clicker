import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    product: [
        {
            id: 0,
            name: "Lemon",
            count: 0,
            workerEfficiency: 1,
            clickEfficiency: 1,
            worker: 0,
            workerPrice: 100,
            color: "yellow",
            icon: "fa-solid fa-lemon",

        },
        {
            id: 1,
            name: "Giant Bone",
            count: 0,
            workerEfficiency: 1,
            clickEfficiency: 1,
            worker: 0,
            workerPrice: 1000,
            color: "white",
            icon: "fa-solid fa-bone",
        },
        {
            id: 2,
            name: "Troll Blood",
            count: 0,
            workerEfficiency: 1,
            clickEfficiency: 1,
            worker: 0,
            workerPrice: 10000,
            color: 'red',
            icon: "fa-solid fa-droplet",
        },

        {
            id: 3,
            name: "Dwarf Pants",
            count: 0,
            workerEfficiency: 1,
            clickEfficiency: 1,
            worker: 0,
            workerPrice: 1000000,
            color: "green",
            icon: "fa-solid fa-shirt",
        }
    ],
    user: {
        level: 1,
        currentExp: 0,
        class: 1,
        totalGold: 9999
    }

}


export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        clickToGather: (state, action) => {

            state.product[action.payload].count += 1 * state.product[action.payload].clickEfficiency

        },
        incrementByAmount: (state, action) => {

            state.product[action.payload].count += state.product[action.payload].worker * state.product[action.payload].workerEfficiency

        },

        buyWorker: (state, action) => {
            state.product[action.payload].worker += 1
        },
        sellOneProduct: (state, action) => {

            if (state.product[action.payload].count > 0) {
                state.product[action.payload].count -= 1
                state.user.totalGold += 1
                state.user.currentExp += 1
            }

        },


    },
})






// Action creators are generated for each case reducer function
export const { clickToGather, incrementByAmount, buyWorker, sellOneProduct } = productSlice.actions

export default productSlice.reducer