export interface PartnerLogo {
  name: string
  src: string
  heightClass?: string
}

export const DEFAULT_PARTNER_HEIGHT_CLASS = 'h-6 sm:h-8 lg:h-10'

export const partnerLogos: PartnerLogo[] = [
  { name: 'Perkins', src: '/partners/perkins.png', heightClass: 'h-8 sm:h-10' },
  { name: 'Cummins', src: '/partners/cummins.png' },
  { name: 'Schneider Electric', src: '/partners/schneider-electric.png' },
  { name: 'Mitsubishi', src: '/partners/mitsubishi.png' },
  { name: 'GREE', src: '/partners/gree.png' },
  { name: 'Meanwell', src: '/partners/meanwell.png' },
  { name: 'Siemens', src: '/partners/siemens.png', heightClass: 'h-10 sm:h-16 lg:h-28' },
]
