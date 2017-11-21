const UserModel = require('../model/User');
const bcrcyt = require('bcrypt');
const uuid = require('uuid');

class User {
	constructor(opt) {
		Object.assign(this, opt);
		this.uuid = uuid();
		bcrcyt
			.hash(this.password, '12')
			.then(hash => {
				this.hash = hash;
			})
			.catch(e => {
				throw new Error(e);
			});
	}

	//static method
	static hashPassword() {}

	//create
	createUser(cb) {
		let user = new UserModel(this);
		user.save(cb);
	}

	findUserByName(name) {
		return UserModel.findOne({ name: name }); //promise
	}
}

module.exports = User;
