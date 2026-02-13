import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface ZohoRegistrationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ZohoRegistrationModal = ({ open, onOpenChange }: ZohoRegistrationModalProps) => {
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [privacyError, setPrivacyError] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [leadSource, setLeadSource] = useState('');

  const handleReset = () => {
    setFirstName('');
    setLastName('');
    setCompany('');
    setEmail('');
    setJobTitle('');
    setLeadSource('');
    setPrivacyAccepted(false);
    setPrivacyError(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const mandatory = [
      { val: firstName, label: 'First Name' },
      { val: lastName, label: 'Last Name' },
      { val: company, label: 'Company' },
      { val: email, label: 'Work Email' },
      { val: jobTitle, label: 'Job Title' },
    ];

    for (const field of mandatory) {
      if (!field.val.trim()) {
        e.preventDefault();
        alert(`Please enter ${field.label}`);
        return;
      }
    }

    const trimmedEmail = email.trim();
    const atpos = trimmedEmail.indexOf('@');
    const dotpos = trimmedEmail.lastIndexOf('.');
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= trimmedEmail.length) {
      e.preventDefault();
      alert('Please enter a valid email address.');
      return;
    }

    if (!privacyAccepted) {
      e.preventDefault();
      setPrivacyError(true);
      return;
    }
    // Form submits naturally to Zoho
  };

  const inputClass = "flex-1 border border-input rounded px-3 py-2 text-sm bg-background text-foreground";
  const labelClass = "sm:w-36 text-sm font-medium text-foreground";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Register for Webinar</DialogTitle>
        </DialogHeader>

        <form
          action="https://crm.zoho.com/crm/WebToContactForm"
          name="WebToContacts7179876000000665003"
          method="POST"
          acceptCharset="UTF-8"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="xnQsjsdp" value="0f19ada52e3daa6e0d75cde53de7e4b43e0a2abc28dd9e1d98c6a099dbaa6d7f" />
          <input type="hidden" name="zc_gad" value="" />
          <input type="hidden" name="xmIwtLD" value="d2a9631c525ae719c3e3c16589cc3d83d90b1c3c7f4be89e783e7773dbb69e9db3e29bbfd38c12f1a30b5bb32bd29ea29" />
          <input type="hidden" name="actionType" value="Q29udGFjdHM=" />
          <input type="hidden" name="returnURL" value="https://otic.co" />

          <h3 className="text-lg font-semibold mb-4">Webinar Registration</h3>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <label htmlFor="First_Name" className={labelClass}>
                First Name <span className="text-destructive">*</span>
              </label>
              <input type="text" id="First_Name" name="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} maxLength={40} className={inputClass} />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <label htmlFor="Last_Name" className={labelClass}>
                Last Name <span className="text-destructive">*</span>
              </label>
              <input type="text" id="Last_Name" name="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} maxLength={80} className={inputClass} />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <label htmlFor="Account_Name" className={labelClass}>
                Company <span className="text-destructive">*</span>
              </label>
              <input type="text" id="Account_Name" name="Account Name" value={company} onChange={(e) => setCompany(e.target.value)} maxLength={100} className={inputClass} />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <label htmlFor="Email" className={labelClass}>
                Work Email <span className="text-destructive">*</span>
              </label>
              <input type="email" id="Email" name="Email" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={100} className={inputClass} />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <label htmlFor="Title" className={labelClass}>
                Job Title <span className="text-destructive">*</span>
              </label>
              <input type="text" id="Title" name="Title" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} maxLength={100} className={inputClass} />
            </div>

            <div className="flex items-start gap-3 mt-2">
              <input
                type="checkbox"
                id="privacyTool"
                checked={privacyAccepted}
                onChange={(e) => {
                  setPrivacyAccepted(e.target.checked);
                  if (e.target.checked) setPrivacyError(false);
                }}
                className="mt-1"
              />
              <label htmlFor="privacyTool" className="text-xs text-muted-foreground leading-relaxed">
                I would like to receive communications about Otic tailored to my interests and preferences,
                including latest news about products, services, events, and promotions. For more information,
                please see our Privacy Policy.
              </label>
            </div>
            {privacyError && (
              <p className="text-destructive text-xs">Please accept this</p>
            )}

            <div className="flex gap-3 mt-4">
              <button
                type="submit"
                className="px-6 py-2 bg-primary text-primary-foreground rounded text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2 border border-input rounded text-sm font-medium hover:bg-muted transition-colors"
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ZohoRegistrationModal;
