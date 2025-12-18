import type { Metadata } from 'next'
import SectionHeader from '../../components/ui/SectionHeader'
import LinkButton from '../../components/ui/LinkButton'
import FeatureCard from '../../components/ui/FeatureCard'

export const metadata: Metadata = { title: 'Contact — Ateliér Libušín' }

export default function Contact() {
    return (
        <div className="container max-w-5xl mx-auto px-6 py-24 space-y-24">

            {/* Header */}
            <SectionHeader
                eyebrow="Information"
                title="Visit & Contact"
                subtitle="Reach out for partnerships, visits, or general inquiries."
                align="center"
            />

            {/* Contact Blocks */}
            <div className="grid md:grid-cols-3 gap-8">
                <FeatureCard
                    title="General Inquiries"
                    description="For questions about the site, partnerships, or scheduling a visit."
                    href="mailto:berzon73@gmail.com"
                    icon={<span className="text-2xl">✉️</span>}
                />
                <FeatureCard
                    title="Location"
                    description="Libušín, Central Bohemia. 35 mins from Prague (Bus 300/399 from Nádraží Veleslavín)."
                    href="https://maps.app.goo.gl/placeholder"
                    icon={<span className="text-2xl">📍</span>}
                />
                <FeatureCard
                    title="Press Office"
                    description="Download our press kit or request hi-res documentation."
                    href="/press"
                    icon={<span className="text-2xl">🗞️</span>}
                />
            </div>

            {/* Application CTA */}
            <section className="bg-[var(--bg-panel)] rounded-3xl p-16 border border-[var(--brand)]/20 text-center space-y-10 my-12">
                <div className="space-y-4">
                    <h2 className="text-4xl font-serif text-white">Applying for Residency?</h2>
                    <p className="text-[var(--text-muted)] max-w-xl mx-auto text-lg">
                        We accept applications exclusively through our online portal.
                        Please review the program criteria before submitting.
                    </p>
                </div>
                <div className="flex justify-center">
                    <LinkButton href="/apply" variant="primary">Go to Application</LinkButton>
                </div>
            </section>

        </div>
    )
}
