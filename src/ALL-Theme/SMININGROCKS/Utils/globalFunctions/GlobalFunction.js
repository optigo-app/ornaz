export const checkMonth = (val) => {
    // month = "January" month = "February" month = "March" month = "April" month = "May" month = "June" month = "July" month = "August" month = "September" month = "October" month = "November" month = "December"
    let month = "";
    switch (val) {
        case 0:
            month = "01"
            break;
        case 1:
            month = "02"
            break;
        case 2:
            month = "03"
            break;
        case 3:
            month = "04"
            break;
        case 4:
            month = "05"
            break;
        case 5:
            month = "06"
            break;
        case 6:
            month = "07"
            break;
        case 7:
            month = "08"
            break;
        case 8:
            month = "09"
            break;
        case 9:
            month = "10"
            break;
        case 10:
            month = "11"
            break;
        case 11:
            month = "12"
            break;

        default:
            break;
    }
    return month;
}

export function formatAmount(amount) {
    const formattedAmount = parseFloat(+amount).toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  
    return formattedAmount;
  }
  