class Device {
    type;
    color;
    brand;
    connection;
    isConnected = false;

    constructor(type, color, brand, connection) {
        this.type = type;
        this.color = color;
        this.brand = brand;
        this.connection = connection;
    }

    connect() {
        this.isConnected = true;
        console.log(`Device connected using ${this.connection} connection.`);
    }

    describeMe() {
        console.log(
            `I am ${this.type} with color ${this.color} from ${this.brand}.`
        );
    }

    move() {
        if (this.isConnected) {
            console.log("Moving...");
        } else {
            console.log("Device is not connected");
        }
    }
}

const mouse = new Device("mouse", "black", "Logitech", "Bluetooth");
console.log(mouse);

// mouse.connect();
mouse.describeMe();
mouse.move();

const controller = new Device("controller", "white", "PlayStation", "Wireless");
console.log(controller);

controller.connect();
controller.describeMe();
controller.move();

class Headphones extends Device {
    volume = 0;

    constructor(type, color, brand, connection, defaultVolume) {
        super(type, color, brand, connection);

        this.volume = defaultVolume;
    }

    playMusic() {
        if (this.isConnected) {
            console.log(`Playing music at volume ${this.volume}`);
        } else {
            console.log("Device is not connected");
        }
    }

    changeVolume(newVolume) {
        this.volume = newVolume;
    }
}

const headphones = new Headphones("headphone", "blue", "Bose", "wireless", 50);
headphones.describeMe();
headphones.connect();
headphones.changeVolume(72);

headphones.playMusic();

class Bank {
    name;
    swiftCode;
    country;
    accounts = [];

    constructor(name, swiftCode, country) {
        this.name = name;
        this.swiftCode = swiftCode;
        this.country = country;
    }

    createAccount(personName, balance) {
        const account = new Account(personName, balance);
        this.accounts.push(account);
    }

    listAccounts() {
        this.accounts.forEach((account) => {
            console.log(
                `Contul lui ${account.personName} cu sold: ${account.balance}`
            );
        });
    }

    listNegativeAccounts() {
        this.accounts.forEach((account) => {
            if (account.balance < 0) {
                console.log(
                    `Contul lui ${account.personName} cu sold: ${account.balance}`
                );
            }
        });
    }

    retrieveMoneyFromAccount(account, amount) {
        const selectedAccount = this.accounts[account];

        if (selectedAccount.balance > 0) {
            selectedAccount.retrieveMoney(amount);
        } else {
            console.log("Nu ai suficienti bani in cont...");
        }
    }
}

class Account {
    personName;
    balance;

    constructor(personName, balance) {
        this.personName = personName;
        this.balance = balance;
    }

    retrieveMoney(amount) {
        this.balance -= amount;
        console.log(`Ai retras ${amount}. Soldul curent: ${this.balance}`);
    }
}

const bank = new Bank("ING", "SWIFTING", "Romania");
bank.createAccount("Andrei", 100);
bank.createAccount("Mihai", 1000);

bank.listNegativeAccounts();
bank.retrieveMoneyFromAccount(0, 150);
bank.listNegativeAccounts();
bank.retrieveMoneyFromAccount(0, 20);

bank.listAccounts();
