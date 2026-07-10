export interface PartnerLogo {
  name: string
  src: string
  /** Optical height — keep visual weight even across wordmarks */
  heightClass?: string
}

export const DEFAULT_PARTNER_HEIGHT_CLASS = 'h-8 sm:h-9'

export const partnerLogos: PartnerLogo[] = [
  { name: 'Perkins', src: '/partners/perkins.png', heightClass: 'h-9 sm:h-10' },
  { name: 'Cummins', src: '/partners/cummins.png', heightClass: 'h-8 sm:h-9' },
  { name: 'Schneider Electric', src: '/partners/schneider-electric.png', heightClass: 'h-8 sm:h-9' },
  { name: 'Siemens', src: '/partners/siemens.png', heightClass: 'h-12 sm:h-16' },
  { name: 'Mitsubishi', src: '/partners/mitsubishi.png', heightClass: 'h-8 sm:h-9' },
  { name: 'GREE', src: '/partners/gree.png', heightClass: 'h-7 sm:h-8' },
  { name: 'Meanwell', src: '/partners/meanwell.png', heightClass: 'h-7 sm:h-8' },
]
