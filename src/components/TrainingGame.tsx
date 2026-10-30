import { useState } from 'react'
import { ChevronLeft, RotateCcw } from 'lucide-react'
import { missions, type ModuleId } from '../data/content'
import { useProgress } from '../context/ProgressContext'
import { playSound } from '../hooks/useSpeech'

interface Props {
  go: (id: ModuleId) => void
  label: (text: string) => string
  Back: (props: { go: (id: ModuleId) => void }) => JSX.Element
  Title: (props: { emoji: string; title: string; sub: string; speak?: () => void }) => JSX.Element
  celebrate: (n?: number) => void
}

export function TrainingGame({ go, label, Back, Title, celebrate }: Props) {
  const [missionIndex, setMissionIndex] = useState(0)
  const [phase, setPhase] = useState<'train' | 'test'>('train')
  const [selected, setSelected] = useState<number | null>(null)
  const [learned, setLearned] = useState<Record<string, 'left' | 'right'>>({})
  const [testIndex, setTestIndex] = useState(0)
  const [feedback, setFeedback] = useState<boolean | null>(null)
  const mission = missions[missionIndex]
  const { addStars, complete } = useProgress()
  const learnedCount = Object.keys(learned).length
  const predictedBucket = learned[mission.examples[testIndex % mission.examples.length]]
  const expectedBucket = testIndex % 2 === 0 ? 'left' : 'right'

  const chooseBucket = (bucket: 'left' | 'right') => {
    if (selected === null) return
    const updated = { ...learned, [mission.examples[selected]]: bucket }
    setLearned(updated)
    setSelected(null)
    if (Object.keys(updated).length === mission.examples.length) {
      setPhase('test')
      setTestIndex(0)
      playSound('fanfare')
    }
  }

  const answerTest = (wasCorrect: boolean) => {
    setFeedback(wasCorrect)
    wasCorrect ? playSound('success') : playSound('hint')
  }

  const nextTest = () => {
    if (testIndex === mission.test.length - 1) {
      addStars(3)
      complete('train')
      celebrate(2)
    }
    setTestIndex(index => index + 1)
    setFeedback(null)
  }

  const reset = () => {
    setPhase('train')
    setSelected(null)
    setLearned({})
    setTestIndex(0)
    setFeedback(null)
  }

  return <section className="module">
    <Back go={go} />
    <Title emoji="🤖" title={label('אַלֵּף אֶת הָרוֹבּוֹט')} sub={label('מְלַמְּדִים אֶת רוֹבִּי מֵדֻגְמָאוֹת')} speak={() => {}} />
    <div className="stepper"><b className={phase === 'train' ? 'active' : ''}>1. אימון הרובוט</b><span /><b className={phase === 'test' ? 'active' : ''}>2. זמן בדיקה!</b></div>
    {phase === 'train' ? <>
      <div className="mission-picker">{missions.map((item, index) => <button key={item.title} className={missionIndex === index ? 'selected' : ''} onClick={() => { setMissionIndex(index); reset() }}>משימה {index + 1}<strong>{label(item.title)}</strong></button>)}</div>
      <div className="game-card train-card">
        <h2>עֲזֹר לְרוֹבִי לְמַיֵּן! <span className="brain-meter"><i style={{ width: `${learnedCount / mission.examples.length * 100}%` }} /></span></h2>
        <p>{selected === null ? 'בַּחֲרוּ תְּמוּנָה לְלִמּוּד' : 'עַכְשָׁו בַּחֲרוּ אֵיזֶה דְּלִי מַתְאִים'}</p>
        <div className="bucket-row">
          <div className="bucket">{mission.examples.map((emoji, index) => <button key={emoji} disabled={Boolean(learned[emoji])} className={`example ${selected === index ? 'chosen' : ''}`} onClick={() => setSelected(index)}>{emoji}</button>)}</div>
          <div className="buckets">
            <button disabled={selected === null} onClick={() => chooseBucket('left')}><span>{mission.left}</span><b>🧺</b></button>
            <button disabled={selected === null} onClick={() => chooseBucket('right')}><span>{mission.right}</span><b>🚚</b></button>
          </div>
        </div>
        <div className="meter-label">🧠 מֶד הַלְמִידָה: {Math.round(learnedCount / mission.examples.length * 100)}%</div>
      </div>
    </> : <div className="game-card test-card">
      <div className="test-badge">⚡ מַבְחָן הַחָדָשׁ</div>
      {testIndex < mission.test.length ? <>
        <h2>רוֹבִּי מְנַחֵשׁ לְפִי מָה שֶׁלָּמַד!</h2>
        <div className="big-item">{mission.test[testIndex]}</div>
        <p>רוֹבִּי חוֹשֵׁב: <strong>{predictedBucket === 'left' ? label(mission.left) : label(mission.right)}</strong></p>
        {feedback === null ? <div className="two-actions"><button className="ai-btn" onClick={() => answerTest(predictedBucket === expectedBucket)}>✅ רוֹבִּי צָדַק!</button><button className="normal-btn" onClick={() => answerTest(predictedBucket !== expectedBucket)}>🔁 לֹא בְּדִיּוּק</button></div> : <div className={feedback ? 'feedback good' : 'feedback'}>{feedback ? 'כָּל הַכָּבוֹד! הַלְמִידָה עוֹבֶדֶת.' : 'טוֹב שֶׁבָּדַקְנוּ! כָּךְ מַחְשֵׁב לוֹמֵד.'}<button onClick={nextTest}>הַבָּא <ChevronLeft /></button></div>}
      </> : <div className="success">נִצַּחְתָּ! רוֹבִּי הִשְׁתַּפֵּר בְּכָל דַּעַת שֶׁלִּמַּדְתָּ! ⭐</div>}
      <button className="reset" onClick={reset}><RotateCcw /> מִשִׂימָה חֲדָשָׁה</button>
    </div>}
  </section>
}
