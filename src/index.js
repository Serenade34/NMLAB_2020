import React from 'react';
import ReactDOM from 'react-dom';
import Web3 from 'web3'
import { BrowserRouter, Route } from 'react-router-dom';
import User from '../build/contracts/User.json'
import HomePage from './components/HomePage.js';
import SellerHomePage from './components/SellerHomePage.js';
import SellerOrderListPage from './components/SellerOrderListPage.js';
import SellerCheckOrderPage from './components/SellerCheckOrderPage.js';
import SellerShopPage from './components/SellerShopPage.js';
import SellerIncomePage from './components/SellerIncomePage.js';
import BuyerHomePage from './components/BuyerHomePage.js';
import BuyerOrderPage from './components/BuyerOrderPage.js';
import BuyerShopListPage from './components/BuyerShopListPage.js';
import BuyerOrderListPage from './components/BuyerOrderListPage.js';
import BuyerCheckOrderPage from './components/BuyerCheckOrderPage.js';
import NewUserPage from './components/NewUserPage.js';
import ConfirmPage from './components/ConfirmPage.js'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////                              圖片                             ///////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
import Img_NewShop from './components/googlechrome.png';
import Img_good from './components/Logo.png';
import Img_MCD from './components/MCD.png';
import Img_MCD_FrenchFries from './components/MCD_FrenchFries.jpg';
import Img_MCD_HashBrown from './components/MCD_HashBrown.jpg';
import Img_MCD_BigMac from './components/MCD_BigMac.jpg';
import Img_MOS from './components/MOS.jpg';
import Img_MOS_FrenchFries from './components/MOS_FrenchFries.jpg';
import Img_MOS_ChickenFillet from './components/MOS_ChickenFillet.jpg';
import Img_MOS_RiceBurger from './components/MOS_RiceBurger.jpg';
import Img_KFC from './components/KFC.png';
import Img_KFC_FrenchFries from './components/KFC_FrenchFries.jpg';
import Img_KFC_EggTart from './components/KFC_EggTart.jpg';
import Img_KFC_FriedChicken from './components/KFC_FriedChicken.jpg';
import Img_FDD from './components/FDD.jpg';
import Img_FDD_ChickenFillet from './components/FDD_ChickenFillet.jpg';
import Img_FDD_FriedChicken from './components/FDD_FriedChicken.jpg';
import Img_FDD_DeepFriedPlatter from './components/FDD_DeepFriedPlatter.jpg';
import Img_PZH from './components/PZH.png';
import Img_PZH_Mochi from './components/PZH_Mochi.jpg';
import Img_PZH_SeafoodPizza from './components/PZH_SeafoodPizza.jpg';
import Img_PZH_HawaiianPizza from './components/PZH_HawaiianPizza.jpg';
import Img_NPL from './components/NPL.jpg';
import Img_NPL_MiniPizza from './components/NPL_MiniPizza.png';
import Img_NPL_FriedChicken from './components/NPL_FriedChicken.jpg';
import Img_NPL_SupremePizza from './components/NPL_SupremePizza.png';

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////                        區塊鏈上存的資料                        ///////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//平台上所有使用者的資料
//id:使用者編號,      name:使用者名稱,  type:買家或賣家, address:使用者的區塊練地址
const userData = [
    {id: 0, name: '', type: '', address: ''},
    /*{id: 1, name: 'Ben', type: 'buyer',address: 'buyeraddress1'},
    {id: 2, name: 'Jim', type: 'buyer',address: 'buyeraddress2'},
    {id: 3, name: 'Tom', type: 'buyer',address: 'buyeraddress3'},
    {id: 4, name: 'Jax', type: 'buyer',address: 'buyeraddress4'},
    {id: 5, name: 'MCD', type: 'seller',address: 'selleraddress1'},
    {id: 6, name: 'MOS', type: 'seller',address: 'selleraddress2'},
    {id: 7, name: 'KFC', type: 'seller',address: 'selleraddress3'},
    {id: 8, name: 'FDD', type: 'seller',address: 'selleraddress4'},
    {id: 9, name: 'NPL', type: 'seller',address: 'selleraddress5'},
    {id: 10, name: 'PZH', type: 'seller',address: 'selleraddress6'},*/
];

