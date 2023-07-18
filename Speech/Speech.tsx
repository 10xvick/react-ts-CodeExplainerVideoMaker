const synth = window.speechSynthesis;
const [pitch, rate] = [1.5, 0.85];

export const Text2Speech = (text, next, update) => {
  update('');
  const utt = new SpeechSynthesisUtterance(text);
  utt.pitch = pitch;
  utt.rate = rate;
  utt.onend = next;
  utt.onboundary = (e) =>
    update((x) => x + ' ' + getword(e.target.text, e.charIndex, e.charLength));

  synth.cancel();
  synth.speak(utt);
};

export const getword = (text, from, to) => {
  let word = text[from];
  for (let i = from + 1; i < from + to; i++) {
    word += text[i];
  }
  return word;
};

// export const Text2Speach_c = (text)=>{
//   const [end,setEnd] = useState(false)
//   useEffect(()=>{
//     Text2Speech(text,()=>{
//       setEnd(true);
//     })
//   },[])
//   return [end,setEnd];
// }
