const rewire = require("rewire")
const contactComponent = rewire("./contactComponent")
const required = contactComponent.__get__("required")
const maxLength = contactComponent.__get__("maxLength")
const minLength = contactComponent.__get__("minLength")
const isNumber = contactComponent.__get__("isNumber")
const validEmail = contactComponent.__get__("validEmail")
// @ponicode
describe("required", () => {
    test("0", () => {
        let callFunction = () => {
            required({ length: 10 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            required({ length: 32 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            required({ length: 0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            required({ length: 256 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            required({ length: 16 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            required({ length: Infinity })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("maxLength", () => {
    test("0", () => {
        let callFunction = () => {
            maxLength(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            maxLength(256)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            maxLength(32)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            maxLength(16)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            maxLength(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            maxLength(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("minLength", () => {
    test("0", () => {
        let callFunction = () => {
            minLength(256)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            minLength(32)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            minLength(64)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            minLength(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            minLength(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            minLength(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("isNumber", () => {
    test("0", () => {
        let callFunction = () => {
            isNumber({ key: "elio@example.com" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            isNumber({ key: "Elio" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            isNumber({ key: "Dillenberg" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            isNumber(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("validEmail", () => {
    test("0", () => {
        let callFunction = () => {
            validEmail("/bar@b ar.AA/i")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            validEmail("/ @ponicode.AA/i")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            validEmail("//@bar.AA/i")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            validEmail("/ @foo.AA/i")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            validEmail("elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            validEmail(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
