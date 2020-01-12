pragma solidity >=0.4.23;

contract Transaction {
    struct Tx{
        uint id;
        address ConsumerAddress;
        address SellerAddress;
        uint Quantity1;
        uint Quantity2;
        uint Quantity3;
        uint totalPrice;
        string DesiredTime;
        uint status; //狀態碼
                     //1:wait
                     //2:deny
                     //3:accept and processing
                     //4:deliver
                     //5:arrived
                     //6:consumer get the goods(finish)
        string  location ;
    }
   
    //Ex:某消費者在此前無消費紀錄，當新增訂單時，此訂單在此消費者個人交易編號為1，但在總交易編號可能為500，而賣家的個人訂單編號(同一訂單)可能為50，但總編號
    //一樣為500;
}
