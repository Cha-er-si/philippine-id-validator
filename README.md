# Philippine ID Validator

A package to validate philippine IDs.
List of IDs:
* Passport
* Driver's License
* PRC
* TIN
* SSS
* GSIS
* OWWA
* Postal
* Integrated Bar of the Philippines(IBP)
* OFW
* Government Office and GOCC
* Senior Citizen
* Company
* National or PhilSys
* Pagibig Loyalty Card
* Philhealth

## Usage/Examples

**In ES6 or Node.JS**

```
import * as PHIDValidator from 'philippine-id-validator'
```

**In Vanilla Javacsript**
Download the bundle.umd file from this repository in the dist folder then import it with the following code in your html.

```
<script src="path/to/bundle.umd.js"></script>
<script>
  PHIDValidator.method();
</script>
```

### checkID()
Returns json object with either of the two: { expiry: boolean, issued: boolean} or { either_or: boolean}, either_or means either of the expiry or issue date is required.
```
PHIDValidator.validatePassport(string)
```

### validatePassport()
Returns json object with isValid: boolean
```
PHIDValidator.validatePassport(string)
```

### validateDriversLicense()
Returns json object with isValid: boolean
```
PHIDValidator.validateDriversLicense(string)
```

### validatePRC()
Returns json object with isValid: boolean
```
PHIDValidator.validatePRC(string)
```

### validateTIN()
Returns json object with isValid: boolean
```
PHIDValidator.validateTIN(string)
```

### validateSSS()
Returns json object with isValid: boolean
```
PHIDValidator.validateSSS(string)
```

### validateGSIS()
Returns json object with isValid: boolean
```
PHIDValidator.validateGSIS(string)
```

### validateOWWA()
Returns json object with isValid: boolean
```
PHIDValidator.validateOWWA(string)
```

### validatePostal()
Returns json object with isValid: boolean
```
PHIDValidator.validatePostal(string)
```

### validateIBP()
Returns json object with isValid: boolean
```
PHIDValidator.validateIBP(string)
```

### validateOFW()
Returns json object with isValid: boolean
```
PHIDValidator.validateOFW(string)
```

### validateGovernment()
Returns json object with isValid: boolean
```
PHIDValidator.validateGovernment(string)
```

### validateSeniorCitizen()
Returns json object with isValid: boolean
```
PHIDValidator.validateSeniorCitizen(string)
```

### validateCompany()
Returns json object with isValid: boolean
```
PHIDValidator.validateCompany(string)
```

### validateNationalID()
Returns json object with isValid: boolean
```
PHIDValidator.validateNationalID(string)
```

### validatePagibig()
Returns json object with isValid: boolean
```
PHIDValidator.validatePagibig(string)
```

### validatePhilhealth()
Returns json object with isValid: boolean
```
PHIDValidator.validatePhilhealth(string)
```
