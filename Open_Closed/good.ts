interface PaymentMethod {
	pay();
	refund();
}
class BankSlip implements PaymentMethod {
	public pay() {}
	public refund() {}
}

class Card implements PaymentMethod {
	public pay();
	public refund();
}

class Payment {
	public pay(bill: PaymentMethod) {
		bill.pay();
	}

	public refund(bill: PaymentMethod) {
		bill.refund();
	}
}
