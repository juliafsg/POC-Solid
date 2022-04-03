interface Plan {
	getPrice();
	getFreeDays();
	getCoupon(user);
}

class AmbassadorPlan implements Plan {
	public getPrice() {}

	public getFreeDays() {
		return null;
	}

	public getCoupon(user) {
		//...//
	}
}

class BasicPlan implements Plan {
	public getPrice() {}

	public getFreeDays() {
		return null;
	}

	public getCoupon(user) {
		//...//
	}
}

class TrialPlan implements Plan {
	public getPrice() {}

	public getFreeDays() {
		return 10;
	}

	public getIndications(user) {
		throw new NotImplementedException();
	}
	public getCoupon(user) {
		throw new NotImplementedException();
	}
}
