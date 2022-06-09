
		import getContract from "@/abi/index.js";

		function judgeToken(rootState) {
			if (!state.token) state.token = getContract.getContractByName('OERC1155', rootState.app.web3)
		}
		const state = {};
		const mutations = {};
	const actions = { 
OPK ({rootState} ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.OPK().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
OPNFT ({rootState} ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.OPNFT().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
OPT ({rootState} ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.OPT().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
balanceOf ({rootState}, {account,id}){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.balanceOf(account,id).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
balanceOfBatch ({rootState}, {accounts,ids}){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.balanceOfBatch(accounts,ids).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
isApprovedForAll ({rootState}, {account,operator}){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.isApprovedForAll(account,operator).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
safeBatchTransferFrom ({rootState}, {from,to,ids,amounts,data}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.safeBatchTransferFrom(from,to,ids,amounts,data).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.safeBatchTransferFrom(from,to,ids,amounts,data).send({
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
safeTransferFrom ({rootState}, {from,to,id,amount,data}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.safeTransferFrom(from,to,id,amount,data).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.safeTransferFrom(from,to,id,amount,data).send({
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
setApprovalForAll ({rootState}, {operator,approved}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.setApprovalForAll(operator,approved).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.setApprovalForAll(operator,approved).send({
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
supportsInterface ({rootState}, {interfaceId}){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.supportsInterface(interfaceId).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
uri ({rootState}, {param0}){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.uri(param0).call().then(res => {
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
	