//平台上所有商店(賣家)的詳細資料
//id:店家編號,      name:店家名稱,  state:目前開或關店, img:店家照片(存照片在本地的路徑),      disc:店家描述,
//goods:商品目錄,   id: 商品編號,   name:商品名稱,      price:商品價格,     img:商品照片,   sold_out:目前是否售完
const shopsData = [
    /*{id: 0, name: 'Initial Shop', state: 'close', img: '', disc: '', address: '',
                      goods: [{id: 1, name: 'default', price: 0, img: '', sold_out: false},
                              {id: 2, name: 'default', price: 0, img: '', sold_out: false},
                              {id: 3, name: 'default', price: 0, img: '', sold_out: false}]},*/
    {id: 0, name: 'MCD', state: 'open', img: Img_MCD, disc: 'MCD\'s Discription', address: 'selleraddress1',
     goods: [{id: 1, name: 'Hash Brown', price: 30, img: Img_MCD_HashBrown, sold_out: false},
             {id: 2, name: 'French Fries', price: 60, img: Img_MCD_FrenchFries, sold_out: false},
             {id: 3, name: 'Big Mac', price: 90, img: Img_MCD_BigMac, sold_out: true}]
    },
    {id: 1, name: "MOS", state: 'close', img: Img_MOS, disc: 'MOS\'s Discription', address: 'selleraddress2',
     goods: [{id: 1, name: 'French Fries', price: 30, img: Img_MOS_FrenchFries, sold_out: false},
             {id: 2, name: 'Chicken Fillet', price: 60, img: Img_MOS_ChickenFillet, sold_out: false},
             {id: 3, name: 'Rice burger', price: 90, img: Img_MOS_RiceBurger, sold_out: false}]
    },
    {id: 2, name: 'KFC', state: 'open', img: Img_KFC, disc: 'KFC\'s Discription', address: 'selleraddress3',
     goods: [{id: 1, name: 'French Fries', price: 30, img: Img_KFC_FrenchFries, sold_out: true},
             {id: 2, name: 'Egg Tart', price: 60, img: Img_KFC_EggTart, sold_out: true},
             {id: 3, name: 'Fried Chicken', price: 90, img: Img_KFC_FriedChicken, sold_out: false}]
    },
    {id: 3, name: 'FDD', state: 'open', img: Img_FDD, disc: 'FDD\'s Discription', address: 'selleraddress4',
     goods: [{id: 1, name: 'Chicken Fillet', price: 30, img: Img_FDD_ChickenFillet, sold_out: true},
             {id: 2, name: 'Fried Chicken', price: 60, img: Img_FDD_FriedChicken, sold_out: true},
             {id: 3, name: 'Deep Fried Platter', price: 90, img: Img_FDD_DeepFriedPlatter, sold_out: true}]
    },
    {id: 4, name: 'NPL', state: 'close', img: Img_NPL, disc: 'NPL\'s Discription', address: 'selleraddress5',
     goods: [{id: 1, name: 'Chocolate Mochi', price: 30, img: Img_PZH_Mochi, sold_out: true},
             {id: 2, name: 'Seafood Pizza', price: 60, img: Img_PZH_SeafoodPizza, sold_out: false},
             {id: 3, name: 'Hawaiian Pizza', price: 90, img: Img_PZH_HawaiianPizza, sold_out: false}]
    },
    /*{id: 6, name: 'PZH', state: 'open', img: Img_PZH, disc: 'PZH\'s Discription', address: 'selleraddress6',
     goods: [{id: 1, name: 'Mini Pizza', price: 30, img: Img_NPL_MiniPizza, sold_out: false},
             {id: 2, name: 'Fried Chicken', price: 60, img: Img_NPL_FriedChicken, sold_out: true},
             {id: 3, name: 'Supreme Pizza', price: 90, img: Img_NPL_SupremePizza, sold_out: false}]
    },*/
];


