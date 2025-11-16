import React from 'react'
import { cn } from '../utils/cn'

export function GlassPanel({ className = '', children, opaque = false }) {
  return (
    <div
      className={cn(
        'relative rounded-2xl border border-white/10',
        'bg-white/10 backdrop-blur-2xl',
        'shadow-[0_10px_40px_-10px_rgba(0,245,255,0.25)]',
        'before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none',
        'before:ring-1 before:ring-white/10 before:[mask-image:linear-gradient(to_bottom,black,transparent)]',
        'after:absolute after:inset-0 after:rounded-2xl after:pointer-events-none',
        'after:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]',
        opaque ? 'bg-white/20' : '',
        className
      )}
      style={{
        background: 'rgba(255,255,255,0.08)',
        backdropFilter: 'blur(24px)'
      }}
    >
      <div className="absolute inset-0 rounded-2xl pointer-events-none">
        <div className="absolute inset-0 rounded-2xl" style={{
          boxShadow:
            '0 0 0 1px rgba(255,255,255,0.06), 0 20px 80px -30px rgba(0,245,255,0.4)'
        }} />
      </div>
      {children}
    </div>
  )
}

export function NeonButton({ children, className = '', color = 'aqua', ...props }) {
  const glow = color === 'green' ? 'shadow-[0_0_20px_rgba(0,255,149,0.6)]' : 'shadow-[0_0_20px_rgba(0,245,255,0.6)]'
  const ring = color === 'green' ? 'ring-[#00FF95]/60' : 'ring-[#00F5FF]/60'
  const bg = color === 'green' ? 'bg-[#00FF95]/20 hover:bg-[#00FF95]/30' : 'bg-[#00F5FF]/20 hover:bg-[#00F5FF]/30'
  const text = 'text-white'
  return (
    <button
      className={cn('px-6 py-3 rounded-full backdrop-blur-xl ring-1 transition-colors', bg, ring, glow, text, className)}
      {...props}
    >
      {children}
    </button>
  )
}

export function VoiceIndicator({ active=true }) {
  return (
    <div className="flex items-center gap-2">
      <div className={cn('h-3 w-3 rounded-full', active ? 'bg-[#00FF95] shadow-[0_0_12px_4px_rgba(0,255,149,0.6)]' : 'bg-white/30')} />
      <div className="flex items-end gap-0.5 h-5">
        {[0.4,0.8,1.2,0.9,0.5].map((s,i)=> (
          <div key={i} className="w-1 bg-[#00F5FF] rounded-sm animate-pulse" style={{height:`${s*16}px`, boxShadow:'0 0 10px rgba(0,245,255,0.8)'}} />
        ))}
      </div>
    </div>
  )
}

export function StatChip({ label, value, tone='default' }) {
  const toneMap = {
    default: 'ring-white/20 text-white',
    success: 'ring-[#00E676]/60 text-[#00E676]',
    warning: 'ring-[#FFD600]/60 text-[#FFD600]',
    error: 'ring-[#FF5252]/70 text-[#FF5252]'
  }
  return (
    <div className={cn('px-3 py-1 rounded-full text-sm ring-1', toneMap[tone])}>
      <span className="opacity-80 mr-1">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  )
}

export function VRGrid({ children }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {children}
    </div>
  )
}
