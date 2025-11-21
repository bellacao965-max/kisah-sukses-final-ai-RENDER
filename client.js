async function sendAI(){
 const log=document.getElementById("chatLog");
 const q=document.getElementById("chatIn").value;
 log.innerHTML+="<div><b>You:</b> "+q+"</div>";
 const r=await fetch("https://api-inference.huggingface.co/models/gpt2",{
  method:"POST",
  headers:{ "Authorization":"Bearer "+HF_KEY,"Content-Type":"application/json" },
  body:JSON.stringify({inputs:q})
 });
 const j=await r.json();
 log.innerHTML+="<div><b>AI:</b> "+(j[0]?.generated_text||"error")+"</div>";
}