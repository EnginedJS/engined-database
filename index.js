const { Service } = require('engined');

module.exports = (opts = {}) => class extends Service {

	constructor(context) {
		super(context);
	}

	async start() {

		this.getContext().assert('Database');
	}

	async stop() {

		let agentManager = this.getContext().get('Database');
		if (!agentManager)
			return;

		if (agentManager.count() === 0) {
			this.getContext().remove('Database');
		}
	}
}
