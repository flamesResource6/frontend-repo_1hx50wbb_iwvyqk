import React from 'react'

export default function Flow({ steps=[] }){
  return (
    <div className="mt-4 w-full overflow-x-auto">
      <div className="min-w-max flex items-center gap-2 text-sm">
        {steps.map((s, i) => (
          <React.Fragment key={i}>
            <span className="px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/15 text-white/90">{s}</span>
            {i < steps.length - 1 && (
              <span className="text-[#00F5FF] drop-shadow-[0_0_6px_rgba(0,245,255,0.6)]">→</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
