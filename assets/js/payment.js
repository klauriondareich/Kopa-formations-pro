
let paymentUrl = "";

switch (trainingKey) {
    case 'wp':
      paymentUrl = "https://e-billing.digitech-africa.com/3GpeVil";
      break;
    case 'canva':
        paymentUrl = "https://e-billing.digitech-africa.com/3ZRwa2w";
        break;
    case 'dm':
        paymentUrl = "https://e-billing.digitech-africa.com/43iV2n1";
      break;
      case 'cm':
        paymentUrl = "https://e-billing.digitech-africa.com/3KJVSSx";
      break
    case 'devweb':
        paymentUrl = "https://e-billing.digitech-africa.com/3AwJKOK"
}

document.getElementById("payment-button").href =  paymentUrl;


