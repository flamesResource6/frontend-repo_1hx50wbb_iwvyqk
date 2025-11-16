import React from 'react'
import Spline from '@splinetool/react-spline'
import { GlassPanel, NeonButton, VoiceIndicator, StatChip, VRGrid } from './components/VRGlass'
import VRScaffold from './components/VRScaffold'
import { Icon } from './components/Icons'

// Helper: Unified card for screens
function ScreenCard({ title, subtitle, children, actions }){
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-semibold">{title}</h3>
          {subtitle && <p className="text-white/70 mt-1">{subtitle}</p>}
        </div>
        <VoiceIndicator />
      </div>
      <div className="grid gap-4">
        {children}
      </div>
      {actions && (
        <div className="flex flex-wrap gap-3">
          {actions}
        </div>
      )}
    </div>
  )
}

const Tag = ({ tone='default', children }) => {
  const map = {
    default: 'bg-white/5 ring-white/20',
    success: 'bg-[#00E676]/10 ring-[#00E676]/40 text-[#00E676]',
    warning: 'bg-[#FFD600]/10 ring-[#FFD600]/40 text-[#FFD600]',
    error: 'bg-[#FF5252]/10 ring-[#FF5252]/50 text-[#FF5252]'
  }
  return <span className={`px-3 py-1 rounded-full text-sm ring-1 ${map[tone]}`}>{children}</span>
}

function Divider(){
  return <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
}

