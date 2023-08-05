let input = [
  "0001",
  "Roman Alamsyah ",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca",
];

function dataHandling2(input) {
  let expected_output_1 = input;
  expected_output_1[1] += "Elsharawy";
  expected_output_1[2] = "Provinsi " + expected_output_1[2];
  expected_output_1.splice(4, 0, "Pria");
  expected_output_1[expected_output_1.length - 1] = "SMA Internasional Metro";
  console.log(expected_output_1);
  console.log("");

  let month = input[3].split("/")[1];
  let expected_output_2 = "";
  switch (month) {
    case "01":
      expected_output_2 = "Januari";
      break;
    case "02":
      expected_output_2 = "Februari";
      break;
    case "03":
      expected_output_2 = "Maret";
      break;
    case "04":
      expected_output_2 = "April";
      break;
    case "05":
      expected_output_2 = "Mei";
      break;
    case "06":
      expected_output_2 = "Juni";
      break;
    case "07":
      expected_output_2 = "Juli";
      break;
    case "08":
      expected_output_2 = "Agustus";
      break;
    case "09":
      expected_output_2 = "September";
      break;
    case "10":
      expected_output_2 = "Oktober";
      break;
    case "11":
      expected_output_2 = "November";
      break;
    case "12":
      expected_output_2 = "Desember";
      break;
    default:
      expected_output_2 = "bulan";
      break;
  }
  console.log(expected_output_2);
  console.log("");

  let expected_output_3 = [];
  let date_split = input[3].split("/");
  expected_output_3.splice(0, 3, date_split[2], date_split[0], date_split[1]);
  console.log(expected_output_3);
  console.log("");

  let expected_output_4 = input[3].split("/").join("-");
  console.log(expected_output_4);
  console.log("");

  let expected_output_5 = input[1];
  if (expected_output_5.length > 15) {
    expected_output_5 = expected_output_5.slice(0, 15);
  }
  console.log(expected_output_5);
}

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
