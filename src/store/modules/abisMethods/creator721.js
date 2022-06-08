
		import getContract from "@/abi/index.js";

		function judgeToken(rootState) {
			if (!state.token) state.token = getContract.getContractByName('creator721', rootState.app.web3)
		}
		const state = {};
		const mutations = {};
	const actions = { 
admin ({rootState} ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.admin().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
creatNFT ({rootState}, {_url,userAddr}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.creatNFT(_url,userAddr).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.creatNFT(_url,userAddr).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                             
                                 resolve(res)
                            })
                        }).catch(err=>{
                            reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                        })
				})
			},
initialize ({rootState}, {_NFT}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.initialize(_NFT).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.initialize(_NFT).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                             
                                 resolve(res)
                            })
                        }).catch(err=>{
                            reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                        })
				})
			},
owner ({rootState} ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.owner().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
renounceOwnership ({rootState} ){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.renounceOwnership().estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.renounceOwnership().send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                             
                                 resolve(res)
                            })
                        }).catch(err=>{
                            reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                        })
				})
			},
tokenId ({rootState} ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.tokenId().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
transferOwnership ({rootState}, {newOwner}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.transferOwnership(newOwner).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.transferOwnership(newOwner).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                             
                                 resolve(res)
                            })
                        }).catch(err=>{
                            reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                        })
				})
			},
url ({rootState}, {param0}){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.url(param0).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
userHold ({rootState}, {param0}){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.userHold(param0).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
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
	