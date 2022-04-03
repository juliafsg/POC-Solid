class BankSlip {
	public generateDocument() {}
	public invalidateDocument() {}
}

class Card {
	public processPayment() {}
	public refundPayment() {}
}

class Payment {
	public pay(bill) {
		if (bill instanceof BankSlip) {
			bill.generateDocument();
		} else if (bill instanceof Card) {
			bill.processPayment();
		}
	}

	public refund(bill) {
		if (bill instanceof BankSlip) {
			bill.invalidateDocument();
		} else if (bill instanceof Card) {
			bill.refundPayment();
		}
	}
}
