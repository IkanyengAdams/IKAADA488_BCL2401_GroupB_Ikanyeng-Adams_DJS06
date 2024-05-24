// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

//Names
names.forEach((name) => {
  console.log(name);
});

//Provinces
provinces.forEach((province) => {
  console.log(province);
});

//Names and provinces altogether. 
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

//Uppercase transformation
const upperCaseProvinces = provinces.map(province => province.toUpperCase());
console.log(upperCaseProvinces);

//Name Lengths
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

//sorting
const sortedProvinces = [...provinces].sort();
console.log(sortedProvinces);


//Filtering Cape
const nonCapeProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(nonCapeProvinces.length);

//Boolean Array
const containsS = names.map(name => name.includes('S'));
console.log(containsS);

//Creating Object Mapping
const nameProvinceMap = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameProvinceMap);


//Log Products
products.forEach(product => console.log(product.product));

//Filter by Name Length
const filteredProducts = products.filter(product => product.product.length <= 5);
console.log(filteredProducts);

//Price Manipulation
const validProducts = products.filter(product => String(product.price).trim() !== '');
const total = validProducts.reduce((acc, product) => acc + Number(product.price), 0);
console.log(total);
