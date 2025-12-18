


import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Contact — Ateliér Libušín' }

export default function Contact() {
  return (
    <article className="prose max-w-none">
      <h1>Contact</h1>
      <p><strong>Email:</strong> <a href="mailto:berzon73@gmail.com">berzon73@gmail.com</a></p>
      <p><strong>Phone:</strong> +420 733 676 140</p>
      <p><strong>Location:</strong> Libušín, Central Bohemia, Czech Republic (full address on confirmation)</p>
      <p><strong>Socials:</strong> Instagram / Facebook (links forthcoming)</p>
      <div className="aspect-video rounded-2xl overflow-hidden border">
        <iframe
          title="Map – Ateliér Libušín"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Libušín%20Czech%20Republic&output=embed">
        </iframe>
      </div>
    </article>
  )
}
