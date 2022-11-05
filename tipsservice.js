//notes 
//denny says 3 servers and one bussboy = 15%
//4 servers and one bussboy is 15%
//5 servers and one bussboy is 10%
//if there is 2 bussboys automatically 25%
//<text name="bussboyammount" id="bussammount" cols="20" rows="1"></textarea>
tipammount = 

bussboy = 2
function tipcalc(tipammount,bussboysworking){

    if(bussboysworking === 2){
       bussboytotal = tipammount * .25;
       serverammount = (tipammount - bussboytotal)/2

        return "your bussboy total = "+ bussboytotal + "your server total = "+serverammount +"each";
    }//else if(bussboy = 1 && servers === 2){

    //}
}

console.log(tipcalc(100,2));