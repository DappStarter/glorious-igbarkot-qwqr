require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remember coconut give argue onion tenant'; 
let testAccounts = [
"0xc91cdf4ed157d63161b114a8346043b5f25f39a87f3dd2f24bb7120b90f1cedf",
"0xe70f9e4adab03d55f922b7a031e5f1b15c3c2d45a1e705ff3dd449d385646b2d",
"0x33070c70f902e02d86f9f0672fb1d08352b4fab9f4c4a1d6a55d709f3eb4f854",
"0x137f0bea0e165e388b5e7052a4070f4cb970cf7499fa28e587a47f47c4254f35",
"0x7d4a4348eab48e980b3a4a45602b29fb57b737fcb5e7941c3905c539d8915890",
"0x884f368fade18f80943ddbb0a3b71d84bc181c56d8c5612724094f5a4b3376d3",
"0x28d99d5b59100dabcde7c83a810e800a1e0cd3a7076c3cd53dc658fe84a39215",
"0x2c16ea7fb26969472ba90009a6ad37ec9249bc8d5fbff372da35eef7dea92191",
"0x1a49b1211449ae64407f348cf2eea63e4005b6c14bb1cbf46e87a78510c929dc",
"0x5f34cf35f17d6183c7ba225bc9440964a98953659ac90a2bcd68351f4206c431"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

