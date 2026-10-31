import { Volume2 } from 'lucide-react'
import { useSpeech } from '../../hooks/useSpeech'

interface SpeakButtonProps {
  text: string
  className?: string
}

export function SpeakButton({ text, className = '' }: SpeakButtonProps) {
  const { speak, isSpeaking } = useSpeech()
  const stopParent = (event: React.SyntheticEvent) => {
    event.stopPropagation()
    event.preventDefault()
  }
  return <button
    type="button"
    className={`speak-button ${isSpeaking ? 'speaking' : ''} ${className}`}
    aria-label="הַקְרֵא לִי"
    onClick={event => { stopParent(event); speak(text) }}
    onTouchStart={stopParent}
  >
    <Volume2 size={22} />
  </button>
}
