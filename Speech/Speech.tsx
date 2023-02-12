const synth = window.speechSynthesis;

export const Text2Speech = (text,callback)=>{
    const utt = new SpeechSynthesisUtterance(text)
    utt.addEventListener('end',()=>{
      callback();
    });
    synth.cancel();
    synth.speak(utt);
}

// export const Text2Speach_c = (text)=>{
//   const [end,setEnd] = useState(false)
//   useEffect(()=>{
//     Text2Speech(text,()=>{
//       setEnd(true);
//     })
//   },[])
//   return [end,setEnd];
// }


 
