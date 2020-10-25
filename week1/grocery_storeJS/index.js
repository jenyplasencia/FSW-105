var shopper = {
    firstName: 'Jeny',
    lastName: 'Plasencia',
    phoneNumber: 3343129515, // will not be able to accept other caracteres besides numbers.
    creditCardPresent: 'true',
    groceryCart:['tofu','cabbage','milk','berries'],
 
    details:function()
    {
        console.log(`shopper: ${shopper.firstName}  ${shopper.lastName} Phone Number:  ${shopper.phoneNumber} 
        Purchased Items: ${shopper.groceryCart} Payed with Credit Card: ${shopper.creditCardPresent}`)

    },


};
shopper.details();

