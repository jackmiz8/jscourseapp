import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">Start learning your way</div>
      <h2 className="font-bold text-3xl">
        Build and Personalize Your Learning Companion
      </h2>
      <p className="text-lg">
        Explore the world of AI-powered learning and unlock your potential.
      </p>
      <Image src="/images/cta.svg" alt="cta" width={362} height={232} />
      <button className="btn-primary">
        <Image src="/icons/plus.svg" alt="plus" width={12} height={12} />
        <Link href="/companions/new">
           <p>Build a New Companion</p>
        </Link>
      </button>
    </section>
  )
}

export default CTA