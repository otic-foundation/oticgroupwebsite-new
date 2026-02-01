import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="flex flex-col min-h-screen noise-overlay">
      <Header />
      <main className="flex-1">
        {/* Hero Section - matching Industries style */}
        <section className="pt-32 pb-12 relative overflow-hidden bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-cta" />
                <p className="text-xs uppercase tracking-widest text-cta font-body">
                  Legal
                </p>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                Privacy Policy
              </h1>
              <p className="text-lg text-muted-foreground font-body">
                Otic Technologies Limited Data Privacy and Protection Policy
              </p>
            </div>
          </div>
        </section>

        {/* Policy Content */}
        <section className="py-12 pb-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl prose prose-invert prose-lg">
              
              {/* 1.0 Introduction */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-bold mb-4 text-white">1.0 Introduction</h2>
                <p className="text-muted-foreground font-body leading-relaxed">
                  At Otic Technologies Limited, we are committed to ensuring the lawful, secure, and ethical collection, use, and management of personal and institutional data and protecting of the right to privacy of our data subjects (our customers, employees, and other stakeholders). This data privacy and protection policy outlines the guidelines, principles and procedures that govern how Otic Technologies Limited (herein after referred to as "the Company", "we", or "us") collects, processes, stores, shares, and disposes of data in a bid to ensure the protection and privacy of personal. It is designed to comply with the Data Privacy and Protection Laws of Uganda and the Regulations thereto.
                </p>
              </div>

              {/* 2.0 Definitions */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-bold mb-4 text-white">2.0 Definitions</h2>
                
                <h3 className="font-display text-xl font-semibold mb-2 text-white">2.1 Data</h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  Means information which:
                </p>
                <ul className="list-disc list-inside text-muted-foreground font-body space-y-2 mb-6">
                  <li>is processed by means of equipment operating automatically in response to instructions given for that purpose;</li>
                  <li>is recorded with the intention that it should be processed by means of such equipment;</li>
                  <li>is recorded as part of a relevant filing system or with the intention that it should form part of a relevant filing system; or</li>
                  <li>does not fall within the above but forms part of an accessible record.</li>
                </ul>

                <h3 className="font-display text-xl font-semibold mb-2 text-white">2.2 Personal Data</h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  Means information about a person from which the person can be identified, that is recorded in any form and includes data that relates to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground font-body space-y-2 mb-6">
                  <li>the nationality, age or marital status of the person;</li>
                  <li>the educational level, or occupation of the person;</li>
                  <li>an identification number, symbol or other particulars assigned to a person; identity data; or</li>
                  <li>other information which is in the possession of, or is likely to come into the possession of the data controller and includes an expression of opinion about the individual.</li>
                </ul>

                <h3 className="font-display text-xl font-semibold mb-2 text-white">2.3 Data Subject</h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  Means an individual from whom or in respect of whom personal information has been requested, collected, collated, processed or stored.
                </p>

                <h3 className="font-display text-xl font-semibold mb-2 text-white">2.4 Data Collector</h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  Means a person who collects personal data.
                </p>

                <h3 className="font-display text-xl font-semibold mb-2 text-white">2.5 Data Controller</h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  Means a person who alone, jointly with other persons or in common with other persons or as a statutory duty determines the purposes for and the manner in which personal data is processed or is to be processed.
                </p>

                <h3 className="font-display text-xl font-semibold mb-2 text-white">2.6 Data Processor</h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  Means a person other than an employee of the data controller who processes the data on behalf of the data controller.
                </p>

                <h3 className="font-display text-xl font-semibold mb-2 text-white">2.7 Policy</h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  Means the Otic Technologies Limited Privacy and Protection Policy.
                </p>
              </div>

              {/* 3.0 Scope */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-bold mb-4 text-white">3.0 Scope</h2>
                <ul className="list-disc list-inside text-muted-foreground font-body space-y-4">
                  <li><strong className="text-white">3.1</strong> This Data Protection and Privacy policy is a critical need to the company because it is a move to adhere to the lawful requirement a data collector, controller or processor.</li>
                  <li><strong className="text-white">3.2</strong> All the provisions therein apply and must be adhered to by all employees/staff, volunteers, contractors and third-party service providers so as the Company to meet the four corners of the law.</li>
                  <li><strong className="text-white">3.3</strong> This policy covers data protection, records management, information security and provides links to other policies and procedures on the three areas.</li>
                </ul>
              </div>

              {/* 4.0 Policy Statement */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-bold mb-4 text-white">4.0 Policy Statement</h2>
                <p className="text-muted-foreground font-body leading-relaxed">
                  <strong className="text-white">4.1</strong> Otic Technologies Limited, is committed to protect the privacy, integrity and authenticity of all personal data that is collected and processed from all data subjects and to address all complaints which may arise in case of mishandling of the same.
                </p>
              </div>

              {/* 5.0 Data Protection Principles and Data Subject Rights */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-bold mb-4 text-white">5.0 Data Protection Principles and Data Subject Rights</h2>
                
                <h3 className="font-display text-xl font-semibold mb-4 text-white">5.1 Data Protection Principles</h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  Otic Technologies Limited is committed to upholding the following principles of data protection:
                </p>
                <ul className="list-disc list-inside text-muted-foreground font-body space-y-2 mb-6">
                  <li>The Company shall be accountable to the data subject for data collected, processed held or used;</li>
                  <li>The Company shall collect and process data fairly and lawfully;</li>
                  <li>The Company shall collect, process, use or hold adequate, relevant and not excessive or unnecessary personal data;</li>
                  <li>The Company shall retain personal data for the period authorised by law or for which the data is required;</li>
                  <li>The Company shall ensure quality of information collected, processed, used or held;</li>
                  <li>The Company shall ensure transparency and participation of the data subject in the collection, processing, use and holding of the personal data;</li>
                  <li>The Company shall at all times observe security safeguards in respect of the data.</li>
                </ul>

                <h3 className="font-display text-xl font-semibold mb-4 text-white">5.2 Data Subject Rights</h3>
                <ul className="list-disc list-inside text-muted-foreground font-body space-y-2">
                  <li>A data subject has the right to request for the correction of his or her personal data.</li>
                  <li>A data subject has the right to know the purpose for which personal data is being collected.</li>
                  <li>A data subject has the right to request for the erasing of any personal data the company holds on him or her.</li>
                  <li>A data subject has the right to withdraw his or her consent at anytime in relation to collecting, controlling and processing of the personal data.</li>
                  <li>A data subject has the right to lodge complaints with the National Data Protection Office.</li>
                </ul>
              </div>

              {/* 6.0 Reporting Data Security Breaches */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-bold mb-4 text-white">6.0 Reporting Data Security Breaches</h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  All employees and contractors shall immediately report all security breaches that involve personal data to the Data Protection Officer of the Company and in return the DPO shall take all reasonable steps to remedy the breach.
                </p>

                <h3 className="font-display text-xl font-semibold mb-4 text-white">6.1 Steps to be taken in case of a security breach</h3>
                
                <h4 className="font-display text-lg font-semibold mb-2 text-white">6.1.1 Containment and Initial Response</h4>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  The employees should take immediate action to stop the breach and prevent further unauthorized access to personal data. The employees should at all material times isolate the affected systems or devices from the network to prevent further damage and should preserve save logs, system data, and other relevant information that may be useful for investigations.
                </p>

                <h4 className="font-display text-lg font-semibold mb-2 text-white">6.1.2 Notification</h4>
                <p className="text-muted-foreground font-body leading-relaxed mb-2">
                  The employees should notify the following persons in case of any security breach:
                </p>
                <p className="text-white font-body font-semibold mb-2">Internal stakeholders:</p>
                <ul className="list-disc list-inside text-muted-foreground font-body space-y-1 mb-4">
                  <li>The Data Protection Officer of the Company providing him or her detailed information about the incident or breach.</li>
                  <li>The management of the Company and IT and security team.</li>
                </ul>
                <p className="text-white font-body font-semibold mb-2">External stakeholders:</p>
                <ul className="list-disc list-inside text-muted-foreground font-body space-y-1 mb-4">
                  <li>The data subjects to whose personal data has fallen victim to the breach.</li>
                  <li>The Personal Data Protection Office.</li>
                  <li>The Police.</li>
                </ul>

                <h4 className="font-display text-lg font-semibold mb-2 text-white">6.1.3 Notify the affected individuals</h4>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  The Data Protection Officer shall maintain transparent communication with all data subjects whose data was affected by the breach and provide clear information about; what happened, the potential risks and consequences and the steps that can be taken to protect themselves e.g. monitoring the accounts, changing passwords etc.
                </p>

                <h4 className="font-display text-lg font-semibold mb-2 text-white">6.1.4 Cooperate with investigations</h4>
                <p className="text-muted-foreground font-body leading-relaxed">
                  All employees should collaborate with internal and external investigators to determine the cause of the breach and implement measures to prevent further breaches.
                </p>
              </div>

              {/* 7.0 Staff Awareness */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-bold mb-4 text-white">7.0 Staff Awareness</h2>
                <ul className="list-disc list-inside text-muted-foreground font-body space-y-4">
                  <li><strong className="text-white">7.1</strong> All staff members shall be availed with a copy of this policy whenever possible by the company and in the alternative, the staff members can access the same on the Company website.</li>
                  <li><strong className="text-white">7.2</strong> A summary of the data protection guidelines and procedures of the Company will be pinned on a notice board that will be in a conspicuous place at the Company premises.</li>
                </ul>
              </div>

              {/* 8.0 Policy Compliance */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-bold mb-4 text-white">8.0 Policy Compliance</h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  <strong className="text-white">8.1</strong> All staff must at all times comply with the policy and in case of non compliance by any staff member, he or she shall be subjected to any of the following disciplinary actions:
                </p>
                <ul className="list-disc list-inside text-muted-foreground font-body space-y-2">
                  <li>A reprimand.</li>
                  <li>Suspension for 1 month and without pay.</li>
                  <li>Dismissal from employment.</li>
                </ul>
              </div>

              {/* 9.0 Contact Information */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-bold mb-4 text-white">9.0 Contact Information</h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  <strong className="text-white">9.1</strong> The following are the contacts to call in case of any question in line with data protection and privacy in the company:
                </p>
                <p className="text-muted-foreground font-body">
                  <a href="mailto:info@oticgroup.net" className="text-accent hover:text-accent/80 transition-colors">info@oticgroup.net</a>, <a href="mailto:legal@oticgroup.net" className="text-accent hover:text-accent/80 transition-colors">legal@oticgroup.net</a>
                </p>
              </div>

              {/* 10.0 Review and Approval */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-bold mb-4 text-white">10.0 Review and Approval</h2>
                <p className="text-muted-foreground font-body leading-relaxed">
                  <strong className="text-white">10.1</strong> All policies and procedures are reviewed by the Head Legal department and then forwarded to the CEO for approval.
                </p>
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