export default function App(){
  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      {/* LOGIN & ONBOARDING */}
      <VRScaffold title="SkillPods VR" subtitle="Immersive Factory Training">
        <div className="grid gap-10">
          <section>
            <h2 className="text-3xl font-semibold mb-4">Login & Onboarding</h2>
            <VRGrid>
              <GlassPanel className="p-6">
                <ScreenCard title="Splash" subtitle="Floating brand card with neon edges" actions={<NeonButton>Continue</NeonButton>}>
                  <div className="flex items-center gap-4">
                    <Icon name="home" />
                    <Tag>v1.0</Tag>
                  </div>
                </ScreenCard>
              </GlassPanel>
              <GlassPanel className="p-6">
                <ScreenCard title="Login" subtitle="QR or Worker ID">
                  <div className="flex items-center gap-4">
                    <Icon name="qr" />
                    <input className="bg-white/5 rounded-xl px-4 py-3 w-full ring-1 ring-white/10 placeholder-white/50" placeholder="Scan QR or Enter ID" />
                  </div>
                  <div className="flex gap-3 mt-3">
                    <NeonButton color="green">Scan</NeonButton>
                    <NeonButton>Submit</NeonButton>
                  </div>
                </ScreenCard>
              </GlassPanel>
              <GlassPanel className="p-6">
                <ScreenCard title="ID Verification" subtitle="Confirm identity with photo">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="aspect-video rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center">Live Camera</div>
                    <div className="space-y-3">
                      <Tag>Match 98%</Tag>
                      <NeonButton color="green">Verify</NeonButton>
                    </div>
                  </div>
                </ScreenCard>
              </GlassPanel>
              <GlassPanel className="p-6">
                <ScreenCard title="Language Selection" subtitle="Choose interface language">
                  <div className="grid grid-cols-2 gap-3">
                    {['English','Español','Deutsch','Français'].map(l=> (
                      <button key={l} className="rounded-2xl px-4 py-4 bg-white/5 ring-1 ring-white/10 hover:ring-[#00F5FF]/60 transition">{l}</button>
                    ))}
                  </div>
                </ScreenCard>
              </GlassPanel>
              <GlassPanel className="p-6">
                <ScreenCard title="Voice Tutorial" subtitle="Use voice to navigate">
                  <div className="flex items-center gap-4">
                    <Icon name="mic" />
                    <p className="text-white/80">Say "Start Module" to begin.</p>
                  </div>
                </ScreenCard>
              </GlassPanel>
              <GlassPanel className="p-6">
                <ScreenCard title="Headset Calibration" subtitle="Adjust IPD and play area">
                  <div className="grid gap-3">
                    <div className="h-24 rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center">3D Calibration Overlay</div>
                    <NeonButton>Align</NeonButton>
                  </div>
                </ScreenCard>
              </GlassPanel>
              <GlassPanel className="p-6">
                <ScreenCard title="Profile Setup" subtitle="Optional preferences">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <input className="bg-white/5 rounded-xl px-4 py-3 ring-1 ring-white/10" placeholder="Display Name" />
                    <input className="bg-white/5 rounded-xl px-4 py-3 ring-1 ring-white/10" placeholder="Role" />
                  </div>
                </ScreenCard>
              </GlassPanel>
              <GlassPanel className="p-6">
                <ScreenCard title="Safety Disclaimer" subtitle="Read and accept">
                  <div className="flex items-start gap-3">
                    <Icon name="warning" />
                    <p className="text-white/80">Always follow on-site safety protocols.</p>
                  </div>
                  <div className="mt-3 flex gap-3">
                    <NeonButton color="green">Accept</NeonButton>
                    <NeonButton>Decline</NeonButton>
                  </div>
                </ScreenCard>
              </GlassPanel>
            </VRGrid>
          </section>

          <Divider />

          {/* MODULE SELECTION */}
          <section>
            <h2 className="text-3xl font-semibold mb-4">Module Selection</h2>
            <VRGrid>
              <GlassPanel className="p-6">
                <ScreenCard title="Home Dashboard" subtitle="Grid of modules">
                  <div className="grid sm:grid-cols-3 gap-3">
                    {[1,2,3,4,5,6].map(i=> (
                      <div key={i} className="rounded-2xl p-4 bg-white/5 ring-1 ring-white/10">
                        <div className="text-lg font-semibold mb-2">Module {i}</div>
                        <Tag tone="success">Ready</Tag>
                      </div>
                    ))}
                  </div>
                </ScreenCard>
              </GlassPanel>
              <GlassPanel className="p-6">
                <ScreenCard title="Module Details" subtitle="Description & stats">
                  <p className="text-white/80">Operate Conveyor Belt — Level 1</p>
                  <div className="flex gap-3 mt-2">
                    <StatChip label="Duration" value="15m"/>
                    <StatChip label="Steps" value="12"/>
                  </div>
                </ScreenCard>
              </GlassPanel>
              <GlassPanel className="p-6">
                <ScreenCard title="Pre-training Instructions" subtitle="Read before start">
                  <ul className="list-disc list-inside text-white/80 space-y-1">
                    <li>Wear PPE at all times.</li>
                    <li>Ensure play area is clear.</li>
                  </ul>
                </ScreenCard>
              </GlassPanel>
              <GlassPanel className="p-6">
                <ScreenCard title="Module Download" subtitle="Progress">
                  <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-[#00F5FF]" style={{width:'64%'}} />
                  </div>
                </ScreenCard>
              </GlassPanel>
              <GlassPanel className="p-6">
                <ScreenCard title="Start Confirmation" subtitle="Ready to begin?" actions={<><NeonButton color="green">Start</NeonButton><NeonButton>Cancel</NeonButton></>}>
                </ScreenCard>
              </GlassPanel>
              <GlassPanel className="p-6">
                <ScreenCard title="VR Transition" subtitle="Glass warp animation">
                  <div className="h-24 rounded-xl bg-white/5 ring-1 ring-white/10" />
                </ScreenCard>
              </GlassPanel>
            </VRGrid>
          </section>

          <Divider />

          {/* VR SIMULATION */}
          <section>
            <h2 className="text-3xl font-semibold mb-4">VR Simulation</h2>
            <VRGrid>
              <GlassPanel className="p-6">
                <ScreenCard title="Main VR HUD" subtitle="Glass frame with stats">
                  <div className="flex gap-3">
                    <StatChip label="Progress" value="25%" />
                    <StatChip label="Time" value="02:34" />
                  </div>
                </ScreenCard>
              </GlassPanel>
              <GlassPanel className="p-6">
                <ScreenCard title="Step Instruction" subtitle="Do action A">
                  <p className="text-white/80">Pull red lever to stop the belt.</p>
                </ScreenCard>
              </GlassPanel>
              <GlassPanel className="p-6">
                <ScreenCard title="Success Overlay" subtitle="Green glow">
                  <Tag tone="success">Correct</Tag>
                </ScreenCard>
              </GlassPanel>
              <GlassPanel className="p-6">
                <ScreenCard title="Error Overlay" subtitle="Red glow">
                  <Tag tone="error">Incorrect sequence</Tag>
                </ScreenCard>
              </GlassPanel>
              <GlassPanel className="p-6">
                <ScreenCard title="Step Hint" subtitle="Tooltip">
                  <p className="text-white/80">Hint: check the safety latch.</p>
                </ScreenCard>
              </GlassPanel>
              <GlassPanel className="p-6">
                <ScreenCard title="Pause Menu" subtitle="Resume / Quit">
                  <div className="flex gap-3">
                    <NeonButton color="green">Resume</NeonButton>
                    <NeonButton>Quit</NeonButton>
                  </div>
                </ScreenCard>
              </GlassPanel>
              <GlassPanel className="p-6">
                <ScreenCard title="Auto-Pause Warning" subtitle="Boundary lost">
                  <Tag tone="warning">Tracking Lost</Tag>
                </ScreenCard>
              </GlassPanel>
              <GlassPanel className="p-6">
                <ScreenCard title="Module Progress Bar" subtitle="Inline">
                  <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-[#00FF95]" style={{width:'40%'}} />
                  </div>
                </ScreenCard>
              </GlassPanel>
              <GlassPanel className="p-6">
                <ScreenCard title="Voice Toggle" subtitle="On/Off">
                  <div className="flex items-center gap-3">
                    <Icon name="mic" />
                    <NeonButton>Disable</NeonButton>
                  </div>
                </ScreenCard>
              </GlassPanel>
              <GlassPanel className="p-6">
                <ScreenCard title="Time Alert" subtitle="Remaining">
                  <Tag tone="warning">1 min left</Tag>
                </ScreenCard>
              </GlassPanel>
              <GlassPanel className="p-6">
                <ScreenCard title="Step Mini Result" subtitle="Score">
                  <Tag tone="success">+10</Tag>
                </ScreenCard>
              </GlassPanel>
              <GlassPanel className="p-6">
                <ScreenCard title="End of Training" subtitle="Celebration">
                  <Tag tone="success">Completed</Tag>
                </ScreenCard>
              </GlassPanel>
            </VRGrid>
          </section>

          <Divider />

          {/* PERFORMANCE SUMMARY */}
          <section>
            <h2 className="text-3xl font-semibold mb-4">Performance Summary</h2>
            <VRGrid>
              <GlassPanel className="p-6">
                <ScreenCard title="Summary Dashboard" subtitle="High level">
                  <div className="flex gap-3 flex-wrap">
                    <StatChip label="Score" value="86" />
                    <StatChip label="Accuracy" value="92%" />
                    <StatChip label="Time" value="14:32" />
                  </div>
                </ScreenCard>
              </GlassPanel>
              <GlassPanel className="p-6">
                <ScreenCard title="Step Breakdown" subtitle="Per step">
                  <ul className="text-white/80 space-y-1">
                    {Array.from({length:6}).map((_,i)=> (
                      <li key={i}>Step {i+1}: <span className="text-[#00E676]">OK</span></li>
                    ))}
                  </ul>
                </ScreenCard>
              </GlassPanel>
              <GlassPanel className="p-6">
                <ScreenCard title="Error Explanation" subtitle="What happened">
                  <p className="text-white/80">Incorrect shutdown sequence at step 4.</p>
                </ScreenCard>
              </GlassPanel>
              <GlassPanel className="p-6">
                <ScreenCard title="Improvement Suggestions" subtitle="Next time">
                  <ul className="list-disc list-inside text-white/80 space-y-1">
                    <li>Review safety latch procedure.</li>
                    <li>Slow down during shutdown.</li>
                  </ul>
                </ScreenCard>
              </GlassPanel>
              <GlassPanel className="p-6">
                <ScreenCard title="Trainer Review Waiting" subtitle="Pending">
                  <Tag>Awaiting review...</Tag>
                </ScreenCard>
              </GlassPanel>
              <GlassPanel className="p-6">
                <ScreenCard title="Exit Confirmation" subtitle="Are you sure?" actions={<><NeonButton color="green">Exit</NeonButton><NeonButton>Stay</NeonButton></>}>
                </ScreenCard>
              </GlassPanel>
            </VRGrid>
          </section>

          <Divider />

          {/* CERTIFICATION */}
          <section>
            <h2 className="text-3xl font-semibold mb-4">Certification</h2>
            <VRGrid>
              <GlassPanel className="p-6">
                <ScreenCard title="Worker Certificate" subtitle="Neon border glass card">
                  <div className="rounded-2xl p-6 ring-1 ring-[#00F5FF]/60 shadow-[0_0_40px_rgba(0,245,255,0.35)]">
                    <p className="text-xl font-semibold">Certified: Conveyor Belt Operator L1</p>
                    <p className="text-white/70 mt-1">ID 0042 • Issued Today</p>
                  </div>
                </ScreenCard>
              </GlassPanel>
            </VRGrid>
          </section>
        </div>
      </VRScaffold>
    </div>
  )
}
