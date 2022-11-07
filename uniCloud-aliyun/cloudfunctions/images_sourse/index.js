'use strict';
const db = uniCloud.database()
const imageDB = db.collection('images-sourse')
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	if ('mpweixin' != event.type) {
		return
	}
	console.log('event.categoryId : ', event.categoryId)
	let dbCmd = imageDB.where({
		category_id: event.categoryId,
		state: true,
		is_del: false,
	});
	
	const imageList = await dbCmd.orderBy('sort', 'asc').get();
	//返回数据给客户端
	return imageList
};
