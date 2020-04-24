/*

  pushUserData = (adress, area, endPrice, lat, lng, priceDifference, priceMonth, size, soldDate, squareMeter) => {
    firebase.database().ref().child("kungsholmen/apartments")
          .push()
          .set({
              "adress": adress,
              "area": area,
              "endPrice": endPrice,
              "lat": lat,
              "lng": lng,
              "priceDifference": priceDifference,
              "priceMonth": priceMonth,
              "size": size,
              "soldDate": soldDate,
              "squareMeter": squareMeter
          }, (error) => {
              if (error) {
                  console.error("Data could not be saved." + error)
              } else {
                  console.info("Data saved successfully.")
              }
          })
  }
  
    formatDataForCVS() {
    const cvsRows = []
    const headers = Object.keys(this.searchfilter()[0])
    cvsRows.push(headers.join(","))

    for (const row of this.searchfilter()) {
      const values = headers.map(header => {
        const escaped = ("" + row[header]).replace(/"/g, '\\"')
        return `"${escaped}"`
      })
      cvsRows.push(values.join(","));
    }
    return cvsRows.join("\n");
  }

  downloadCSV = data => {
    const blob = new Blob([data], { type: "text/csv;charset=utf-8;" });
    this.setState({
      cvsLink: window.URL.createObjectURL(blob)
    })
  }

  handleExport = () => {
    this.downloadCSV(this.formatDataForCVS());
  }
  
  
  getData(formData) {
    formData.forEach((apartment, i) => {
        apartment.adress = this.formatAdress(apartment.adress)
        apartment.area = this.formatArea(apartment.area)
        apartment.endPrice = this.formatEndPrice(apartment.endPrice)
        apartment.priceMonth = this.formatPriceMonth(apartment.priceMonth)
        const apartmentSquareMeter = apartment.size
        apartment.size = this.formatSizeRoom(apartment.size)
        apartment.squareMeter = this.formatSizeSquareMeter(apartmentSquareMeter)
        apartment.soldDate = this.formatSoldDate(apartment.soldDate)
        apartment.soldDate = this.formatSoldDateToJsDate(apartment.soldDate);

               fetch(`http://open.mapquestapi.com/geocoding/v1/address?key=3QRDluFzBdykoKPAZAZc9ddcn3A9Fabz&location=Stockholm,${apartment.adress}`)
          .then(response => response.json())
          .then(data => {
            apartment.lat = data.results[0].locations[0].latLng.lat
            apartment.lng = data.results[0].locations[0].latLng.lng
            console.log(i, apartment.adress)
            console.log(data.results[0].locations[0].latLng.lat)
            console.log(data.results[0].locations[0].latLng.lng)
          }) 
    });
    console.log(formData);
    return formData;
  } */

  /* formatAdress(adress) {
      const CheckTr = adress.includes("tr", adress.length - 5)
      const adressWithoutTr = CheckTr ? adress.substring(adress.length - 4, 0).trim() : adress
      const checkComma = adressWithoutTr.includes(",", adressWithoutTr.length - 1)
      const cleanAdress = checkComma ? adressWithoutTr.substring(adressWithoutTr.length - 1, 0).trim() : adress
      return cleanAdress
    }
  
    formatPriceMonth(price) {
      const priceMonth = price.substring(0, price.length - 6).trim().replace(/\s/g, "");
      return priceMonth
    }
  
    formatSizeSquareMeter(size) {
      const squareMeter = size.substring(0, 2).trim().replace(/\s/g, "")
      return squareMeter
    }
  
    formatSizeRoom(size) {
      const room = size.substring(size.length - 7, size.length - 4).trim()
      return room
    }
  
    formatEndPrice(price) {
      let endPrice = price.substring(0, price.length - 3)
      endPrice = endPrice.substring(8).trim().replace(/\s/g, "")
      return endPrice
    }
  
    formatArea(area) {
      const areaAdress = area.substring(21)
      return areaAdress
    }
  
    formatSoldDate(sold) {
      const soldDate = sold.substring(5)
      return soldDate
    } */

  /* formatSoldDateToJsDate(date) {
    var parts = date.split("-");
    switch (parts[1]) {
      case "Dec": {
        parts[1] = 12;
        break;
      }
      case "Nov": {
        parts[1] = 11;
        break;
      }
      case "oktober": {
        parts[1] = 10;
        break;
      }
      case "Sep": {
        parts[1] = "09";
        break;
      }
      case "augusti": {
        parts[1] = "08";
        break;
      }
      case "juli": {
        parts[1] = "07";
        break;
      }
      case "juni": {
        parts[1] = "06";
        break;
      }
      case "maj": {
        parts[1] = "05";
        break;
      }
      case "Apr": {
        parts[1] = "04";
        break;
      }
      case "mars": {
        parts[1] = "03";
        break;
      }

      case "februari": {
        parts[1] = "02";
        break;
      }

      case "januari": {
        parts[1] = "01";
        break;
      }

      default: {
        console.warning("ej hittad");
        break;
      }
    }
    parts[2] = `20${parts[2]}`;
    parts[0] = parts[0].length === 2 ? parts[0] : (parts[0] = `0${parts[0]}`);
    const results = `${parts[2]}-${parts[1]}-${parts[0]}`;
    return results;
  } */