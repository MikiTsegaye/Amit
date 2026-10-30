import { useCallback } from 'react'
export const useSpeech = () => {
  const speak = useCallback((text: string) => {
    if (!('speechSynthesis' in window)) return
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text.replace(/[\u0591-\u05C7]/g, ''))
    utterance.lang = 'he-IL'; utterance.rate = 0.9; utterance.pitch = 1.05
    window.speechSynthesis.speak(utterance)
  }, [])
  return { speak }
}
export const playSound = (type: 'success'|'pop'|'hint'|'fanfare') => {
  const ctx = new AudioContext()
  const notes = type === 'success' ? [523, 659, 784] : type === 'fanfare' ? [392, 523, 659, 784] : type === 'hint' ? [220] : [440]
  notes.forEach((frequency, index) => {
    const osc = ctx.createOscillator(); const gain = ctx.createGain()
    osc.frequency.value = frequency; osc.type = 'sine'; gain.gain.setValueAtTime(0.12, ctx.currentTime + index * 0.1)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + index * 0.1 + 0.25)
    osc.connect(gain); gain.connect(ctx.destination); osc.start(ctx.currentTime + index * 0.1); osc.stop(ctx.currentTime + index * 0.1 + 0.3)
  })
}
