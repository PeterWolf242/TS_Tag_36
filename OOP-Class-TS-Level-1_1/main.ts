class IceCreamFlavor {
	name: string;
	price: number;
	isPopular: boolean;
	description: string;

	// Der richtige Konstruktor
	constructor(name: string, price: number, isPopular: boolean, description: string = "undefined") {
		this.name = name;
		this.price = price;
		this.isPopular = isPopular;
		this.description = description;
	}
}

// Array mit 4 Instanzen der Klasse
const iceCreamFlavors: IceCreamFlavor[] = [
	new IceCreamFlavor("Blaubeere-Basilikum", 6.99, true),
	new IceCreamFlavor("Schokolade", 4.99, true, "Klassischer Schokoladengeschmack"),
	new IceCreamFlavor("Mango-Lassi", 5.99, false, "Exotische Mango mit Joghurt"),
	new IceCreamFlavor("Pistazie", 6.49, true, "Cremige Pistazie mit echter Nuss")
];

// Ausgabe der Eissorten im Array
console.log(iceCreamFlavors);
