// Purpose: Make two incompatible interfaces work together.
// Adapter converts one interface to another.

// payment.pay(amount)
// payment.makepayment(amount)

class RazorPay{
    makePayment(amount){
        console.log(`Paid $${amount}`)
    }
}

class RazorPayAdaptor{
    constructor(razorPay){
        this.razorPay = razorPay
    }

    //this.razorPay = {
    // makePayment(amount){
    //     console.log(`Paid $${amount}`)
    // }
    //}

    pay(amount){
        this.razorPay.makePayment(amount)
    }
}

const razorPay = new RazorPayAdaptor(new RazorPay()) // this.razorpay
razorPay.pay(1000)



// Clinet => RazorPayAdaptor => RazorPay => makePayment