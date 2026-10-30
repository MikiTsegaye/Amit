import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
interface Progress { stars:number; unlockedBadges:string[]; completed:string[]; customization:{hat:string; color:string} }
const initial: Progress = { stars: 6, unlockedBadges: [], completed: [], customization: { hat:'', color:'#55bde8' } }
const ProgressContext = createContext<Progress & { addStars:(n:number)=>void; complete:(id:string)=>void; spend:(n:number)=>boolean; customize:(key:'hat'|'color', value:string)=>void; unlockBadge:(badge:string)=>void } | null>(null)
export const ProgressProvider = ({children}:{children:ReactNode}) => {
  const [progress,setProgress] = useState<Progress>(() => { try { return JSON.parse(localStorage.getItem('robi-progress') || '') || initial } catch { return initial } })
  useEffect(() => localStorage.setItem('robi-progress', JSON.stringify(progress)), [progress])
  const addStars=(n:number)=>setProgress(p=>({...p,stars:p.stars+n}))
  const complete=(id:string)=>setProgress(p=>p.completed.includes(id)?p:{...p,completed:[...p.completed,id]})
  const spend=(n:number)=>{ if(progress.stars<n)return false; setProgress(p=>({...p,stars:p.stars-n})); return true }
  const customize=(key:'hat'|'color',value:string)=>setProgress(p=>({...p,customization:{...p.customization,[key]:value}}))
  const unlockBadge=(badge:string)=>setProgress(p=>p.unlockedBadges.includes(badge)?p:{...p,unlockedBadges:[...p.unlockedBadges,badge]})
  return <ProgressContext.Provider value={{...progress,addStars,complete,spend,customize,unlockBadge}}>{children}</ProgressContext.Provider>
}
export const useProgress=()=>{ const ctx=useContext(ProgressContext); if(!ctx) throw Error('ProgressProvider missing'); return ctx }
