pragma solidity >=0.4.19;
import "./Transaction.sol";
//128行(seller)和134行(consumer)新增name=>address函數
contract User is  Transaction{
    struct Consumer { //消費者資料
        string Name; //消費者名稱
        uint wallet; //消費者所剩餘錢
        uint New;
    }
    struct Goods { //商品
        string name; //商品名稱
        uint priceToConsumer; //零售價格
        uint SKU; //庫存量
        string photo; //photo
    }
    struct Seller {  //販售者資料
        string Name; //販售者名稱
        uint wallet; 
        Goods goods1;  //商品1
        Goods goods2;  //商品2
        Goods goods3;  //商品3
        uint New;
        string photo; //photo
    }

    mapping (address => Consumer) ConsumerDatabase; //消費者資料庫
    mapping (string => address) ConsumerDatabase2; //消費者(以名稱找尋地址)
    mapping (uint => address) ConsumerDatabase3; //消費者(以名稱找尋地址)
    mapping (address => Seller) SellerDatabase; //銷售者資料庫
    mapping (uint => address) SellerDatabase2; //銷售者資料庫
    mapping (string => address) SellerDatabase3; //銷售者(以名稱找尋地址)

   
    event addNewUser (string name);
    event goodsNameChanged (string newName);
    event transaction(string ConsumerName,string ShopName);

    uint SellerNumber = 0; //販售者編號(用於列出所有賣家)
    uint ConsumerNumber = 0; //消費者編號(用於列出所有買家)
    uint TxNumber = 0 ;//訂單流水號
    function CheckNewUser1(address Newer) public view returns (uint){ //新帳號回傳0，舊帳號回傳1
        return ConsumerDatabase[Newer].New;
    }
    function CheckNewUser2(address Newer) public view returns (uint){ //新帳號回傳0，舊帳號回傳1
        return SellerDatabase[Newer].New;
    }
    
    function newConsumer (string name) public {
        require(ConsumerDatabase[tx.origin].New==0);
        require(ConsumerDatabase2[name]==address(0)); //避免重複名稱
        ConsumerDatabase[tx.origin] = Consumer(name, 10000, 1) ;
        ConsumerNumber+=1;
        ConsumerDatabase2[name] = tx.origin;
        ConsumerDatabase3[ConsumerNumber] = tx.origin;
        emit addNewUser(name);       
    }

    function newSeller (string name) public {
        require(SellerDatabase[tx.origin].New==0);
        require(SellerDatabase3[name]==address(0)); //避免重複名稱
        SellerDatabase[tx.origin] = Seller(name, 10000, Goods("ABC", 30 ,100, "./62fa1446d7714afd39e18b6826cc85a0.png") ,Goods("DEF", 60 ,200, "./62fa1446d7714afd39e18b6826cc85a0.png"), Goods("GHI", 90 ,300, "./62fa1446d7714afd39e18b6826cc85a0.png"), 1,"./62fa1446d7714afd39e18b6826cc85a0.png");
        SellerNumber+=1;
        SellerDatabase2[SellerNumber] = tx.origin;
        SellerDatabase3[name] = tx.origin;
       
        emit addNewUser(name);       
    }
    
    function changeGoodsName (address sellerAddress, uint8 goodsNumber, string newName) public { //更換商品名稱
        require(sellerAddress!=address(0));
        if (goodsNumber == uint8(1)){
            SellerDatabase[sellerAddress].goods1.name = newName;
        }
        if (goodsNumber == uint8(2)){
            SellerDatabase[sellerAddress].goods2.name = newName;
        }
        if (goodsNumber == uint8(3)){
            SellerDatabase[sellerAddress].goods3.name = newName;
        }
        emit goodsNameChanged(newName);
    }
    function getGoods (uint id) public view returns (string,string,string,uint,uint,uint){ 
        address sellerAddress = SellerDatabase2[id];
        require(sellerAddress!=address(0));
        return(SellerDatabase[sellerAddress].goods1.name,
               SellerDatabase[sellerAddress].goods2.name,
               SellerDatabase[sellerAddress].goods3.name,
               SellerDatabase[sellerAddress].goods1.priceToConsumer,
               SellerDatabase[sellerAddress].goods2.priceToConsumer,
               SellerDatabase[sellerAddress].goods3.priceToConsumer
               );
    }
    function checkSKU(address sellerAddress, uint8 goodsNumber) internal view returns (uint ){ //確認庫存，有庫存回傳1，沒庫存回傳0
        require(sellerAddress!=address(0));
        if (goodsNumber == uint8(1)){
            if (SellerDatabase[sellerAddress].goods1.SKU > 0){
                return 1;
            }
            else{
                return 0;
            }
        }
        if (goodsNumber == uint8(2)){
            if (SellerDatabase[sellerAddress].goods2.SKU > 0){
                return 1;
            }
            else{
                return 0;
            }
        }
        if (goodsNumber == uint8(3)){
            if (SellerDatabase[sellerAddress].goods3.SKU > 0){
                return 1;
            }
            else{
                return 0;
            }
        }
    }
    function checkWalletForConsumer(address userAddress) public view returns (uint){
        return ConsumerDatabase[userAddress].wallet;
    }
    function checkWalletForSeller(address userAddress) public view returns (uint){
        return SellerDatabase[userAddress].wallet;
    }
    function getSellersName(uint ShopNumber) public view returns(string){ //回傳商家名稱(前端需使用使用for loop來取得資料)
        return SellerDatabase[SellerDatabase2[ShopNumber]].Name;
    }
    function getSellersNameFromAddress(address sellerAddress) public view returns(string){ //回傳商家名稱(使用ADDRESS)
        return SellerDatabase[sellerAddress].Name;
    }
    function getSellersAddressFromName(string sellerName) public view returns(address){ //回傳商家address(使用名稱)
        return SellerDatabase3[sellerName];
    }
     function getSellersAddressFromNumber(uint num1) public view returns(address){ //給予流水號，查詢商家地址
        return SellerDatabase2[num1];
    }
    function getConsumersName(address ConsumerAddress) public view returns(string){ //給予消費者地址，查詢名稱
        return ConsumerDatabase[ConsumerAddress].Name;
    }
    function getConsumersAddressFromName(string consumerName) public view returns(address){ //給予名稱，查詢消費者地址
        return ConsumerDatabase2[consumerName];
    }
    function getConsumersAddressFromNumber(uint num1) public view returns(address){ //給予流水號，查詢消費者地址
        return ConsumerDatabase3[num1];
    }
    function getSellersNumber() public view returns(uint){   //回傳商家數目
        return SellerNumber;
    }
    function getConsumerNumber() public view returns(uint){   //回傳總消費者數目
        return ConsumerNumber;
    }

    function changeSellerPhoto(address SellerAddress,string NewPhoto) public view{
        SellerDatabase[SellerAddress].photo=NewPhoto;
    }
    function changeGoodsPhoto(address SellerAddress,uint number,string NewPhoto) public view{
        if (number==1){
            SellerDatabase[SellerAddress].goods1.photo=NewPhoto;
        }
        else if (number==2){
            SellerDatabase[SellerAddress].goods2.photo=NewPhoto;
        }
        else if(number==3){
            SellerDatabase[SellerAddress].goods3.photo=NewPhoto;
        }
    }
    function getSellerPhoto(address SellerAddress) public view returns(string){
        return SellerDatabase[SellerAddress].photo;
    }
    function getGoodsPhoto(address SellerAddress) public view returns(string,string,string){
        return(   
            SellerDatabase[SellerAddress].goods1.photo,
            SellerDatabase[SellerAddress].goods2.photo,
            SellerDatabase[SellerAddress].goods3.photo
        );
    }

    
    ///////////////////////////////////////////////////
    //Interaction
    event giveNewOrder(address consumer, address seller);
    event orderDenied (address consumer);
    event orderAccept (address consumer);
    event getYourGoods (address consumer);
    event finish (address seller);

    uint TransactionNumber = 1; 
    mapping (address=>uint) HowManyTransaction; //此帳號之個人交易編號
    mapping (address=>mapping(uint=>uint)) TransactionList; //此帳號之個人交易編號對應至總交易編號
    mapping (uint=>Tx) TransactionData; //總交易編號對應至交易內容

    function giveOrder (uint transactionNumber, string Desiretime, address sellerAddress,uint quantity1, uint quantity2,uint quantity3, uint price,string location) payable public {
        require(ConsumerDatabase[tx.origin].wallet>=price);
        //Add to consumer
        Tx memory newOrder = Tx(transactionNumber+1,tx.origin,sellerAddress,quantity1,quantity2,quantity3,price,Desiretime,1,location);//新增訂單
        TransactionData[transactionNumber] = newOrder; //新增進訂單總資料庫
        uint personalNumber = HowManyTransaction[tx.origin]+1; //查詢是消費者第幾個訂單
        TransactionList[tx.origin][personalNumber] = transactionNumber; //設定訂單對應關係(Ex:消費者第3筆訂單之編號為123456號）
        HowManyTransaction[tx.origin] = personalNumber; //更新消費者總訂單數（因為多一筆新訂單因此+1）
        //Add to seller
        uint personalNumber2 = HowManyTransaction[sellerAddress]+1;//查詢是賣家第幾個訂單
        TransactionList[sellerAddress][personalNumber2] = transactionNumber;//設定訂單對應關係
        HowManyTransaction[sellerAddress] = personalNumber2; //更新賣家總訂單數（因為多一筆新訂單因此+1）
        //總交易量+1
        TransactionNumber+=1;
        ConsumerDatabase[tx.origin].wallet-=price;//扣款
        emit giveNewOrder(tx.origin,  sellerAddress);
    }

    function getPersonalTxIDNumber (address user) public view returns (uint) { //回傳個人總共多少訂單 (PersonalTxID最大值）
        return HowManyTransaction[user]; 
    }

    function listOrder  (address unknown,uint personalTxId) public view returns (address,address,string,uint,uint,string) {
        require(TransactionList[unknown][personalTxId]!=0);
        uint a= TransactionList[unknown][personalTxId];
        return (TransactionData[a].ConsumerAddress,
                TransactionData[a].SellerAddress,
                TransactionData[a].DesiredTime,
                TransactionData[a].totalPrice,
                TransactionData[a].status, //狀態碼
                TransactionData[a].location
        );
    }

    function listOrder2 (address unknown,uint personalTxId) public view returns (string,uint,string,uint,string,uint) { //回報商品內容及數目（寫在listorder內變數太多，Solidity不給過）
        require(TransactionList[unknown][personalTxId]!=0);
        uint a= TransactionList[unknown][personalTxId];
        return (
                SellerDatabase[TransactionData[a].SellerAddress].goods1.name, //商品名稱1
                TransactionData[a].Quantity1,  //數目1
                SellerDatabase[TransactionData[a].SellerAddress].goods2.name, //商品名稱2
                TransactionData[a].Quantity2, //數目2
                SellerDatabase[TransactionData[a].SellerAddress].goods3.name, //商品名稱3
                TransactionData[a].Quantity3 //數目3
        );

    }
    function denyOrder (uint personalTxId) payable public  { //婉拒訂單，觸發event 通知被Denied
        require(TransactionData[TransactionList[tx.origin][personalTxId]].SellerAddress==tx.origin);
        //Tx memory  theOrder= TransactionData[TransactionList[tx.origin][personalTxId]];
        TransactionData[TransactionList[tx.origin][personalTxId]].status = 2;
        ConsumerDatabase[TransactionData[TransactionList[tx.origin][personalTxId]].ConsumerAddress].wallet+=TransactionData[TransactionList[tx.origin][personalTxId]].totalPrice;
        emit orderDenied (TransactionData[TransactionList[tx.origin][personalTxId]].ConsumerAddress);
    }
    function acceptOrder (uint personalTxId) payable public { //接受訂單，觸發event 通知被Accept 
        require(TransactionData[TransactionList[tx.origin][personalTxId]].SellerAddress==tx.origin);
        //Tx memory  theOrder = TransactionData[TransactionList[tx.origin][personalTxId]];
        TransactionData[TransactionList[tx.origin][personalTxId]].status = 3;
        SellerDatabase[TransactionData[TransactionList[tx.origin][personalTxId]].SellerAddress].wallet+=TransactionData[TransactionList[tx.origin][personalTxId]].totalPrice;
        emit orderAccept (TransactionData[TransactionList[tx.origin][personalTxId]].ConsumerAddress);
    }
    function deliveringOrder (uint personalTxId) public  {  
        require(TransactionData[TransactionList[tx.origin][personalTxId]].SellerAddress==tx.origin);
        TransactionData[TransactionList[tx.origin][personalTxId]].status=4;
        emit getYourGoods( TransactionData[TransactionList[tx.origin][personalTxId]].ConsumerAddress);
    }
    function arrivedOrder (uint personalTxId) public  { 
        require(TransactionData[TransactionList[tx.origin][personalTxId]].SellerAddress==tx.origin);
        TransactionData[TransactionList[tx.origin][personalTxId]].status=5;
        emit getYourGoods( TransactionData[TransactionList[tx.origin][personalTxId]].ConsumerAddress);
    }
    function FinishOrder  (uint personalTxId) public { 
        require(TransactionData[TransactionList[tx.origin][personalTxId]].ConsumerAddress==tx.origin);
        TransactionData[TransactionList[tx.origin][personalTxId]].status=6;
        emit finish(TransactionData[TransactionList[tx.origin][personalTxId]].SellerAddress);
    }
    function getTransactionOrder () public view returns (uint) {
        return TransactionNumber;
    }
}

