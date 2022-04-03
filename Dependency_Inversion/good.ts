interface Gateway {
	processWebhook();
	logPayload();
}

class Mundipagg implements Gateway {
	private payload;
	private order;

	private createOrder() {
		create(this.order);
	}

	public logPayload() {
		log(this.payload);
	}

	public processWebhook() {
		if (this.order) {
			this.createOrder();
		} else {
			this.logPayload();
		}
	}
}

class Provi implements Gateway {
	private payload;

	public logPayload() {
		log(this.payload);
	}

	public processWebhook() {
		this.logPayload();
	}
}

class Handler {
	private _gateway: Gateway;

	public processWebhook() {
		this._gateway.processWebhook();
	}
}
