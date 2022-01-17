
import { useState ,useEffect} from "react";

function App() {
  const [lambaDurumu, setLambaDurumu]  = useState("");

  const [inputDeger,setInputDegeri] = useState();
 const SendRandomValue = () =>{

var RandomValue = Math.floor(Math.random() * 100000);
var RandomValueStr = RandomValue.toString();
var degerr = {id:1,degerDesc:RandomValueStr}
fetch("https://localhost:44315/api/Deger/DegerDurumunuGuncelle",{
 method: "Put",
 body:JSON.stringify(degerr),

 headers: {
   "content-type": "application/json",
   
}

}).then(response=>console.log(response))
setInputDegeri(RandomValueStr)

 }
 
 
 
 
  const SendValue = () =>{
           var deger = {id:1,degerDesc:inputDeger}
         fetch("https://localhost:44315/api/Deger/DegerDurumunuGuncelle",{
          method: "Put",
          body:JSON.stringify(deger),

          headers: {
            "content-type": "application/json",
            
        }
        
        }).then(response=>console.log(response))
        

  }

useEffect(()=>
fetch("https://localhost:44315/api/Deger/getById").then(response=>response.json()).then(response=>setInputDegeri(response.data.degerDesc))

,[])

 useEffect(()=>fetch("https://localhost:44315/api/Lamba/getById").then(response=>response.json())
  .then(response=>setLambaDurumu(response.data.durum)
 
 


  
  ),[])
 
  const Tiklandi = (durumm)=>
  {
    
    var lambaObject = {id:1,durum:durumm}
    fetch("https://localhost:44315/api/Lamba/LambaDurumunuGuncelle",{
      method: "Put",
  
      body:JSON.stringify(lambaObject),
     
      
      headers: {
        "content-type": "application/json",
        
    }}).then((response)=>{console.log(response);
  
  setLambaDurumu(durumm)
  console.log("basildi..")
} 
  
    )

  }
  
  
  

  return ( 
    <div  className="App">
    <h3 style={{"marginTop":"100px","marginBottom":"0px","marginLeft":"500px","marginRight":"100px"}}>Lamba Açma Kapama Uygulaması ve Deger Gönderme </h3>
      <div  className="container">
      <div className="row">
         <div style={{"backgroundColor":"purple","padding":"17px","marginTop":"50px"}} className="col-3">
 
    {lambaDurumu=="Açık" ?  <div class="alert alert-success" role="alert"> Lamba Durumu : {lambaDurumu}</div>
    : <div class="alert alert-danger"  role="alert"> Lamba Durumu : {lambaDurumu}</div>
     }    


{lambaDurumu=="Açık" ? <div style={{"marginTop":"10px"}} > <button onClick={()=>Tiklandi("Kapalı")}  style={{"marginTop":"100px"}} type="button" class="btn btn-danger btn-lg">Lambayı Kapa</button></div>
:<div style={{"marginTop":"10px"}} > <button onClick={()=>Tiklandi("Açık")}  style={{"marginTop":"100px"}} type="button" class="btn btn-success btn-lg">Lambayı Aç</button></div>}


        


         </div>

<div style={{"marginLeft":"300px","backgroundColor":"lightblue","padding":"17px","marginTop":"50px"}} className="col-5">
<input type="text" onChange={e=>setInputDegeri(e.target.value)} class="form-control" placeholder="Deger"  /> 
<button onClick={()=>SendRandomValue()} type="button" class="btn btn-primary">Random Sayı Üret ve Gönder </button>
<button onClick={()=>SendValue()} type="button" class="btn btn-secondary"> Girilen Değeri Gönder</button>
<div style={{"marginTop":"50px"}} class="alert alert-success"  role="alert"> Server Değeri : {inputDeger}</div>
</div>
</div>

      </div>

    </div>
  );
}

export default App;
