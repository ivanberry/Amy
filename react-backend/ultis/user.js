const UserModel = require('../model/User');
const config = require('../config/config');
const bcrcyt = require('bcrypt');
const uuid = require('uuid');

UserModel.on('index', function(err) {
	if (err) {
		console.error('User index error: %s', err);
	} else {
		console.info('User indexing complete');
	}
});

class User {
	constructor(opt) {
		Object.assign(this, opt);
		this.uuid = uuid();
	}

	//static method
	static hashPassword() {}

	//create
	createUser(cb) {
		let user = this;
		bcrcyt
			.hash(this.password, config.salt.test)
			.then(hash => {
				this.hash = hash;
				let userCreated = new UserModel(user);

				userCreated.save(cb);
			})
			.catch(e => {
				throw new Error(e);
			});
	}

	findUserByName(name) {
		return UserModel.findOne({ name: name }); //promise
	}

	//get user infos{name, password-hash}
	toJSON() {
		return {
			name: this.name,
			hash: this.hash
		};
	}
}

module.exports = User;
