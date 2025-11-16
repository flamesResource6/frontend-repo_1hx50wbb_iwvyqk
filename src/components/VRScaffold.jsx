import React from 'react'
import Spline from '@splinetool/react-spline'
import { GlassPanel, VoiceIndicator } from './VRGlass'

export default function VRScaffold({ title, subtitle, right=null, children, footer=null }){
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0B0F14] text-white">
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(1200px 800px at 20% -10%, rgba(0,245,255,0.08), transparent), radial-gradient(1000px 700px at 120% 120%, rgba(0,255,149,0.08), transparent)'
        }} />
      </div>

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight drop-shadow-[0_0_12px_rgba(0,245,255,0.4)]">{title}</h1>
            {subtitle && <p className="mt-1 text-white/70 text-lg">{subtitle}</p>}
          </div>
          <div className="flex items-center gap-4">
            <VoiceIndicator />
            {right}
          </div>
        </div>

        <GlassPanel className="p-6 sm:p-8">
          {children}
        </GlassPanel>

        {footer && (
          <div className="mt-6 opacity-90">
            {footer}
          </div>
        )}
      </div>
    </div>
  )
}
