var api = {
	NODE_ENV: '"Uat development"',
	ENV_TAG: 'Uat development',
	BASEURL: 'https://api.gugudata.com',
  }
  module.exports = {
	//接口列表开始
	getOpenId: `${api.BASEURL}/news/fetchcontent`,//文章接口

	companySeries:{
	  list:`${api.BASEURL}/company/list`,
	  detail:`${api.BASEURL}/company/detail`,
	  interest:`${api.BASEURL}/company/interest`,
	  myList:`${api.BASEURL}/company/my/list`,
	  resource:`${api.BASEURL}/company/detail/resource`,
	},

	sms:{
	  send:`${api.BASEURL}/sms/send`,
	  verify:`${api.BASEURL}/sms/verify`
	},

  }
