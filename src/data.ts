export interface Album {
  id: number
  title: string
  description: string
  /**
   * Ente embed URL (embed.ente.com/...). Used both to render the live preview
   * thumbnail and to open the full-size viewer.
   */
  embed: string
  /** Full album share link (albums.ente.com/...) for "Open in new tab". */
  url: string
}

export const albums: Album[] = [
  {
    id: 1,
    title: 'Tang Soo Do Album',
    description: 'Tang Soo Do: Shoot & BTS.',
    embed:
      'https://embed.ente.com/?t=X9DKZ9YBBW#BHn9v4WnPiUpPCvLhnzwus5ih5gG334A1AaYWtoCeFZ6',
    url: 'https://albums.ente.com/?t=X9DKZ9YBBW#BHn9v4WnPiUpPCvLhnzwus5ih5gG334A1AaYWtoCeFZ6',
  },
]