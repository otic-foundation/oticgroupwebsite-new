import { useEffect, useState } from 'react';
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

const ZOHO_FORM_HTML = `<!-- your full Zoho form HTML here -->`;

const ZOHO_SCRIPTS = `<!-- your full Zoho inline JS functions here -->`;

const ZohoRegistrationModal = ({ open, onOpenChange }: ZohoRegistrationModalProps) => {
  const [formInjected, setFormInjected] = useState(false);

  useEffect(() => {
    if (open && !formInjected) {
      // Create a container div for the form
      const container = document.getElementById('zoho-form-container');
      if (container) {
        // Inject the HTML
        container.innerHTML = ZOHO_FORM_HTML;

        // Inject the scripts
        const script = document.createElement('script');
        script.textContent = ZOHO_SCRIPTS;
        document.body.appendChild(script);

        setFormInjected(true);
      }
    }

    // Cleanup when modal closes
    if (!open) {
      setFormInjected(false);
      const container = document.getElementById('zoho-form-container');
      if (container) container.innerHTML = '';
    }
  }, [open, formInjected]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-background border-border">
        <DialogHeader>
          <DialogTitle className="font-display text-xl text-foreground">
            Register for Webinar
          </DialogTitle>
        </DialogHeader>

        <div
          id="zoho-form-container"
          className="rounded-lg overflow-hidden min-h-[200px] flex items-center justify-center"
        >
          {!formInjected && <p className="text-muted-foreground">Loading form...</p>}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ZohoRegistrationModal;
