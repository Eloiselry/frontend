	// Affichage des BD
    
	/* var txtSerie = document.getElementById("serie");
	var txtNumero = document.getElementById("numero");
	var txtTitre = document.getElementById("titre");
	var txtAuteur = document.getElementById("auteur");
	var txtPrix = document.getElementById("prix");
	var imgAlbum = document.getElementById("album");
	var imgAlbumMini = document.getElementById("albumMini");

	imgAlbum.addEventListener("error", function () {
		prbImg(this)
	});

	imgAlbumMini.addEventListener("error", function () {
		prbImg(this)
	});

	var id = document.getElementById("id");
	id.addEventListener("change", function () {
		getAlbum(this)
 }); */
    
var auteurs  = new Map();
auteurs.set("8", {nom: "Gaudin, Danard"});
auteurs.set("9", {nom: "Arleston, Hubsch"});
auteurs.set("10", {nom: "Arleston, Tarquin"});
auteurs.set("11", {nom: "Arleston, Mourier"});
auteurs.set("13", {nom: "Franquin, Batem, Colman"});
auteurs.set("14", {nom: "Tome, Janry"});
auteurs.set("16", {nom: "Jigounov, Sente"});
auteurs.set("18", {nom: "Le Tendre, Loisel, Lidwine"});
auteurs.set("19", {nom: "Zep"});
auteurs.set("20", {nom: "Herenguel Eric"});
auteurs.set("21", {nom: "Franquin, Batem, Yann"});
auteurs.set("22", {nom: "Franquin, Batem, Greg"});
auteurs.set("23", {nom: "Franquin"});
auteurs.set("24", {nom: "Reynès, Brémaud, Krings"});
auteurs.set("25", {nom: "Fournier"});
auteurs.set("26", {nom: "Franquin, Roba, Greg"});
auteurs.set("27", {nom: "Franquin, Greg"});
auteurs.set("28", {nom: "Franquin, Roba"});
auteurs.set("29", {nom: "Achdé, Erroc"});
auteurs.set("30", {nom: "Ptiluc"});
auteurs.set("31", {nom: "Hergé"});
auteurs.set("32", {nom: "Watch, J.C De la royère"});
auteurs.set("33", {nom: "Derib, Job"});
auteurs.set("34", {nom: "Bercovici, Corteggiani"});
auteurs.set("35", {nom: "Goscinny, Uderzo"});
auteurs.set("36", {nom: "Rocher, Dufranne"});
auteurs.set("37", {nom: "Bercovici, Cauvin"});
auteurs.set("38", {nom: "Jung"});
auteurs.set("39", {nom: "Loisel"});
auteurs.set("40", {nom: "Lecureux, Cheret"});
auteurs.set("41", {nom: "Peyo"});
auteurs.set("42", {nom: "Morris"});
auteurs.set("43", {nom: "Morris, Goscinny"});
auteurs.set("44", {nom: "Morris, Fauche, Léturgie"});
auteurs.set("45", {nom: "Morris, Achdé, Gerra"});
auteurs.set("46", {nom: "Diaz canales, Guarnido"});
auteurs.set("47", {nom: "Franquin, Batem, Dugomier"});
auteurs.set("48", {nom: "Franquin, Batem, Bourcquardez"});
auteurs.set("49", {nom: "Franquin, Batem, Kaminka"});
auteurs.set("50", {nom: "Franquin, Batem"});
auteurs.set("51", {nom: "Franquin, Batem, Fauche"});
auteurs.set("52", {nom: "Franquin, Jidéhem, Greg"});
auteurs.set("53", {nom: "Franquin, Jijé"});
auteurs.set("54", {nom: "Le Tendre, Loisel, Mallié"});
auteurs.set("55", {nom: "Le Tendre, Loisel, Aouamri"});
auteurs.set("56", {nom: "Le Tendre, Loisel"});
auteurs.set("57", {nom: "Arleston, Dav, Tarquin, Lyse"});
auteurs.set("58", {nom: "Arnaud, Stambecco"});
auteurs.set("59", {nom: "Godard, Bollée, Al Coutelis"});
auteurs.set("60", {nom: "Mangin, Gajic"});
auteurs.set("61", {nom: "Morvan, Munuera"});
auteurs.set("62", {nom: "Nic, Cauvin"});
auteurs.set("63", {nom: "Yoann, Vehlmann"});
auteurs.set("64", {nom: "Morvan, Yann, Munuera"});
auteurs.set("65", {nom: "Franquin, Wilbur, Conrad"});
auteurs.set("66", {nom: "Geluck"});
auteurs.set("67", {nom: "Astier, Dupré"});
auteurs.set("68", {nom: "Rosinski, Van Hamme"});
auteurs.set("69", {nom: "Coyote"});
auteurs.set("70", {nom: "Bar2"});
auteurs.set("71", {nom: "Fane"});
auteurs.set("72", {nom: "Jenfèvre, Perna"});
auteurs.set("74", {nom: "Arleston, Hubsch, Lebreton"});
auteurs.set("75", {nom: "Gaudin, Danard, Fuentes"});
auteurs.set("76", {nom: "Arleston, Tota"});
auteurs.set("77", {nom: "Francq, Van Hamme"});
auteurs.set("78", {nom: "Marcello, Maric"});
auteurs.set("79", {nom: "Cauvin, Hardy"});
auteurs.set("80", {nom: "De Groot, Turk"});
auteurs.set("81", {nom: "Rodolphe, Rouge"});
auteurs.set("82", {nom: "Rodolphe, Allot"});
auteurs.set("83", {nom: "Tybo, Goupil"});
auteurs.set("84", {nom: "Tolkien"});
auteurs.set("85", {nom: "Li, Danverre"});
auteurs.set("86", {nom: "Kubert"});
auteurs.set("87", {nom: "Warnant"});
auteurs.set("88", {nom: "Gazzotti"});
auteurs.set("89", {nom: "Reynès, Brrémaud, Toulon"});
auteurs.set("91", {nom: "Servais"});
auteurs.set("92", {nom: "Font"});
auteurs.set("93", {nom: "Charlier, Giraud"});
auteurs.set("94", {nom: "Crisse, Keramidas"});
auteurs.set("95", {nom: "Arleston, Floch"});
auteurs.set("96", {nom: "Bourjac, Gadioux"});
auteurs.set("97", {nom: "Franquin, Jidéhem"});
auteurs.set("98", {nom: "Franquin, Jidéhem, Delporte"});
auteurs.set("99", {nom: "Chaland"});
auteurs.set("100", {nom: "Corbeyran, Guerineau, Merlet"});
auteurs.set("101", {nom: "Corbeyran, Guerineau"});
auteurs.set("102", {nom: "Jacobs"});
auteurs.set("103", {nom: "Vance, Van Hamme"});
auteurs.set("104", {nom: "Giraud, Van Hamme"});
auteurs.set("109", {nom: "Aleston, Tota, Lamirand"});
auteurs.set("108", {nom: "Arleston, Hubsch, MelanÃ¿n"});
auteurs.set("110", {nom: "Gaudin, Danard, Guillo"});
auteurs.set("111", {nom: "Delaf, Dubuc"});
auteurs.set("112", {nom: "Roulot, Martinage"});
auteurs.set("113", {nom: "Laudec, Cauvin"});
auteurs.set("114", {nom: "Matt, Groening"});
auteurs.set("115", {nom: "Midam"});
auteurs.set("116", {nom: "Beka, Poupard"});
auteurs.set("117", {nom: "Godi, Fidrou"});
auteurs.set("118", {nom: "Davis"});
auteurs.set("122", {nom: "Djian, Legrand, Etien"});
auteurs.set("127", {nom: "Convard, Falque"});
auteurs.set("129", {nom: "Sobral"});
auteurs.set("130", {nom: "Gaby, Dzack"});
auteurs.set("131", {nom: "Richez, Cazenove, Bloz"});
auteurs.set("132", {nom: "Clarke, Gilson"});
auteurs.set("133", {nom: "Roba"});
auteurs.set("134", {nom: "Roba"});
auteurs.set("135", {nom: "Domon"});
auteurs.set("136", {nom: "Gursel"});
auteurs.set("137", {nom: "Djian, Corbet"});
auteurs.set("138", {nom: "Miniac"});
auteurs.set("139", {nom: "Coppée"});
auteurs.set("140", {nom: "Veys, Toulon, Guenard"});
auteurs.set("141", {nom: "Midam, Adam"});
auteurs.set("142", {nom: "Achdé, Pennac"});
auteurs.set("143", {nom: "Vrancken, Desberg"});
auteurs.set("144", {nom: "Dubois, Fourquemin"});
auteurs.set("145", {nom: "Lang, Poinsot"});
auteurs.set("146", {nom: "Dufaux, Aubin, Schréder"});
auteurs.set("147", {nom: "Achdé"});
auteurs.set("148", {nom: "Istin, Duarte, Saito"});
auteurs.set("149", {nom: "Bar2, Fane"});
auteurs.set("150", {nom: "Funcken"});
auteurs.set("151", {nom: "Luz"});
auteurs.set("153", {nom: "Nerac, Djian, Teron, Kangaro"});
auteurs.set("154", {nom: "Desberg, Lalor"});
auteurs.set("155", {nom: "Nob"});
auteurs.set("156", {nom: "Barjam"});
auteurs.set("157", {nom: "Francq, Giaconetti"});
auteurs.set("158", {nom: "Le Tendre, Loisel, Etien"});
auteurs.set("159", {nom: "60 auteurs"});

console.log( auteurs.get('1'));
    

/*const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// Expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete('b');

console.log(map1.size);
// Expected output: 2
*/
