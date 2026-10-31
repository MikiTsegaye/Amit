import { useCallback, useEffect, useState } from 'react'

const withoutNikudOrEmoji = (text: string) => text
  .replace(/[\u0591-\u05C7]/g, '')
  .replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2300}-\u{23FF}]/gu, '')
  .replace(/\s+/g, ' ')
  .trim()

export const useSpeech = () => {
  const [isSpeaking, setIsSpeaking] = useState(false)
  const speak = useCallback((text: string) => {
    if (!('speechSynthesis' in window)) return
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(withoutNikudOrEmoji(text))
    const voice = window.speechSynthesis.getVoices().find(candidate =>
      ['he-IL', 'he', 'iw'].includes(candidate.lang.toLowerCase()))
    if (voice) utterance.voice = voice
    utterance.lang = 'he-IL'
    utterance.rate = 0.88
    utterance.pitch = 1.05
    utterance.onstart = () => setIsSpeaking(true)
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)
    window.speechSynthesis.speak(utterance)
  }, [])
  const stop = useCallback(() => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel()
    setIsSpeaking(false)
  }, [])
  return { speak, stop, isSpeaking }
}

export const useAutoSpeak = (text: string, enabled: boolean) => {
  const { speak } = useSpeech()
  useEffect(() => {
    if (enabled && text) speak(text)
  }, [enabled, speak, text])
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
