let btn =document.querySelector(".btn")

btn.addEventListener("click",(e)=>
{
    e.preventDefault();
    let Height = parseInt(document.querySelector("#Height").value);
    let Weight= parseInt(document.querySelector("#Weight").value);
    let Msg=document.querySelector(".Msg")

    if(Height === '' || Height <=0 || isNaN(Height))
        {
            Msg.innerHTML="Please Enter the Valid Height";
        }
         else if (Weight === '' || Weight <0 || isNaN(Weight))
            {
                Msg.innerHTML= "Please Enter the Valid Weight";
            }
            else
            {
                const  BMI =(Weight/((Height*Height)/10000)).toFixed(2);
                if( BMI < 18.6)
                    {
                        Msg.innerHTML=`Your BMI is ${BMI} and You are Under Weight`
                    }
                    else if ( BMI > 18.6 &&  BMI < 24.9)
                        {
                            Msg.innerHTML=`Your BMI is ${BMI} and You have Normal Weight`
                        }
                        else if ( BMI > 24.9 )
                            {
                                Msg.innerHTML = `Your BMI is ${BMI} and You are Over Weight`
                            }

            }


})