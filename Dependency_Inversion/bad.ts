class Mundipagg {
	public payload;
	public order;

	public createOrder() {}
	public logPayload() {}
}

class Handler {
	private _mundipagg: Mundipagg;

	public processWebhook() {
		if (this._mundipagg.order) {
			this._mundipagg.createOrder();
		} else {
			this._mundipagg.logPayload();
		}
	}
}
