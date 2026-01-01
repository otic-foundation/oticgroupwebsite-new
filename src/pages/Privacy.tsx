import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="flex flex-col min-h-screen noise-overlay">
      <Header />
      <main className="flex-1">
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground font-body mb-8">
                Last updated: January 2025
              </p>

              <div className="prose prose-lg max-w-none">
                <div className="space-y-8">
                  <section>
                    <h2 className="font-display text-2xl font-bold mb-4">1. Introduction</h2>
                    <p className="text-muted-foreground font-body leading-relaxed">
                      Otic Group ("we," "our," or "us") is committed to protecting your privacy. 
                      This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                      information when you visit our website or use our services.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-display text-2xl font-bold mb-4">2. Information We Collect</h2>
                    <p className="text-muted-foreground font-body leading-relaxed mb-4">
                      We may collect information about you in a variety of ways:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground font-body space-y-2">
                      <li>Personal data you provide directly (name, email, phone number)</li>
                      <li>Company and professional information</li>
                      <li>Usage data and analytics</li>
                      <li>Communications and correspondence</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="font-display text-2xl font-bold mb-4">3. Use of Information</h2>
                    <p className="text-muted-foreground font-body leading-relaxed mb-4">
                      We use the information we collect to:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground font-body space-y-2">
                      <li>Provide and maintain our services</li>
                      <li>Process and respond to inquiries</li>
                      <li>Send administrative information and updates</li>
                      <li>Improve our website and services</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="font-display text-2xl font-bold mb-4">4. Data Security</h2>
                    <p className="text-muted-foreground font-body leading-relaxed">
                      We implement appropriate technical and organizational security measures to 
                      protect your personal information against unauthorized access, alteration, 
                      disclosure, or destruction.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-display text-2xl font-bold mb-4">5. Your Rights</h2>
                    <p className="text-muted-foreground font-body leading-relaxed mb-4">
                      You have the right to:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground font-body space-y-2">
                      <li>Access your personal data</li>
                      <li>Correct inaccurate data</li>
                      <li>Request deletion of your data</li>
                      <li>Object to processing of your data</li>
                      <li>Data portability</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="font-display text-2xl font-bold mb-4">6. Contact Us</h2>
                    <p className="text-muted-foreground font-body leading-relaxed">
                      If you have questions about this Privacy Policy, please contact us at:
                    </p>
                    <div className="mt-4 p-4 bg-secondary/50 border border-border">
                      <p className="font-body">
                        <strong>Email:</strong> info@oticgroup.net<br />
                        <strong>Phone:</strong> +256 756 722 263<br />
                        <strong>Website:</strong> www.oticgroup.net
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
