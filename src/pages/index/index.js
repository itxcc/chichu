//index.js
//获取应用实例
var chaiDate = require('../../utils/chai.js');
var app = getApp()
Page({
	data: {
		inputValue: '在 止匕 车俞 入...',
		chaiDate:''

	},
	onLoad: function () {
		this.setData({chaiDate:chaiDate.chai});

	},
	bindKeyInput(e) {

		var chaiDate = this.data.chaiDate;
		var userValue = e.detail.value;
		console.log(userValue);
		this.setData({
			inputValue: ''
		});
		if(userValue == ""){
			this.setData({
				inputValue: '在 止匕 车俞 入...'
			});
		}

		//console.log(userValue);
		//console.log(chaiDate);
		for(var i=0;i<userValue.length;i++){
			if(chaiDate.hasOwnProperty(userValue[i])){
				this.setData({
					inputValue: this.data.inputValue + chaiDate[userValue[i]]
				});
			}else{
				this.setData({
					inputValue:this.data.inputValue  +  userValue[i]
				});
			}
		}


	},
	copyText: function (e) {
		var txt = this.data.inputValue;
		wx.setClipboardData({
			data: txt,
			success: function (res) {
				wx.getClipboardData({
					success: function (res) {
						wx.showToast({
							title: '内容已复制！',
							icon: 'success',
							duration: 1000
						})
					}
				})
			}
		})
	}





});
