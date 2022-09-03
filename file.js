const billAmount = document.querySelector("#bill-amount");

console.log(billAmount.value);//
console.log(billAmount.value);//

const cashGiven = document.querySelector("#cash-given")
const checkButton = document.querySelector("#check-button");
const message=document.querySelector("#error-message");
const noOfnotes=document.querySelectorAll(".no_of_notes");
const currency=[2000,500,100,20,10,5,1];
// checkButton.addEventListener("click",()=> console.log("clicked "))

checkButton.addEventListener("click",function validateBillAndCash(){
    hide_msg();
    if(billAmount.value>0){
        console.log(billAmount.value);
        console.log(cashGiven.value);

       if(Number(cashGiven.value)===Number(billAmount.value))  
        { 
            showmessage("No need to give any change"); 
        }

       else if(Number(cashGiven.value) >= Number(billAmount.value))
        {
            const amountToBeReturned=cashGiven.value-billAmount.value;
            calculateChange(amountToBeReturned);
        }
        else
        {
          showmessage("Do you wanna wash plates??..")
        }

    }
    else{
       showmessage("Invalid bill amount");
    }
});

function calculateChange(Amount_to_return)
{
    for(let i=0;i<currency.length;i++)
    {
        const numberOfNotes =Math.trunc(Amount_to_return/currency[i]);
        Amount_to_return%=currency[i];
        noOfnotes[i].innerText=numberOfNotes;
    }
    
}

function hide_msg()
{
    message.style.display="none";
}

function showmessage(msg)
{ message.style.display="block";
message.innerText=msg

}

