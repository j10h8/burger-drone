class appService {
  checkInputLength(input) {
    if (input.trim().length > 16) {
      return true;
    }
  }

  checkInputEmpty(input) {
    if (input.trim() === "") {
      return true;
    }
  }

  checkIfDigits(input) {
    const digits = /[0-9]/;
    if (digits.test(input)) {
      return true;
    }
  }

  checkIfSpecialCharacter(input) {
    const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (specialCharacters.test(input)) {
      return true;
    }
  }
}

export default appService;
