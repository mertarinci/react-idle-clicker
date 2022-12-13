import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    product: [
        {
            id: 0,
            name: "Lemon",
            count: 0,
            workerEfficiency: 10,
            clickEfficiency: 1,
            worker: 0,
            workerPrice: 10,
            color: "yellow",
            icon: "fa-solid fa-lemon",
            sellPrice: 1

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
            price: 100,
            sellPrice: 100
        },
        {
            id: 2,
            name: "Troll Blood",
            count: 0,
            workerEfficiency: 1,
            clickEfficiency: 1,
            worker: 0,
            workerPrice: 10000,
            color: '#f02828',
            icon: "fa-solid fa-droplet",
            sellPrice: 500
        },

        {
            id: 3,
            name: "Dwarf Shirts ",
            count: 0,
            workerEfficiency: 1,
            clickEfficiency: 1,
            worker: 0,
            workerPrice: 1000000,
            color: "#82f884",
            icon: "fa-solid fa-shirt",
            sellPrice: 1000
        },

        {
            id: 4,
            name: "Moon Dust",
            count: 0,
            workerEfficiency: 1,
            clickEfficiency: 1,
            worker: 0,
            workerPrice: 1000000,
            color: "orange",
            icon: "fa-solid fa-moon",
            sellPrice: 10000

        },
        {
            id: 5,
            name: "Witch Apple",
            count: 0,
            workerEfficiency: 1,
            clickEfficiency: 1,
            worker: 0,
            workerPrice: 1000000,
            color: "#a460ed",
            icon: "fa-solid fa-apple-whole",
            sellPrice: 10000

        },

        {
            id: 6,
            name: "Emerald",
            count: 0,
            workerEfficiency: 1,
            clickEfficiency: 1,
            worker: 0,
            workerPrice: 10000000,
            color: "#50c878",
            icon: "fa-solid fa-gem",
            sellPrice: 10000
        },
        {
            id: 7,
            name: "Diamond",
            count: 0,
            workerEfficiency: 1,
            clickEfficiency: 1,
            worker: 0,
            workerPrice: 100000000,
            color: "#4EE2EC",
            icon: "fa-solid fa-diamond",
            sellPrice: 100000
        }
    ],
    user: {
        level: 1,
        currentExp: 0,
        class: 1,
        totalGold: 0
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

            if (state.user.totalGold >= state.product[action.payload[0]].workerPrice * action.payload[1]) {

                state.product[action.payload[0]].worker += action.payload[1]
                state.user.totalGold -= state.product[action.payload[0]].workerPrice * action.payload[1]

                var times = action.payload[1]

                for (var i = 0; i < times; i++) {
                    state.product[action.payload[0]].workerPrice += Math.floor(state.product[action.payload[0]].workerPrice * 0.15)
                }


            }

        },
        sellOneProduct: (state, action) => {

            if (state.product[action.payload].count > 0) {
                state.product[action.payload].count -= 1
                state.user.totalGold += 1
            }
        },

        sellProdByPerc: (state, action) => {
            if (state.product[action.payload[0]].count > 0) {


                state.user.totalGold += Math.floor(((state.product[action.payload[0]].count * state.product[action.payload[0]].sellPrice) / action.payload[1]))
                state.product[action.payload[0]].count -= Math.floor(state.product[action.payload[0]].count / action.payload[1])

            }
        }

    },
})






// Action creators are generated for each case reducer function
export const { clickToGather, incrementByAmount, buyWorker, sellOneProduct, sellProdByPerc } = productSlice.actions

export default productSlice.reducer