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
            sellPrice: 5,
            isOpen: true

        },
        {
            id: 1,
            name: "Giant Bone",
            count: 0,
            workerEfficiency: 1,
            clickEfficiency: 1,
            worker: 0,
            workerPrice: 1500,
            color: "white",
            icon: "fa-solid fa-bone",
            sellPrice: 100,
            isOpen: false,
            openPrice: 50000
        },
        {
            id: 2,
            name: "Troll Blood",
            count: 0,
            workerEfficiency: 1,
            clickEfficiency: 1,
            worker: 0,
            workerPrice: 30000,
            color: '#f33939',
            icon: "fa-solid fa-droplet",
            sellPrice: 500,
            isOpen: false,
            openPrice: 500000
        },

        {
            id: 3,
            name: "Dwarf Shirts ",
            count: 0,
            workerEfficiency: 1,
            clickEfficiency: 1,
            worker: 0,
            workerPrice: 200000,
            color: "#82f884",
            icon: "fa-solid fa-shirt",
            sellPrice: 2000,
            isOpen: false,
            openPrice: 5000000
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
            openPrice: 75000000

        },
        {
            id: 5,
            name: "Witch Apple",
            count: 0,
            workerEfficiency: 1,
            clickEfficiency: 1,
            worker: 0,
            workerPrice: 65000000,
            color: "#a460ed",
            icon: "fa-solid fa-apple-whole",
            sellPrice: 100000,
            isOpen: false,
            openPrice: 1000000000

        },

        {
            id: 6,
            name: "Emerald",
            count: 0,
            workerEfficiency: 1,
            clickEfficiency: 1,
            worker: 0,
            workerPrice: 300000000,
            color: "#50c878",
            icon: "fa-solid fa-gem",
            sellPrice: 10000000,
            isOpen: false,
            openPrice: 20000000000
        },
        {
            id: 7,
            name: "Diamond",
            count: 0,
            workerEfficiency: 1,
            clickEfficiency: 1,
            worker: 0,
            workerPrice: 2000000000,
            color: "#4EE2EC",
            icon: "fa-solid fa-diamond",
            sellPrice: 500000000,
            isOpen: false,
            openPrice: 300000000000
        }
    ],
    user: {
        isNewPlayer: true,
        username: "Unkown",
        currentExp: 0,
        expProgress: 0,
        // levelFunc: function () { return Math.floor(this.currentExp / 100) + 1 },
        level: 1,
        class: 1,
        totalGold: 0,
        notifications: [
        ],
        isGameOver: false,
        endGameScreen: true

    },
    upgrades: [
        {
            id: 0,
            name: "Lemonate Time!",
            color: "yellow",
            desc: "Lemon click efficieny increase 50x.",
            price: 100,
            isPurchased: false,
            parentIcon: "fa-solid fa-lemon",
            typeUpg: "click",
            multiplier: 50,
            target: 0
        },
        {
            id: 1,
            name: "Lemon Revolution!",
            color: "yellow",
            desc: "Your lemon workers efficieny increase 20x.",
            price: 5000,
            isPurchased: false,
            parentIcon: "fa-solid fa-lemon",
            typeUpg: "worker",
            multiplier: 20,
            target: 0
        },
        {
            id: 2,
            name: "Collect Bones!",
            color: "white",
            desc: "Giant Bone click efficieny increase 50x.",
            price: 75000,
            isPurchased: false,
            parentIcon: "fa-solid fa-bone",
            typeUpg: "click",
            multiplier: 50,
            target: 1
        },

        {
            id: 3,
            color: "white",
            name: "We Hate Giants!",
            desc: "Your giant bone workers efficieny increase 20x.",
            price: 300000,
            isPurchased: false,
            parentIcon: "fa-solid fa-bone",
            typeUpg: "worker",
            multiplier: 20,
            target: 1
        },

        {
            id: 4,
            name: "Eww! Is that blood?",
            color: "red",
            desc: "Troll Blood click efficieny increase 50x.",
            price: 1000000,
            isPurchased: false,
            parentIcon: "fa-solid fa-droplet",
            typeUpg: "click",
            multiplier: 50,
            target: 2
        },

        {
            id: 5,
            name: "Slay them all!",
            color: "red",
            desc: "Troll Blood worker efficieny increase 20x.",
            price: 3000000,
            isPurchased: false,
            parentIcon: "fa-solid fa-droplet",
            typeUpg: "worker",
            multiplier: 20,
            target: 2
        },


        {
            id: 6,
            color: "#82f884",
            name: "Give me that shirt!",
            desc: "Dwarf Shirt click efficieny increase 50x.",
            price: 20000000,
            isPurchased: false,
            parentIcon: "fa-solid fa-shirt",
            typeUpg: "click",
            multiplier: 50,
            target: 3
        },
        {
            id: 7,
            color: "#82f884",
            name: "Shirt factory!",
            desc: "Dwarf Shirt workers efficieny increase 20x.",
            price: 50000000,
            isPurchased: false,
            parentIcon: "fa-solid fa-shirt",
            typeUpg: "worker",
            multiplier: 20,
            target: 3
        },
        {
            id: 8,
            color: "orange",
            name: "Reach the moon!",
            desc: "Moon Dust click efficieny increase 50x.",
            price: 100000000,
            isPurchased: false,
            parentIcon: "fa-solid fa-moon",
            typeUpg: "click",
            multiplier: 50,
            target: 4
        },
        {
            id: 9,
            color: "orange",
            name: "Bridge to moon!",
            desc: "Moon Dust workers efficieny increase 20x.",
            price: 300000000,
            isPurchased: false,
            parentIcon: "fa-solid fa-moon",
            typeUpg: "worker",
            multiplier: 20,
            target: 4
        },
        {
            id: 10,
            color: "#a460ed",
            name: "Apple time!",
            desc: "Witch Apple click efficieny increase 50x.",
            price: 4000000000,
            isPurchased: false,
            parentIcon: "fa-solid fa-apple-whole",
            typeUpg: "click",
            multiplier: 50,
            target: 5
        },

        {
            id: 11,
            color: "#a460ed",
            name: "We love apples!",
            desc: "Witch Apple workers efficieny increase 20x.",
            price: 10000000000,
            isPurchased: false,
            parentIcon: "fa-solid fa-apple-whole",
            typeUpg: "worker",
            multiplier: 20,
            target: 5
        },
        {
            id: 12,
            color: "#50c878",
            name: "Green heaven!",
            desc: "Emerald click efficieny increase 50x.",
            price: 80000000000,
            isPurchased: false,
            parentIcon: "fa-solid fa-gem",
            typeUpg: "click",
            multiplier: 50,
            target: 6
        },
        {
            id: 13,
            color: "#50c878",
            name: "Emerald 4 Life",
            desc: "Emerald worker efficieny increase 20x.",
            price: 120000000000,
            isPurchased: false,
            parentIcon: "fa-solid fa-gem",
            typeUpg: "worker",
            multiplier: 20,
            target: 6
        },
        {

            id: 14,
            color: "#4ee2ec",
            name: "My precious!",
            desc: "Diamond click efficieny increase 50x.",
            price: 1500000000000,
            isPurchased: false,
            parentIcon: "fa-solid fa-diamond",
            typeUpg: "click",
            multiplier: 50,
            target: 7
        },

        {
            id: 15,
            color: "#4ee2ec",
            name: "Blood Diamonds?",
            desc: "Diamonds worker efficieny increase 20x.",
            price: 5000000000000,
            isPurchased: false,
            parentIcon: "fa-solid fa-diamond",
            typeUpg: "worker",
            multiplier: 20,
            target: 7
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
            materialNeed: [1000],
            sellPrice: 100,
            exp: 0.1
        },
        {
            id: 1,
            count: 0,
            color: "#ffffc7",
            name: "Bone Lemonate",
            ingsToMake: [0, 1],
            materialNeed: [5000, 1500],
            desc: "Bitter combination of lemon and bone. Most of the alchemists can make this potion. This potion can make your bones stronger in order to fight with the evil.",
            sellPrice: 10,
            exp: 0.2
        },
        {
            id: 2,
            count: 0,
            color: "orange",
            name: "Bloody Hell",
            ingsToMake: [0, 2],
            materialNeed: [8000, 1000],
            desc: "Have you ever tasted blood? Now you have to! You are fighting with the biggest evil Aringard has ever seen! Ofcourse you are going to drink that blood. A little favor, you can mix it with lemon!",
            sellPrice: 100,
            exp: 0.3

        },
        {
            id: 3,
            count: 0,
            color: "#FF748C",
            name: "Fleshy Bone",
            ingsToMake: [1, 2],
            materialNeed: [8000, 2000],
            desc: "These two ingredients shouldn't be combined but ehh, seems like it's working. Professor Dumblecunt used to love this potion. We don't know why but it gives a strange stamina to who drinks this potion.",
            sellPrice: 500000,
            exp: 0.4

        },
        {
            id: 4,
            count: 0,
            color: "#f17a00",
            name: "Shirt Dye",
            ingsToMake: [2, 3],
            materialNeed: [75000, 15000],
            desc: "Go in front of cauldron and add dwarf shirts and couple of blood. Puff! Now you have shirt dye. You can either sell it for a good price or dye your clothes.",
            sellPrice: 100,
            exp: 0.5


        }, {
            id: 5,
            count: 0,
            color: "#f1b651",
            name: "Sex on the Moon",
            ingsToMake: [0, 4],
            materialNeed: [100000, 20000],
            desc: "Who doesn't like lemonade? But if you put some Moon Dust in it, you can make this magical potion. With this energetic potion, you can make your energy high to moon!",
            sellPrice: 100,
            exp: 0.6

        }, {
            id: 6,
            count: 0,
            color: "#f14d51",
            name: "Blood and Love",
            ingsToMake: [2, 4],
            materialNeed: [75000, 30000],
            desc: "You can mix everything but can you make meaningful potions? This potion represent love and violent such as lovers in the moonlight and violent that shedding blood.",
            sellPrice: 100,
            exp: 0.7

        },
        {
            id: 7,
            count: 0,
            color: "#ec85ff",
            name: "Candy Apple",
            ingsToMake: [1, 5],
            materialNeed: [50000, 10000],
            desc: "You know candy apple right? Apple on the stick, cover with melted sugar. Now the stick is bone and the apple is ... regular apple... isn't it?  Trust me, it's delicious (even in liquid form)!",
            sellPrice: 100,
            exp: 0.8

        },
        {
            id: 8,
            count: 0,
            color: "#9acd32",
            name: "Dusty Gem",
            ingsToMake: [4, 6],
            materialNeed: [35000, 10000],
            desc: "This potion only made by master alchemists. I believe name is self explanatory but if you want to hear from me, listen. Put some moon dust and emerald in to the cauldron and voilà!",
            sellPrice: 100,
            exp: 0.9

        }, {
            id: 9,
            count: 0,
            color: "#008080",
            name: "Diamondcitrus",
            ingsToMake: [0, 7],
            materialNeed: [100000, 2000],
            desc: "The most delicious and attractive potion. It's color is the favorite by alchemist society. You have to put tons of lemons in order melt the diamonds that you put. Do i have to mention this potion is really (like really) rare? ",
            sellPrice: 100,
            exp: 1

        },
        {
            id: 10,
            count: 0,
            color: "#40E0D0",
            name: "Endgame",
            ingsToMake: [6, 7],
            materialNeed: [10000, 10000],
            desc: "Do you know why alchemists called this 'Endgame'? Because this is the one eternal potion can defeat the evil! It is almost imposible to make this potion but if you can, that's end of the game!",
            sellPrice: 100,
            exp: 10

        },
        {
            id: 11,
            count: 0,
            color: "red",
            name: "I Love My Wife",
            ingsToMake: [6, 7],
            materialNeed: [9999999999999999, 9999999999999999],
            desc: "This potion is a total fantasy. You don't need to make this potion for exams or anything else. This is just a potion dedicated for my (Author's) wife. ",
            sellPrice: 100,
            exp: 1.2

        },
    ],
    midterms: [
        {
            id: 0,
            class: 1,
            name: "Midterm Exam No.1",
            isOpen: true,
            potionNums: [0, 1],
            potionNeeds: [100, 100],
            progress: 0,
            completed: false
        },
        {
            id: 1,
            class: 1,
            name: "Midterm Exam No.2",
            isOpen: true,
            potionNums: [2, 3],
            potionNeeds: [100, 100],
            progress: 0,
            completed: false
        },
        {
            id: 2,
            class: 2,
            name: "Midterm Exam No.3",
            isOpen: false,
            potionNums: [4, 5],
            potionNeeds: [100, 100],
            progress: 0,
            completed: false
        },
        {
            id: 3,
            class: 2,
            name: "Midterm Exam No.4",
            isOpen: false,
            potionNums: [6, 7],
            potionNeeds: [100, 100],
            progress: 0,
            completed: false
        },


    ],
    finals: [
        {
            id: 0,
            class: 1,
            name: "Final Exam No.1",
            isOpen: true,
            potionNums: [1, 3],
            potionNeeds: [200, 200],
            progress: 0,
            completed: false
        },
        {
            id: 1,
            class: 1,
            name: "Final Exam No.2",
            isOpen: true,
            potionNums: [4, 5],
            potionNeeds: [200, 200],
            progress: 0,
            completed: false
        },
        {
            id: 2,
            class: 2,
            name: "Final Exam No.3",
            isOpen: false,
            potionNums: [7, 8],
            potionNeeds: [200, 200],
            progress: 0,
            completed: false
        },
        {
            id: 3,
            class: 2,
            name: "Final Exam No.4",
            isOpen: false,
            potionNums: [9, 10],
            potionNeeds: [200, 200],
            progress: 0,
            completed: false
        },
    ]

}


