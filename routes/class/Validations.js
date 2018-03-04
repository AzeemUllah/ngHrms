'use strict';
class Validations {

  constructor() {
    this.validator = require('validator');
    this.supportedPhoneNumbers = ['ar-AE', 'ar-DZ', 'ar-EG', 'ar-JO', 'ar-SA', 'ar-SY', 'be-BY', 'bg-BG', 'cs-CZ', 'de-DE', 'da-DK', 'el-GR', 'en-AU', 'en-CA', 'en-GB', 'en-HK', 'en-IN', 'en-KE', 'en-NG', 'en-NZ', 'en-RW', 'en-SG', 'en-UG', 'en-US', 'en-TZ', 'en-ZA', 'en-ZM', 'en-PK', 'es-ES', 'et-EE', 'fa-IR', 'fi-FI', 'fr-FR', 'he-IL', 'hu-HU', 'it-IT', 'ja-JP', 'kk-KZ', 'ko-KR', 'lt-LT', 'ms-MY', 'nb-NO', 'nn-NO', 'pl-PL', 'pt-PT', 'pt-BR', 'ro-RO', 'ru-RU', 'sk-SK', 'sr-RS', 'th-TH', 'tr-TR', 'uk-UA', 'vi-VN', 'zh-CN', 'zh-HK', 'zh-TW'];
    this.TAG = "Class: Validations ";
  }

  isValidUserSignup(email,firstname,lastname,password,phone,role,username){
    var sumOfErrors = "";

    if(!(this.validator.isEmail(email+''))){
      sumOfErrors +=  "Not a valid email. ";
    }

      if(this.validator.isEmpty(firstname+'')){
      sumOfErrors +=  "First name can't be empty. ";
    }
      if(!(this.validator.isLength(firstname+'',{min:3, max: 20}))){
      sumOfErrors +=  "First name should be between 3 to 20 characters. ";
    }

      if(this.validator.isEmpty(lastname+'')){
      sumOfErrors +=  "Last name can't be empty. ";
    }
      if(!(this.validator.isLength(lastname+'',{min:3, max: 20}))){
      sumOfErrors +=  "Last name should be between 3 to 20 characters. ";
    }

      if((this.validator.isEmpty(password+''))){
      sumOfErrors +=  "Password can't be empty. ";
    }
      if(!(this.validator.isLength(password+'',{min:8, max: 20}))){
      sumOfErrors +=  "Password should be between 8 to 20 characters. ";
    }

      if(!(this.validator.isMobilePhone(phone+'','any',{strictMode: true}))){
      sumOfErrors +=  "Not a valid Phone Number. ";
    }

      if((this.validator.isEmpty(role+''))){
      sumOfErrors +=  "Role can't be empty. ";
    }

      if((this.validator.isEmpty(username+''))){
      sumOfErrors +=  "Username can't be empty. ";
    }

    return sumOfErrors;
  }

  isValidlogin(email,password){
    var sumOfErrors = "";

    if(!(this.validator.isEmail(email+''))){
      sumOfErrors +=  "Not a valid email. ";
    }

    if((this.validator.isEmpty(password+''))){
      sumOfErrors +=  "Password can't be empty. ";
    }

    return sumOfErrors;
  }

}
module.exports = Validations;
