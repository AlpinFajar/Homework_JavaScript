// Fungsi untuk menghasilkan array dengan 100 nilai acak antara 1 dan 50
function generateRandomArray() {
  const randomArray = [];
  for (let i = 0; i < 100; i++) {
    randomArray.push(Math.floor(Math.random() * 50) + 1);
  }
  return randomArray;
}

// Fungsi untuk memisahkan array menjadi array genap dan ganjil
function separateEvenOddArrays(inputArray) {
  const evenArray = [];
  const oddArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (i % 2 === 0) {
      evenArray.push(inputArray[i]);
    } else {
      oddArray.push(inputArray[i]);
    }
  }
  return { evenArray, oddArray };
}

// Fungsi untuk menghitung min, max, total, dan rata-rata dari array
function calculateStats(inputArray) {
  let min = inputArray[0];
  let max = inputArray[0];
  let total = 0;

  for (let i = 0; i < inputArray.length; i++) {
    const currentValue = inputArray[i];
    if (currentValue < min) {
      min = currentValue;
    }
    if (currentValue > max) {
      max = currentValue;
    }
    total += currentValue;
  }

  const average = total / inputArray.length;

  return { min, max, total, average };
}

// Menghasilkan array dengan 100 nilai acak
const randomArray = generateRandomArray();

// Memisahkan array menjadi array genap dan ganjil
const { evenArray, oddArray } = separateEvenOddArrays(randomArray);

// Menghitung statistik untuk array genap dan ganjil
const evenStats = calculateStats(evenArray);
const oddStats = calculateStats(oddArray);

// Menampilkan output
console.log("Array dengan jumlah index 100:");
console.log(randomArray);
console.log("Array genap dengan jumlah index 50:");
console.log(evenArray);
console.log("Array ganjil dengan jumlah index 50:");
console.log(oddArray);
console.log("Statistik untuk Array Genap:");
console.log("Min:", evenStats.min);
console.log("Max:", evenStats.max);
console.log("Total:", evenStats.total);
console.log("Rata-rata:", evenStats.average);
console.log("Statistik untuk Array Ganjil:");
console.log("Min:", oddStats.min);
console.log("Max:", oddStats.max);
console.log("Total:", oddStats.total);
console.log("Rata-rata:", oddStats.average);

// Membandingkan nilai statistik antara array genap dan ganjil
if (evenStats.min > oddStats.min) {
  console.log("Min lebih besar pada Array Genap");
} else {
  console.log("Min lebih besar pada Array Ganjil");
}

if (evenStats.max > oddStats.max) {
  console.log("Max lebih besar pada Array Genap");
} else {
  console.log("Max lebih besar pada Array Ganjil");
}

if (evenStats.total === oddStats.total) {
  console.log("Total memiliki nilai yang sama antara Array Genap dan Ganjil");
} else {
  console.log("Total berbeda antara Array Genap dan Ganjil");
}

if (evenStats.average > oddStats.average) {
  console.log("Rata-rata lebih besar pada Array Genap");
} else {
  console.log("Rata-rata lebih besar pada Array Ganjil");
}