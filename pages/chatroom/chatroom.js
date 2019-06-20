// pages/chatroom/chatroom.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        "name": "第二节",
        "order": 1,
        "knowledge": null,
        "dataList": [{
                "id": "12323342",
                "type": 1,
                "whoSay": 0,
                "content": "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
                "orderNumber": 1,
                "sectionId": 1,
                "importanceDegree": 1
            },
            {
                "id": "1232",
                "type": 0,
                "whoSay": 1,
                "content": "这是个好问题",
                "orderNumber": 2,
                "sectionId": 1,
                "importanceDegree": 2
            },
            {
                "id": "1233343",
                "type": 0,
                "whoSay": 1,
                "content": "这是个好问题",
                "orderNumber": 3,
                "sectionId": 1,
                "importanceDegree": 1
            },
            {
                "id": "1233343",
                "type": 0,
                "whoSay": 1,
                "content": "这是个好问题",
                "orderNumber": 4,
                "sectionId": 1,
                "importanceDegree": 1
            },
            {
                "id": "1233343",
                "type": 0,
                "whoSay": 1,
                "content": "这是个好问题",
                "orderNumber": 5,
                "sectionId": 1,
                "importanceDegree": 1
            },
            {
                "id": "1233343",
                "type": 1,
                "whoSay": 1,
                "content": "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
                "orderNumber": 6,
                "sectionId": 1,
                "importanceDegree": 1
            },
            {
                "id": "1233343",
                "type": 0,
                "whoSay": 1,
                "content": "这是个好问题",
                "orderNumber": 7,
                "sectionId": 1,
                "importanceDegree": 1
            },
            {
                "id": "1233343",
                "type": 0,
                "whoSay": 0,
                "content": "这是个好问题",
                "orderNumber": 8,
                "sectionId": 1,
                "importanceDegree": 1
            }
        ]
    },
    showModal(e) {
        this.setData({
            modalName: e.currentTarget.dataset.target,
            knowledge: e.currentTarget.dataset.knowledge
        })
    },
    hideModal(e) {
        this.setData({
            modalName: null
        })
    },

    addNote: function(event) {
        // TODO 
        this.hideModal();
    },

    addCollection: function(event) {
        //TODO
        this.hideModal();
    },

    /**
     * 获取&显示下一个知识点
     */
    loadKnowledge: function(event) {
        var that = this;
        console.log("add");
        var newOrder = this.data.order + 1;
        that.setData({
            order: newOrder
        })
        // 滚动到底部，显示最新消息
        var query = wx.createSelectorQuery()
        query.select('#chat-container').boundingClientRect()
        query.exec(function(res) {
            wx.pageScrollTo({
                scrollTop: res[0].height,
            })
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})