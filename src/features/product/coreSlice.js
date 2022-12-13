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
            workerPrice: 10,
            color: "yellow",
            icon: "fa-solid fa-lemon",
            sellPrice: 1,
            isOpen: true

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
            sellPrice: 100,
            isOpen: false,
            openPrice: 1000
        },
        {
            id: 2,
            name: "Troll Blood",
            count: 0,
            workerEfficiency: 1,
            clickEfficiency: 1,
            worker: 0,
            workerPrice: 10000,
            color: '#f33939',
            icon: "fa-solid fa-droplet",
            sellPrice: 500,
            isOpen: false,
            openPrice: 10000
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
            sellPrice: 1000,
            isOpen: false,
            openPrice: 100000
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
            sellPrice: 10000,
            isOpen: false,
            openPrice: 1000000

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
            sellPrice: 10000,
            isOpen: false,
            openPrice: 10000000

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
            sellPrice: 10000,
            isOpen: false,
            openPrice: 100000000
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
            sellPrice: 100000,
            isOpen: false,
            openPrice: 1000000000
        }
    ],
    user: {
        isNewPlayer: true,
        username: "Unkown",
        level: 1,
        currentExp: 0,
        class: 1,
        totalGold: 5000
    },
    upgrades: [
        {
            id: 0,
            name: "Lemonate Time!",
            color: "yellow",
            desc: "Lemon click efficieny increase 10x.",
            price: 100,
            isPurchased: false,
            parentIcon: "fa-solid fa-lemon",
            typeUpg: "click",
            multiplier: 10,
            target: 0
        },
        {
            id: 1,
            name: "Collect Bones!",
            color: "white",
            desc: "Giant Bone click efficieny increase 10x.",
            price: 1000,
            isPurchased: false,
            parentIcon: "fa-solid fa-bone",
            typeUpg: "click",
            multiplier: 10,
            target: 1
        },
        {
            id: 2,
            name: "Eww! Is that blood?",
            color: "red",
            desc: "Troll Blood click efficieny increase 10x.",
            price: 10000,
            isPurchased: false,
            parentIcon: "fa-solid fa-droplet",
            typeUpg: "click",
            multiplier: 10,
            target: 2
        },

        {
            id: 3,
            name: "Lemon Revolution!",
            color: "yellow",
            desc: "Your lemon workers efficieny increase 50x.",
            price: 5000,
            isPurchased: false,
            parentIcon: "fa-solid fa-lemon",
            typeUpg: "worker",
            multiplier: 50,
            target: 0
        },
        {
            id: 4,
            color: "white",
            name: "We Hate Giants!",
            desc: "Your giant bone workers efficieny increase 50x.",
            price: 50000,
            isPurchased: false,
            parentIcon: "fa-solid fa-bone",
            typeUpg: "worker",
            multiplier: 50,
            target: 1
        },
        {
            id: 5,
            color: "red",
            name: "Blood Party!",
            desc: "Your troll blood workers efficieny increase 50x.",
            price: 500000,
            isPurchased: false,
            parentIcon: "fa-solid fa-droplet",
            typeUpg: "worker",
            multiplier: 50,
            target: 2
        },

    ],
    potions: [
        {
            id: 0,
            count: 0,
            color: "yellow",
            name: "Lemon Fizz",
            desc: "Weak lemon potion. You can mix this potion with other potions to make stronger ones. This potion is the basic potion that every alchemy student learn in their first year.",
            ingsToMake: [0],
            materialNeed: [10],
            sellPrice: 100,
        },
        {
            id: 1,
            count: 0,
            color: "#ffffc7",
            name: "Bone Lemonate",
            ingsToMake: [0, 1],
            materialNeed: [100, 15],
            desc: "Bitter combination of lemon and bone. Most of the alchemists can make this potion. This potion can make your bones stronger in order to fight with the evil.",
            sellPrice: 10
        },
        {
            id: 2,
            count: 0,
            color: "orange",
            name: "Bloody Hell",
            ingsToMake: [0, 2],
            materialNeed: [100, 0, 10],
            desc: "Have you ever tasted blood? Now you have to! You are fighting with the biggest evil Aringard has ever seen! Ofcourse you are going to drink that blood. A little favor for you, you can mix it with lemon.",
            sellPrice: 100

        }
    ]

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
                    state.product[action.payload[0]].workerPrice += Math.ceil(state.product[action.payload[0]].workerPrice * 0.08)
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
        },

        upgradeGather: (state, action) => {

            if (state.user.totalGold >= state.upgrades[action.payload[0]].price) {

                if (state.upgrades[action.payload[0]].typeUpg === "click") {

                    state.product[action.payload[1]].clickEfficiency = action.payload[2]
                    state.user.totalGold -= state.upgrades[action.payload[0]].price
                    state.upgrades[action.payload[0]].isPurchased = true

                }

                if (state.upgrades[action.payload[0]].typeUpg === "worker") {

                    state.product[action.payload[1]].workerEfficiency = action.payload[2]
                    state.user.totalGold -= state.upgrades[action.payload[0]].price
                    state.upgrades[action.payload[0]].isPurchased = true

                }

            }

        },

        unlockProduct: (state, action) => {

            if (state.user.totalGold >= state.product[action.payload].openPrice) {

                state.product[action.payload].isOpen = true
                state.user.totalGold -= state.product[action.payload].openPrice

            }
        },

        changeUsername: (state, action) => {

            state.user.username = action.payload

        }

    },
})






// Action creators are generated for each case reducer function
export const { clickToGather, incrementByAmount, buyWorker, sellOneProduct, sellProdByPerc, upgradeGather, unlockProduct, changeUsername } = productSlice.actions

export default productSlice.reducer