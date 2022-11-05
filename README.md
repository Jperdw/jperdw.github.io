

<html>

<head>
<title> Tips Calculator !</title>
 <link rel = "stylesheet" href = "Untiltled-1">

</head>
<style>
background-color:blue 
</style>

<body>
    <h1 style="text-align:center;">Tips Distributor</h1>
    <h2 style="text-align:center;">Imput Your Ammounts!</h2>
    <form style="text-align:center;">
  <label for="HMB">How Much Are You Giving Kitchen?:</label><br>
  <input type="number" id="HMK" name="HMK" required><br>      
  <label for="HMB">How Many Bussboys?:</label><br>
  <input type="number" id="HMB" name="HMB" required><br>
  <label for="HMB">How Many Waiters?:</label><br>
  <input type="number" id="HMW" name="HMW" required><br>
  <label for="HMM">How Much Money?:</label><br>
  <input type="number" id="HMM" name="HMM" required> <br><br>
  <button type = button onclick="tipcalc()">calculate tip</button>
    </form>

    <div style="text-align:center;" id="finalmath"> </div>
    <script>

function tipcalc(){
    Howmuchtokitchen = parseInt(document.getElementById("HMK").value)
    waitersworking = parseInt(document.getElementById("HMW").value)
    tipammount = parseInt(document.getElementById("HMM").value)
    bussboysworking = parseInt(document.getElementById("HMB").value)
    if (bussboysworking === 2){
        busstotal = ((((tipammount - Howmuchtokitchen))*.25)/2);
        waitertotal = (tipammount - Howmuchtokitchen - busstotal - busstotal)/waitersworking
    
    }else if(bussboysworking === 1 && (waitersworking ===  4 || waitersworking ===3) ) {
        busstotal = (((tipammount - Howmuchtokitchen))*.15);
        waitertotal = (tipammount - Howmuchtokitchen- busstotal)/waitersworking


    }else if(bussboysworking === 1 && waitersworking ===  5){
        busstotal = (((tipammount - Howmuchtokitchen))*.10);
        waitertotal = (tipammount - Howmuchtokitchen- busstotal)/waitersworking

    }
    finalmath = ("Give your bussboy each: "+busstotal+ "<br />Give your waiters each: "+waitertotal)
    document.getElementById('finalmath').innerHTML = finalmath 

    //alert (finalmath)
//if(bussboysworking === 2){
  // bussboytotal = tipammount * .25;
   //serverammount = (tipammount - bussboytotal)/2

  //  return "your bussboy total = "+ bussboytotal + "your server total = "+serverammount +"each";
}

//}
    </script>
</body>

</html>
