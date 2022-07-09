//Un nuevo Set con los nombres de tu familia
const setFamilia = new Set(["Luci", "Mili", "Nico"]);
console.log(setFamilia);

//Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
setFamilia.add("Nico");
console.log(setFamilia);

//Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
setFamilia.add("Javascript")
console.log(setFamilia);

