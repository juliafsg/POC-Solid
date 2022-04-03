class User {
	public getInfo(user) {}
	public getSubscription(user) {
		return { ...subcription };
	}
	public cancelSubscription(user) {}
}

class Admin extends User {
	public getSubscription(user) {
		return false;
	}
}

class Ambassador extends User {
	public cancelSubscription(user) {
		if (!user) {
			throw new Error("User is undefined");
		}
	}
	public getRefund() {}
}
