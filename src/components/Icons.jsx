import React from 'react'

export const Icon = ({ name, className='h-6 w-6' }) => {
  const common = 'stroke-[2.5]';
  const color = '#00F5FF';
  const props = { width: 24, height: 24, fill: 'none', stroke: color, className: `${className}` };
  switch(name){
    case 'home':
      return (<svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className={common} d="M3 10.5 12 3l9 7.5"/><path className={common} d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"/></svg>);
    case 'user':
      return (<svg {...props} viewBox="0 0 24 24"><circle className={common} cx="12" cy="8" r="4"/><path className={common} d="M4 21a8 8 0 0 1 16 0"/></svg>);
    case 'qr':
      return (<svg {...props} viewBox="0 0 24 24"><path className={common} d="M3 3h6v6H3zM15 3h6v6h-6zM3 15h6v6H3z"/><path className={common} d="M15 15h3v3h-3zM21 15v6h-6"/></svg>);
    case 'mic':
      return (<svg {...props} viewBox="0 0 24 24"><rect className={common} x="9" y="3" width="6" height="10" rx="3"/><path className={common} d="M5 10v2a7 7 0 0 0 14 0v-2"/><path className={common} d="M12 19v3"/></svg>);
    case 'warning':
      return (<svg {...props} viewBox="0 0 24 24"><path className={common} d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path className={common} d="M12 9v4"/><path className={common} d="M12 17h.01"/></svg>);
    case 'check':
      return (<svg {...props} viewBox="0 0 24 24"><path className={common} d="m20 6-11 11L4 12"/></svg>);
    case 'x':
      return (<svg {...props} viewBox="0 0 24 24"><path className={common} d="M18 6 6 18M6 6l12 12"/></svg>);
    case 'globe':
      return (<svg {...props} viewBox="0 0 24 24"><circle className={common} cx="12" cy="12" r="10"/><path className={common} d="M2 12h20"/><path className={common} d="M12 2a15.3 15.3 0 0 0 0 20a15.3 15.3 0 0 0 0-20z"/></svg>);
    case 'pause':
      return (<svg {...props} viewBox="0 0 24 24"><path className={common} d="M10 4h2v16h-2zM14 4h2v16h-2z"/></svg>);
    case 'play':
      return (<svg {...props} viewBox="0 0 24 24"><path className={common} d="M8 5v14l11-7z"/></svg>);
    case 'clock':
      return (<svg {...props} viewBox="0 0 24 24"><circle className={common} cx="12" cy="12" r="10"/><path className={common} d="M12 6v6l4 2"/></svg>);
    default:
      return null
  }
}
