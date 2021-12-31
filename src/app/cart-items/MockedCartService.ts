export class MockCartService {
    getProducts() {
        return [
            {
                id: 1,
                name: 'Bored Apes',
                price: 50,
                quantity: 1,
                status: 'in stock',
                description: "NFT collection owned by celebrities",
                imgaddress:"https://nftnewsinsider.com/wp-content/uploads/2021/06/boredape.jpg",
            },
            {
                id: 2,
                name: 'Crypto Punks',
                price: 40,
                quantity: 1,
                status: 'in stock',
                description: "First NFT collection to get limelight",
                imgaddress:"https://www.larvalabs.com/public/images/cryptopunks/shareimage.png",
            },
        ];
      }
}