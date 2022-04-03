class User {
	public getInfo() {}
}

class Admin extends User {}

class Student extends User {
	public getSubscription(user) {
		return { ...subcription };
	}

	public cancelSubscription(user) {
		if (!user) {
			throw new Error("User is undefined");
		}
	}
}

class Ambassador extends User {
	public getRefund() {}
}
