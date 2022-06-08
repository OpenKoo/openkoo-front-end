import getContract from "@/abi/index.js";

function judgeToken(rootState) {
    if (!state.token) state.token = getContract.getContractByName('market', rootState.app.web3)
}

const state = {};
const mutations = {};
const actions = {
    DaiAPY({rootState}, {ids}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.DaiAPY(ids).call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    DaiList({rootState}, {param0}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.DaiList(param0).call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    DaiMarketList({rootState}, {param0}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.DaiMarketList(param0).call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    borrow({rootState}, {times, token, amounts, mortgageAmount}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.borrow(times, token, amounts, mortgageAmount).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.borrow(times, token, amounts, mortgageAmount).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {

                    resolve(res)
                })
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    borrowDaiList({rootState}, {param0}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.borrowDaiList(param0).call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    borrowEthList({rootState}, {param0}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.borrowEthList(param0).call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    borrowUsdcList({rootState}, {param0}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.borrowUsdcList(param0).call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    conversion({rootState}, {token, amounts}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.conversion(token, amounts).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.conversion(token, amounts).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {

                    resolve(res)
                })
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    ethAPY({rootState}, {ids}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.ethAPY(ids).call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    ethList({rootState}, {param0}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.ethList(param0).call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    ethMarketList({rootState}, {param0}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.ethMarketList(param0).call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    init({rootState}, {_usdc, _Dai, _eth, _cusdc}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.init(_usdc, _Dai, _eth, _cusdc).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.init(_usdc, _Dai, _eth, _cusdc).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {

                    resolve(res)
                })
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    mortgageMarket({rootState}, {token, amounts, times}) {
        console.log(token, amounts, times)
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.mortgageMarket(token, amounts, times).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.mortgageMarket(token, amounts, times).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {

                    resolve(res)
                })
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    repayment({rootState}, {id, token, amounts}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.repayment(id, token, amounts).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.repayment(id, token, amounts).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {

                    resolve(res)
                })
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    setApy({rootState}, {token, oneyear, twoyear, threeyear}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.setApy(token, oneyear, twoyear, threeyear).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.setApy(token, oneyear, twoyear, threeyear).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {

                    resolve(res)
                })
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    usdcAPY({rootState}, {ids}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.usdcAPY(ids).call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    usdcList({rootState}, {param0}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.usdcList(param0).call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    usdcMarketList({rootState}, {param0}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.usdcMarketList(param0).call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
}
export default {
    namespaced: true,
    mutations,
    state,
    actions
}
