'use strict';
const db = uniCloud.database()
const categoryDB = db.collection('categories')
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event);
	
	let dbCmd = categoryDB.where({
		state: true,
		is_del: false,
	});
	
	const categoryList = await dbCmd.orderBy('sort', 'asc').get();
	//返回数据给客户端
	return categoryList
};