//平台上所有訂單的資料
//id:訂單編號,  buyer_address:買家區塊鏈地址,   seller_address:賣家區塊鏈地址,  dueTime:訂單到期時間,
//state:店家是否接受訂單(wait:1訂單等待賣家確認, deny:2賣家拒絕訂單, accept:3賣家接受訂單, deliver:4商品運送中, arrive:5商品送達, recieve:6買家已接收商品),
//location:訂單目的地,
//goods:訂單內容,   id: 商品編號,   num:購買數量
const orderData = [
    {id: 0, buyer_address: "", seller_address: "", dueTime: "", state:"",
     location: "",
     goods: [0, 0, 0]
    },
    /*{id: 1, buyer_address: "buyeraddress2", seller_address: "selleraddress2", dueTime: "201912181900", state: 2,
     location: "No. 1, Sec. 4, Roosevelt Road, Taipei",
     goods: [2, 0, 3]
    },
    {id: 2, buyer_address: "buyeraddress1", seller_address: "selleraddress4", dueTime: "201912182130", state: 3,
     location: "No. 2, Sec. 4, Roosevelt Road, Taipei",
     goods: [1, 2, 5]
    },
    {id: 3, buyer_address: "buyeraddress3", seller_address: "selleraddress3", dueTime: "201912182200", state: 1,
     location: "No. 3, Sec. 4, Roosevelt Road, Taipei",
     goods: [4, 9, 0]
    },
    {id: 4, buyer_address: "newaddress3", seller_address: "selleraddress1", dueTime: "201912182400", state: 5,
     location: "No. 3, Sec. 4, Roosevelt Road, Taipei",
     goods: [10, 2, 0]
    },
    {id: 3, buyer_address: "newaddress3", seller_address: "selleraddress3", dueTime: "201912182200", state: 6,
     location: "No. 3, Sec. 4, Roosevelt Road, Taipei",
     goods: [4, 6, 0]
    },*/
];

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
///假設使用者的區塊鏈地址為userAddress                                          ///
///如果userAddress是從上面的userData抄的，按Get Started按鈕會導向seller/buyer頁面///
///如果userAddress是自己隨便取的，則按Get Started按鈕會導向new user頁面          ///                                          ///
/////////////////////////////////////////////////////////////////////////////////
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            web3: undefined,
            address: '',
            UberEatContract: undefined,
            user: {id: 0, name: '', type: '', address: ''},
            /*userData: {id: 0, name: '', type: '', address: ''},*/
            userLogin: false,
            shopGoods:[{id: 1, name: '', price: 30, img: Img_good, sold_out: false},
                       {id: 2, name: '', price: 60, img: Img_good, sold_out: false},
                       {id: 3, name: '', price: 90, img: Img_good, sold_out: false}],
            order: {id: 0, buyer_address: '', seller_address: '', dueTime: '', state: 1,
                    location: '',
                    goods: [0, 0, 0]
            },
            shopData:{id: 0, name: '', state: 'close', img: '', disc: '', address: '',
                      goods: [{id: 1, name: 'Good1', price: 30, img: '', sold_out: false},
                              {id: 2, name: 'Good2', price: 60, img: '', sold_out: false},
                              {id: 3, name: 'Good3', price: 90, img: '', sold_out: false}]},
            //orderData: orderData, //這個在連上後端資料庫後應該就不需要了，下面還有(search: *orderData*)
            orderList: [],
            shopId: 0,
            confirmPage: '',
            status: 'loading',
        };

        this.detectAccountChange = this.detectAccountChange.bind(this);
        this.getAccount(this.state.user.address)
        this.checkUserType = this.checkUserType.bind(this);
        this.handleAddUser = this.handleAddUser.bind(this);
        this.handleSubmitAddUser = this.handleSubmitAddUser.bind(this);
        this.handleViewShop = this.handleViewShop.bind(this);
        this.handleOrder = this.handleOrder.bind(this);
        this.handleOrderSubmit = this.handleOrderSubmit.bind(this);
        this.checkOrderList = this.checkOrderList.bind(this);
        this.handleSetOrder = this.handleSetOrder.bind(this);
        this.handleUpdateOrder = this.handleUpdateOrder.bind(this);
        this.sellerAddressToShopData = this.sellerAddressToShopData.bind(this);
        this.handleSetShopGoods = this.handleSetShopGoods.bind(this);
        this.handleChangeGoodsName = this.handleChangeGoodsName.bind(this);
        this.handleSubmitChangeGoodsName = this.handleSubmitChangeGoodsName.bind(this);
        this.handleSetConfirmPage = this.handleSetConfirmPage.bind(this);
        //this.checkIncome = this.checkIncome.bind(this);
        this.handlePay = this.handlePay.bind(this);
    };

    async componentDidMount() {
        await this.loadWeb3()
        await this.loadBlockchainData()
    }

    async loadWeb3() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
        } else {
            window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
    }

    async loadBlockchainData() {
        const web3js = window.web3
        if (web3js !== undefined) {
            
            const address = await web3js.eth.getAccounts();
            console.log(address);

            //web3js.eth.defaultAccount =  web3js.eth.getCoinbase();

            web3js.eth.defaultAccount =  address;
            console.log(web3js.eth.defaultAccount);

            const networkId = await web3js.eth.net.getId()
            const networkData = User.networks[networkId]
            
            if (networkData) {
                const UberEatContract = web3js.eth.Contract(User.abi, networkData.address)
                this.setState({ UberEatContract })
                
                //UberEatContract.web3js.eth.defaultAccount=UberEatContract.web3js.eth.coinbase;
                //console.log(UberEatContract.web3js.eth.defaultAccount);

                const SellersNumber = await UberEatContract.methods.getSellersNumber().call()
                
                for (var i = 1; i <= SellersNumber; i++) {
                    const Selleraddress = await UberEatContract.methods.getSellersAddressFromNumber(i).call()
                    const Seller = await UberEatContract.methods.getSellersNameFromAddress(Selleraddress).call()
                    const Sellerphoto = await UberEatContract.methods. getSellerPhoto(Selleraddress).call()
                             
                    const getgoods = await UberEatContract.methods.getGoods(i).call();
                    const goodsphoto = await UberEatContract.methods.getGoodsPhoto(Selleraddress).call()

                    var shopGoods = [{id: 1, name: '', price: 30, img: Img_good, sold_out: false},
                                     {id: 2, name: '', price: 60, img: Img_good, sold_out: false},
                                     {id: 3, name: '', price: 90, img: Img_good, sold_out: false}];

                    for (var j = 0; j <= 2; j++) {                        
                        shopGoods[j].name = getgoods[j];
                        shopGoods[j].img = goodsphoto[j];                   
                    }                    

                    shopsData.push({
                        id: shopsData.length,
                        name: Seller,
                        state: 'close',
                        img: Sellerphoto,
                        disc: '',
                        address: Selleraddress,
                        goods: shopGoods,
                    })

                    userData.push({
                        id: userData.length,
                        name: Seller,
                        type: 'seller',
                        address: Selleraddress,
                    });
                }

                const ConsumersNumber = await UberEatContract.methods.getConsumerNumber().call()

                for (var i = 1; i <= ConsumersNumber; i++) {
                    const Consumeraddress = await UberEatContract.methods.getConsumersAddressFromNumber(i).call()
                    const Consumer = await UberEatContract.methods.getConsumersName(Consumeraddress).call()

                    userData.push({
                        id: userData.length,
                        name: Consumer,
                        type: 'buyer',
                        address: Consumeraddress,
                    });
                }

                var notFound = true;
                var i = 0;
                while(notFound && i<userData.length) {
                    if(address == userData[i].address) {

                        console.log(userData[i].address);

                        const OrderNumber = await UberEatContract.methods.getPersonalTxIDNumber(userData[i].address).call()
                        console.log(OrderNumber);

                        for (var i = 1; i <= OrderNumber; i++) {

                            const ordersList = await UberEatContract.methods.listOrder(userData[i].address, i).call()
                            const goods = await UberEatContract.methods.listOrder2(userData[i].address, i).call()
                        
                            console.log(ordersList);
                            console.log(goods);

                            const status = ordersList[4].toNumber();
                            console.log(status);
                            
                            const quantity1 = goods[1].toNumber();
                            const quantity2 = goods[3].toNumber();
                            const quantity3 = goods[5].toNumber();


                            const orderedgoods = [];

                            orderedgoods.push(quantity1);
                            orderedgoods.push(quantity2);
                            orderedgoods.push(quantity3);
                            
                    
                            orderData.push({
                            id: orderData.length,
                                buyer_address: ordersList[0],
                                seller_address: ordersList[1],
                                dueTime: ordersList[2],
                                state: ordersList[4],
                                location: ordersList[5],
                                goods: orderedgoods,
                            });
                        }
        
                        console.log(orderData)

                        notFound = false;

                    }
                    i++;
                }
                
                console.log(userData);
                console.log(shopsData);

            }
            else {
                window.alert('Contract not deployed to detected network.')
            }

            setInterval(() => this.detectAccountChange(), 100);

            this.setState({
                web3: web3js,
                address: address[0],
                status: 'finish',
            });

            this.getAccount(address);
                        
        }
    }

    async detectAccountChange() {
        if (this.state.web3 !== undefined) {
            const address = await this.state.web3.eth.getAccounts();
            if (address[0] !== this.state.address) {

                this.setState({
                    address: address[0],
                });
                this.getAccount(address);
                //this.checkUserType();
            }
            return address[0];

        }
        return undefined;
    }

    async getAccount(address) {
        //若目前的使用者地址存在於區塊鏈的資料中(已經註冊的使用者)，把他的使用者資料調出來存進this.state。user
        //若不存在，則把他的新用戶資料存進this.state.user
        var notFound = true;
        var i = 0;
        while(notFound && i<userData.length) {
            if(address == userData[i].address) {
                this.state.user = userData[i];
                this.state.userLogin = true;
                if(this.state.user.type == 'seller') {
                    this.state.shopData = shopsData[this.sellerNameToShopId(userData[i].name)];
                    this.state.shopGoods = shopsData[this.sellerNameToShopId(userData[i].name)].goods;                    
                };
                notFound = false;                

                this.checkOrderList();
            }
            else {
                this.state.user.id = userData.length + 1;
                this.state.user.type = 'new';
                this.state.user.address = address;
                this.state.shopGoods[0].name = 'ABC';
                this.state.shopGoods[1].name = 'DEF';
                this.state.shopGoods[2].name = 'GHI';                
            }
            i++;
        }
    }

    checkUserType() {
        var page = "";
        if(this.state.user.type == 'buyer' && this.state.userLogin == true) {
            page = '/dist/BuyerHome';
            console.log("User Login as " +　this.state.user.type);
        }
        else if(this.state.user.type == 'seller' && this.state.userLogin == true) {
            page = '/dist/SellerHome';
            console.log("User Login as " +　this.state.user.type);
        }
        else {
            page = '/dist/NewUser';
        }
        return page;
    }

    stateMapping(stateNum) {
        if(stateNum == 1) {
            return 'wait';
        }
        else if(stateNum == 2) {
            return 'deny';
        }
        else if(stateNum == 3) {
            return 'accept';
        }
        else if(stateNum == 4) {
            return 'deliver';
        }
        else if(stateNum == 5) {
            return 'arrive';
        }
        else if(stateNum == 6) {
            return 'recieve';
        }
        else {
            console.log('Error -- Invalid order state -- index.js -- stateMapping')
        }
    }
    
    handleAddUser(event,user) {
        this.setState({user : user});
        console.log('Success Load TextField Data');
    }

    async handleSubmitAddUser() {
        if(this.state.user.name != "" && (this.state.user.type==("buyer"))) {
            userData.push(this.state.user);
            this.setState({userLogin : true});
            console.log("Success -- User has added into userData");
            console.log(userData);

            this.state.UberEatContract.methods.newConsumer(this.state.user.name).send({ from: this.state.address });

        }
        else if(this.state.user.name != "" && this.state.user.type==("seller")) {
            userData.push(this.state.user);
            this.setState({userLogin : true});
            console.log("Success -- User has added into userData");
            console.log(userData);
            shopsData.push({
                id: shopsData.length,
                name: this.state.user.name,
                state: 'close',
                img: Img_NewShop,
                disc: '',
                address: this.state.user.address,
                goods: this.state.shopGoods,
            });

            this.state.UberEatContract.methods.newSeller(this.state.user.name).send({ from: this.state.address });

            console.log("Success -- Shop has added into shopsData");
            console.log(shopsData);
        }
        else {
            console.log("Failed -- Invalid New User Data");
            console.log(userData);
        }
    }

    handleViewShop(event,index) {
        this.setState({shopId : index});
        //call此函數後，不會馬上setState
        //console.log('Buyer is shopping in ' + shopsData[this.state.shopId].name);
    }

    handleOrder(event,order) {
        this.setState({order : order});
        console.log('Success Load TextField Data')
    }

    async handleOrderSubmit() {

        const price = this.orderListToPrice(this.state.order.goods);

        //const TransactionNumber = this.state.UberEatContract.methods.getTransactionOrder().call({ from: this.state.address }).then(result => result.toNumber());
        /*const TransactionNumber = this.state.UberEatContract.methods.getTransactionOrder().call({ from: this.state.address });

        console.log(TransactionNumber);
        var notFound = true;
        var i = 0;
        var transactionNumber = 0;
        while(notFound && i<100) {
            if(i == TransactionNumber) {
                transactionNumber = i;
                notFound = false;
            }
            i++;
        }*/       

        this.state.UberEatContract.methods.giveOrder(orderData.length, this.state.order.dueTime, this.state.order.seller_address, this.state.order.goods[0], this.state.order.goods[1], this.state.order.goods[2], price, this.state.order.location ).send({ from: this.state.address });

        orderData.push(this.state.order);

        console.log("Success -- Order has added into orderData");
        console.log(orderData);

        
    }

    checkOrderList() {
        //console.log(orderData);
        
        var i = 0;
        var orderList = [];
        if(this.state.user.type == "buyer") {
            while(i<orderData.length) {
                if(this.state.user.address == orderData[i].buyer_address) {
                    orderList.push(orderData[i]);
                }/*
                console.log(this.state.user.address);
                console.log(orderData[i].buyer_address);*/
                i++;
            }
            console.log('Buyer check order');
            console.log(orderList);
        }
        else if (this.state.user.type == 'seller') {
            while(i<orderData.length) {
                if(this.state.user.address == orderData[i].seller_address) {
                    orderList.push(orderData[i]);
                }
                i++;
            }
            console.log('Seller check order');
            console.log(orderList);
        }
        else {
            console.log('There might be something going wrong')
        }
        this.setState({orderList : orderList});
        console.log('this.state.orderList');
        console.log(this.state.orderList);
    }

    orderListToPrice(goodsArray) {
        return(30*goodsArray[0]+60*goodsArray[1]+90*goodsArray[2]);
    }

    orderStateMap(num) {
        if(num == 1) {
            return 'wait';
        }
        else if(num == 2) {
            return 'deny';
        }
        else if(num == 3) {
            return 'accept';
        }
        else if(num == 4) {
            return 'deliver';
        }
        else if(num == 5) {
            return 'arrive';
        }
        else if(num == 6) {
            return 'recieve';
        }
    }

    addressTOUserName(address) {
        var i = 0;
        var notFound = true;
        var name = '';
        while(i<userData.length && notFound) {
            if(address == userData[i].address) {
                name = userData[i].name;
                notFound = false;
            }
            i++;
        }
        return name;
    }

    handleSetOrder(event, order) {
        this.setState({order : order});        

        console.log('this.state.order has been set');
    }

    async handleUpdateOrder() {
        orderData[this.state.order.id] = this.state.order;
        console.log('Success -- orderData has been update');
        console.log(orderData);



        if (this.state.order.state == 2)
        {
            this.state.UberEatContract.methods.denyOrder(this.state.order.id).send({ from: this.state.address });            
        }
        else if (this.state.order.state == 3)
        {            
            this.state.UberEatContract.methods.acceptOrder(this.state.order.id).send({ from: this.state.address });            
        }
        else if (this.state.order.state == 4)
        {
            this.state.UberEatContract.methods.deliveringOrder(this.state.order.id).send({ from: this.state.address });            
        }
        else if (this.state.order.state == 5)
        {
            this.state.UberEatContract.methods.arrivedOrder(this.state.order.id).send({ from: this.state.address });            
        }
        else if (this.state.order.state == 6)
        {
            this.state.UberEatContract.methods.FinishOrder(this.state.order.id).send({ from: this.state.address });            
        }
        
    }

    sellerAddressToShopData(address,shopGoodsOnly) {
        var i = 0;
        var notFound = true;
        var shopData = {id: 0, name: '', state: 'close', img: '', disc: '', address: '',
                        goods: [{id: 1, name: 'Good1', price: 30, img: '', sold_out: false},
                                {id: 2, name: 'Good2', price: 60, img: '', sold_out: false},
                                {id: 3, name: 'Good3', price: 90, img: '', sold_out: false}]};
        while(i<shopsData.length && notFound) {
            if(address == shopsData[i].address) {
                shopData = shopsData;
                notFound = false;
            }
            i++;
        }
        if(shopGoodsOnly) {
            return shopData.goods;
        }
        else {
            return shopData;
        }
    }

    handleSetShopGoods(event, address) {
        var i = 0;
        var notFound = true;
        var shopData = {id: 0, name: '', state: 'close', img: '', disc: '', address: '',
                        goods: [{id: 1, name: 'Good1', price: 30, img: '', sold_out: false},
                                {id: 2, name: 'Good2', price: 60, img: '', sold_out: false},
                                {id: 3, name: 'Good3', price: 90, img: '', sold_out: false}]};
        while(i<shopsData.length && notFound) {
            if(address == shopsData[i].address) {
                shopData = shopsData[i];
                notFound = false;
            }
            i++;
        }
        //var shopGoods = this.sellerAddressToShopData(address,true);
        this.setState({shopGoods : shopData.goods});
        console.log('this.state.shopGoods has been set');
    }

    sellerNameToShopId(name) {
        var id = 0;
        var i = 0;
        var notFound = true;
        while(i<shopsData.length && notFound) {
            if(shopsData[i].name == name) {
                id = shopsData[i].id;
                notFound = false;
            }
            /*
            console.log('hihi' + i);
            console.log(shopsData[i].name);
            console.log(this.state.user.name);*/
            i++;
        }
        return id;
    }

    sellerNameToShopGoods(name) {
        var i = 0;
        var shopGoods = [{id: 1, name: 'Good1', price: 30, img: Img_good, sold_out: false},
                         {id: 2, name: 'Good2', price: 60, img: Img_good, sold_out: false},
                         {id: 3, name: 'Good3', price: 90, img: Img_good, sold_out: false}];
        var notFound = true;
        while(i<shopsData.length && notFound) {
            if(shopsData[i].name == name) {
                shopGoods = shopsData[i].goods;
                notFound = false;
            }
            i++;
        }
        return shopGoods;
    }

    handleChangeGoodsName(event,goods) {
        this.setState({shopGoods : goods});
        console.log('Success Load TextField Data');
        console.log(shopsData);
    }

    handleSubmitChangeGoodsName() {
        var index = this.sellerNameToShopId(this.state.user.name);

        for (var i = 0; i <= 2; i++) {
            if(shopsData[index].goods[i].img !== this.state.shopGoods[i].img)
            this.state.UberEatContract.methods.changeGoodsPhoto(this.state.address, i+1, this.state.shopGoods[i].img).send({ from: this.state.address });
        }


        for (var i = 0; i <= 2; i++) {
            if(shopsData[index].goods[i].name !== this.state.shopGoods[i].name)
            this.state.UberEatContract.methods.changeGoodsName(this.state.address, i+1, this.state.shopGoods[i].name).send({ from: this.state.address });
        }

        shopsData[index].goods = this.state.shopGoods;
        console.log('Success -- Shop goods name changes has save into shopsData')
    }

    handleSetConfirmPage(event, page) {
        this.setState({confirmPage : page});
        console.log('Confirm Page has been change to ' + page);
    }

    handlePay(event, price) {
        //在這裡讓賣家收到買家的錢
        //我不知道要怎麼讓他們的帳戶交易
        console.log('Buyer has paid to seller');
    }

    render() {
        const MyHomePage = (props) => {
            return (
                <div>
                    <HomePage user={this.state.user} userLogin={this.state.userLogin} checkUserType={this.checkUserType}/>
                </div>
            )
        }/*
        const MyBuyerPage = (props) => {
            return (
                <div>
                    <BuyerPage user={this.state.user}/>
                </div>
            )
        }*/
        const MyBuyerHomePage = (props) => {
            return (
                <div>
                    <BuyerHomePage user={this.state.user}/>
                </div>
            )
        }
        const MyBuyerShopListPage = (props) => {
            return (
                <div>
                    <BuyerShopListPage shopsData={shopsData}
                                       onView={this.handleViewShop} onSetShop={this.handleSetShopGoods}/>
                </div>
            )
        }
        const MyBuyerOrderPage = (props) => {
            return (
                <div>
                    <BuyerOrderPage user={this.state.user} shopData={shopsData[this.state.shopId]} orderId={orderData.length}
                    onOrder={this.handleOrder} onSetPage={this.handleSetConfirmPage} />
                </div>
            )
        }
        const MyBuyerOrderListPage = (props) => {
            return (
                <div>
                    <BuyerOrderListPage onCheckOrder={this.checkOrderList} onCheckPrice={this.orderListToPrice} onCheckName={this.addressTOUserName} 
                                        onSetOrder={this.handleSetOrder} onSetGoods={this.handleSetShopGoods} orderList={this.state.orderList} 
                                        stateMap={this.stateMapping}/>
                </div>
            )
        }
        const MyBuyerCheckOrderPage = (props) => {
            return (
                <div>
                    <BuyerCheckOrderPage order={this.state.order} shopGoods={this.state.shopGoods}
                                         onSetOrder={this.handleSetOrder} onSubmitOrder={this.handleUpdateOrder}
                                         onSetPage={this.handleSetConfirmPage} onCheckPrice={this.orderListToPrice}
                                         stateMap={this.stateMapping}/>
                </div>
            )
        }
        const MySellerHomePage = (props) => {
            return (
                <div>
                    <SellerHomePage user={this.state.user} shopData={this.state.shopData}/>
                </div>
            )
        }
        const MySellerOrderListPage = (props) => {
            return (
                <div>
                    <SellerOrderListPage user={this.state.user} orderList={this.state.orderList} 
                                         onCheckOrder={this.checkOrderList} onCheckPrice={this.orderListToPrice}
                                         onSetOrder={this.handleSetOrder} onSetGoods={this.handleSetShopGoods}
                                         stateMap={this.stateMapping}/>
                </div>
            )
        }
        const MySellerCheckOrderPage = (props) => {
            return (
                <div>
                    <SellerCheckOrderPage order={this.state.order} shopGoods={this.state.shopGoods}
                                          onSetOrder={this.handleSetOrder} onSubmitOrder={this.handleUpdateOrder}
                                          onSetPage={this.handleSetConfirmPage} onCheckPrice={this.orderListToPrice}
                                          stateMap={this.stateMapping}/>
                </div>
            )
        }
        const MySellerShopPage = (props) => {
            return (
                <div>
                    <SellerShopPage user={this.state.user}
                                    shopGoods = {this.state.shopGoods}
                                    onChangeName={this.handleChangeGoodsName}
                                    onSetPage={this.handleSetConfirmPage}/>
                </div>
            )
        }
        const MySellerIncomePage = (props) => {
            return (
                <div>
                    <SellerIncomePage user={this.state.user} orderList={this.state.orderList} shopGoods={this.state.shopGoods}
                                      onCheckOrder={this.checkOrderList} onCheckPrice={this.orderListToPrice}/>
                </div>
            )
        }/*
        const MyTestPage = (props) => {
            return (
                <div>
                    <Dashboard />
                </div>
            )
        }
        const MyTestingPage = (props) => {
            return (
                <div>
                    <Testing />
                </div>
            )
        }*/
        const MyNewUserPage = (props) => {
            return (
                <div>
                    <NewUserPage user={this.state.user}
                                 onAddUser={this.handleAddUser}
                                 onSubmit={this.handleSubmitAddUser}
                                 onSetPage={this.handleSetConfirmPage}/>
                </div>
            )
        }
        const MyConfirmPage = (props) => {
            return (
                <div>
                    <ConfirmPage user={this.state.user}
                                 page={this.state.confirmPage}
                                 order={this.state.order}
                                 shopGoods={this.state.shopGoods}
                                 original_shopGoods={this.sellerNameToShopGoods(this.state.user.name)}
                                 onSubmitAddUser={this.handleSubmitAddUser}
                                 onSubmitOrder={this.handleOrderSubmit}
                                 onSetOrder={this.handleSetOrder}
                                 onUpdateOrder={this.handleUpdateOrder}
                                 onCheckOrder={this.checkOrderList}
                                 onSetShop={this.handleChangeGoodsName}
                                 onSubmitShop={this.handleSubmitChangeGoodsName}
                                 onGetPrice={this.orderListToPrice}
                                 onPay={this.handlePay}/>
                </div>
            )
        }/*
        const MyShopListPage = (props) => {
            return (
                <div>
                    <ShopListPage shopsData={shopsData}/>
                </div>
            )
        }
        const MyShopPage = (props) => {
            return (
                <div>
                    <ShopPageReact shopData={shopsData[0]}/>
                </div>
            )
        }
        const MyCheckSupplyPage = (props) => {
            return (
                <div>
                    <CheckSupplyPage />
                </div>
            )
        }
        const MyManageGoodsPage = (props) => {
            return (
                <div>
                    <ManageGoodsPage />
                </div>
            )
        }*/
        
        return (
            <BrowserRouter>
                <div>
                    {/*
                <nav>
                    <ul>
                      <li>You Should Not Need These</li>
                      <li>
                        <Link to="/dist/">MyHomePage</Link>
                      </li>
                      <li>
                        <Link to="/dist/Buyer">MyBuyerPage</Link>
                      </li>
                      <li>
                        <Link to="/dist/BuyerHome">MyBuyerHomePage</Link>
                      </li>
                      <li>
                        <Link to="/dist/BuyerOrder">MyBuyerOrderPage</Link>
                      </li>
                      <li>
                        <Link to="/dist/BuyerShopList">MyBuyerShopListPage</Link>
                      </li>
                      <li>
                        <Link to="/dist/BuyerCart">MyBuyerCartPage</Link>
                      </li>
                      <li>
                        <Link to="/dist/SellerHome">MySellerHomePage</Link>
                      </li>
                      <li>
                        <Link to="/dist/SellerOrder">MySellerOrderPage</Link>
                      </li>
                      <li>
                        <Link to="/dist/SellerShop">MySellerShopPage</Link>
                      </li>
                      <li>
                        <Link to="/dist/SellerIncome">MySellerIncomePage</Link>
                      </li>
                      <li>
                        <Link to="/dist/NewUser">MyNewUserPage</Link>
                      </li>
                      <li>
                        <Link to="/dist/Test">MyTestPage</Link>
                      </li>
                      <li>
                        <Link to="/dist/Testing">MyTestingPage</Link>
                      </li>
                    </ul>
                </nav>
                    */}
                    <Route exact path='/dist/' render={MyHomePage} />
                    {/*<Route path='/dist/Buyer' render={MyBuyerPage} />*/}
                    <Route path='/dist/BuyerHome' render={MyBuyerHomePage} />
                    <Route path='/dist/BuyerOrder' render={MyBuyerOrderPage} />
                    <Route path='/dist/BuyerShopList' render={MyBuyerShopListPage} />
                    <Route path='/dist/BuyerOrderList' render={MyBuyerOrderListPage} />
                    <Route path='/dist/BuyerCheckOrder' render={MyBuyerCheckOrderPage} />
                    <Route path='/dist/SellerHome' render={MySellerHomePage} />
                    <Route path='/dist/SellerOrderList' render={MySellerOrderListPage} />
                    <Route path='/dist/SellerCheckOrder' render={MySellerCheckOrderPage} />
                    <Route path='/dist/SellerShop' render={MySellerShopPage} />
                    <Route path='/dist/SellerIncome' render={MySellerIncomePage} />
                    <Route path='/dist/NewUser' render={MyNewUserPage} />
                    <Route path='/dist/Confirm' render={MyConfirmPage} />
                    {/*<Route path='/dist/Test' render={MyTestPage} />
                    <Route path='/dist/Testing' render={MyTestingPage} />
                    <Route exact path='/dist/ShopList' render={MyShopListPage} />
                    <Route path='/dist/ShopList/Shop' render={MyShopPage} />
                    <Route path='/dist/CheckSupply' render={MyCheckSupplyPage} />
                    <Route path='/dist/ManageGoods' render={MyManageGoodsPage} />*/}
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render( <App />, document.getElementById('root'));
