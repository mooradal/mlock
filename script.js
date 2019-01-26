class Pass {
	constructor(pass) {
		this.pass = pass;
	
	} 

	compare(pass) {
		let enc = Buffer.from(this.pass, 'base64').toString();
		if (pass == enc) {
			return true;
		}
		return false;
	}
}

module.exports = Pass;