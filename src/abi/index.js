import creator721 from "./data/creator721.json"
import creator721R from "./data/creator721R.json"
import creator1155 from "./data/creator1155.json"
import NFT from "./data/NFT.json"
import OERC1155 from "./data/OERC1155.json"
const CONTRACTS = {
    creator721:{address:"0xa91D080c809267125391e2663F4b8f5A50E0C644",abi:creator721},
    creator721R:{address:"0xcBaB11A85bDC1A54B9BcA7B73165a10ee9cfc04d",abi:creator721R},
    creator1155:{address:"0x2050F4f63803A66A40ba77E7A82b2501AA9BB434",abi:creator1155},
    NFT:{address:"0x24b827Dad85B10fF09b3aa9A32054C72813171CA", abi:NFT},
    OERC1155:{address:"0x1ec2C5dCf3171F01bbF39Fecbd26bF5e39d8486D",abi:OERC1155}
};

function getContractByName(name, web3) {
    return new web3.eth.Contract(CONTRACTS[name].abi, CONTRACTS[name].address, {});
}

function getContractByToken(name, address, web3) {
    return new web3.eth.Contract(CONTRACTS[name].abi, address, {});
}

function getContractAddress(name) {
    return CONTRACTS[name].address;
}

export default {
    CONTRACTS,
    getContractByName,
    getContractByToken,
    getContractAddress
};
