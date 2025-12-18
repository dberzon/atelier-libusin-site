import SectionHeader from '../../components/ui/SectionHeader'
import LinkButton from '../../components/ui/LinkButton'

export const metadata = { title: 'Contact — Ateliér Libušín' }

export default function Contact() {
    return (
        <div className="container max-w-4xl mx-auto px-6 py-24 space-y-16">
            <SectionHeader
                eyebrow="Get in Touch"
                title="Contact Us"
                subtitle="For general inquiries, press, and partnerships."
                align="center"
            />

            <div className="grid md:grid-cols-2 gap-12">
                {/* General Info */}
                <div className="space-y-8">
                    <div className="p-8 rounded-2xl bg-[var(--bg-panel)] border border-white/5">
                        <h3 className="text-xl font-serif text-white mb-4">General Inquiries</h3>
                        <p className="text-[var(--text-muted)] mb-6">
                            For questions about the residency program or visiting the site.
                        </p>
                        <a href="mailto:info@atelierlibusin.cz" className="text-[var(--brand)] hover:underline text-lg">info@atelierlibusin.cz</a>
                    </div>

                    <div className="p-8 rounded-2xl bg-[var(--bg-panel)] border border-white/5">
                        <h3 className="text-xl font-serif text-white mb-4">Location</h3>
                        <address className="not-italic text-[var(--text-muted)] space-y-2">
                            <p>Ateliér Libušín</p>
                            <p>Libušín, Czech Republic</p>
                            <p className="text-sm opacity-60 mt-4">35 mins from Prague (Metro A / Bus)</p>
                        </address>
                    </div>
                </div>

                {/* Application CTA */}
                <div className="flex flex-col justify-center p-8 rounded-2xl bg-gradient-to-br from-[var(--bg-panel)] to-[var(--bg-deep)] border border-[var(--brand)]/20 text-center">
                    <h3 className="text-2xl font-serif text-white mb-4">Applying for Residency?</h3>
                    <p className="text-[var(--text-muted)] mb-8">
                        Please use our dedicated application portal for all residency requests.
                    </p>
                    <LinkButton href="/apply" variant="primary">Go to Application</LinkButton>
                </div>
            </div>
        </div>
    )
}
