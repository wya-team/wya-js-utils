
class Manager {
	/**
	 * 创建新的url
	 */
	static merge = (route, opts = {}) => {
		const {
			path, // ['', 'sd']
			query
		} = route;
		let result = path instanceof Array 
			? path.join('/')
			: path;

		let queryArr = [];
		for (let key in query) {
			if (query[key] || query[key] === false || query[key] === 0) { // 过滤掉值为null,undefined,''情况
				queryArr = [...queryArr, `${key}=${encodeURIComponent(query[key])}`];
			}
		}

		if (queryArr.length > 0) {
			result += `?${queryArr.join('&')}`;
		}
		return result;
	};
	/**
	 * 解析url
	 * @param  {String} url
	 * @return {Object}
	 */	
	static parse = (url, opts = {}) => {
		url = url || `${location.pathname}${decodeURIComponent(location.search)}`;
		let path = [];
		const query = {};
		// const urlArr = url.replace('/', '').split('?');
		const urlArr = url.split('?');
		path = urlArr[0].split('/');

		if (urlArr.length > 1) {
			urlArr[1].split('&').forEach(str => {
				const arr = str.split('=');
				const key = arr[0];
				const value = arr[1];
				// 009, ''
				if (
					isNaN(value) 
					|| value[0] === '0' 
					|| value === '' 
					|| value > Number.MAX_SAFE_INTEGER
				) {
					query[key] = value;
				} else {
					query[key] = Number(value);
				}
			});
		}

		return {
			path,
			query
		};
	};
	static get = (key, url, opts = {}) => {
		url = url 
			? url.substring(url.indexOf('?')) 
			: window.location.search;

		let regExp = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
		let value = decodeURI(url).substr(1).match(regExp);

		return value != null ? unescape(value[2]) : null;
	};
};
export const URL = Manager;