export const coreSlice = createSlice({
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
                    state.product[action.payload[0]].workerPrice += Math.ceil(state.product[action.payload[0]].workerPrice * 0.07)
                }


                state.user.notifications.splice(0, 0, { not: `You bought ${times} ${state.product[action.payload[0]].name} worker.`, color: `${state.product[action.payload[0]].color}` })

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


                state.user.notifications.splice(0, 0, { not: `You sold ${state.product[action.payload[0]].name}.`, color: `${state.product[action.payload[0]].color}` })
            }
        },

        upgradeGather: (state, action) => {

            if (state.user.totalGold >= state.upgrades[action.payload[0]].price) {

                if (state.upgrades[action.payload[0]].typeUpg === "click") {

                    state.product[action.payload[1]].clickEfficiency = action.payload[2]
                    state.user.totalGold -= state.upgrades[action.payload[0]].price
                    state.upgrades[action.payload[0]].isPurchased = true

                    state.user.notifications.splice(0, 0, { not: `You upgraded ${state.product[action.payload[1]].name} click!`, color: `${state.product[action.payload[1]].color}` })

                }

                if (state.upgrades[action.payload[0]].typeUpg === "worker") {

                    state.product[action.payload[1]].workerEfficiency = action.payload[2]
                    state.user.totalGold -= state.upgrades[action.payload[0]].price
                    state.upgrades[action.payload[0]].isPurchased = true

                    state.user.notifications.splice(0, 0, { not: `You upgraded ${state.product[action.payload[1]].name} workers!`, color: `${state.product[action.payload[1]].color}` })

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
            state.user.isNewPlayer = false

        },


        makePotion: (state, action) => {

            const ingredients = state.potions[action.payload[0]].ingsToMake

            let isPotMade = 0


            for (let i = 0; i < ingredients.length; i++) {

                let selectedProduct = state.product[ingredients[i]] // Lemon 0 , Bone 1, Blood 2

                // let ingredient = state.potions[action.payload[0]].ingsToMake[i] // 0 , 2 

                // [0,2]
                // [100,10]

                // Recieves ID of potion and returns material need with ingredient order 
                // Example : ingredient : [0,2] -> materialNeed : [10,0,20] => Returns : 10 and 20

                let materialNeed = state.potions[action.payload[0]].materialNeed[i]

                if (selectedProduct.count >= materialNeed * action.payload[1]) {

                    isPotMade += 1

                }
            }

            if (isPotMade === ingredients.length) {


                if (ingredients[1]) {
                    state.product[ingredients[0]].count -= state.potions[action.payload[0]].materialNeed[0] * action.payload[1]
                    state.product[ingredients[1]].count -= state.potions[action.payload[0]].materialNeed[1] * action.payload[1]
                } else {
                    state.product[ingredients[0]].count -= state.potions[action.payload[0]].materialNeed[0] * action.payload[1]

                }

                state.potions[action.payload[0]].count += action.payload[1]
                state.user.currentExp += 1 * state.potions[action.payload[0]].exp * action.payload[1]

                state.user.expProgress += (state.potions[action.payload[0]].exp.toFixed(1) * action.payload[1])
                state.user.expProgress = Number(state.user.expProgress.toFixed(1))

                if (state.user.expProgress === 100 || 100 - state.user.expProgress < state.potions[action.payload[0]].exp * action.payload[1]) {
                    state.user.expProgress = 0
                    state.user.level += 1
                }



            }


        },
        sendNotification: (state, action) => {

            state.user.notifications.splice(0, 0, { not: `${action.payload.not}`, color: `${action.payload.color}` })

        },

        midtermGivePot: (state, action) => {

            let potionNeed = state.midterms[action.payload[1]].potionNeeds[action.payload[0]]
            let potionNumber = state.midterms[action.payload[1]].potionNums[action.payload[0]]
            let potion = state.potions[potionNumber]


            if (potion.count > 0) {

                if (state.midterms[action.payload[1]].potionNeeds[action.payload[0]] === 0) {
                    return
                } else {
                    if (potion.count >= potionNeed) {
                        state.midterms[action.payload[1]].progress += 0.50 * state.midterms[action.payload[1]].potionNeeds[action.payload[0]]
                        state.potions[potionNumber].count -= state.midterms[action.payload[1]].potionNeeds[action.payload[0]]
                        state.midterms[action.payload[1]].potionNeeds[action.payload[0]] = 0
                    } else {
                        state.midterms[action.payload[1]].progress += 0.50 * potion.count
                        state.midterms[action.payload[1]].potionNeeds[action.payload[0]] -= state.potions[potionNumber].count
                        state.potions[potionNumber].count = 0
                    }

                    if (state.midterms[action.payload[1]].progress === 100) {
                        state.midterms[action.payload[1]].completed = true
                    }


                }
            }
        },
        finalGivePot: (state, action) => {

            let potionNeed = state.finals[action.payload[1]].potionNeeds[action.payload[0]]
            let potionNumber = state.finals[action.payload[1]].potionNums[action.payload[0]]
            let potion = state.potions[potionNumber]

            if (potion.count > 0) {

                if (state.finals[action.payload[1]].potionNeeds[action.payload[0]] === 0) {
                    return
                } else {
                    if (potion.count >= potionNeed) {
                        state.finals[action.payload[1]].progress += 0.25 * state.finals[action.payload[1]].potionNeeds[action.payload[0]]
                        state.potions[potionNumber].count -= state.finals[action.payload[1]].potionNeeds[action.payload[0]]
                        state.finals[action.payload[1]].potionNeeds[action.payload[0]] = 0
                    } else {
                        state.finals[action.payload[1]].progress += 0.25 * potion.count
                        state.finals[action.payload[1]].potionNeeds[action.payload[0]] -= state.potions[potionNumber].count
                        state.potions[potionNumber].count = 0
                    }


                    if (state.finals[action.payload[1]].progress === 100) {
                        state.finals[action.payload[1]].completed = true
                    }


                }
            }
        },


        devTools: (state, action) => {


            for (let i = 0; i < state.potions.length; i++) {
                state.potions[i].count = 9999999
            }

        },

        checkUserClass: (state) => {


            if (
                state.midterms[0].completed === true && state.midterms[1].completed === true && state.finals[0].completed === true && state.finals[1].completed === true
            ) {
                state.user.class = 2

                // MIDTERMS

                state.midterms[0].isOpen = false
                state.midterms[1].isOpen = false
                state.midterms[2].isOpen = true
                state.midterms[3].isOpen = true

                // FINALS

                state.finals[0].isOpen = false
                state.finals[1].isOpen = false
                state.finals[2].isOpen = true
                state.finals[3].isOpen = true

                if (
                    state.midterms[2].completed === true && state.midterms[3].completed === true && state.finals[2].completed === true && state.finals[3].completed === true
                ) {
                    state.user.isGameOver = true
                }

            }
        },
        isEndGame: (state, action) => {
            state.user.endGameScreen = action.payload
        }

    }

})






// Action creators are generated for each case reducer function
export const { clickToGather, incrementByAmount, buyWorker, sellOneProduct, sellProdByPerc, upgradeGather, unlockProduct, changeUsername, makePotion, potionToExp, sendNotification, midtermGivePot, devTools, checkUserClass, finalGivePot, isEndGame } = coreSlice.actions

export default coreSlice.reducer