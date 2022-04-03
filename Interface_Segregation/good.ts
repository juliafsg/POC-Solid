interface RegularPlan {
	getPrice();
	getCoupon(user);
}

interface TrialPlan {
	getPrice();
	getFreeDays();
}

class AmbassadorPlan implements RegularPlan {
	public getPrice() {}

	public getCoupon(user) {
		//...//
	}
}

class BasicPlan implements RegularPlan {
	public getPrice() {}

	public getCoupon(user) {
		//...//
	}
}

class TrialPlan implements TrialPlan {
	public getPrice() {}

	public getFreeDays() {
		return 10;
	}
}
