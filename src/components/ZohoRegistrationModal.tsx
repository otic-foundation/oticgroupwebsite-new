import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface ZohoRegistrationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Replace this URL with your Zoho form’s hosted link
const ZOHO_FORM_URL = "https://crm.zoho.com/crm/WebToContactForm?formId=7179876000000665003";

const ZohoRegistrationModal = ({ open, onOpenChange }: ZohoRegistrationModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-background border-border">
        <DialogHeader>
          <DialogTitle className="font-display text-xl text-foreground">
            Register for Webinar
          </DialogTitle>
        </DialogHeader>

        {open && (
          <div className="rounded-lg overflow-hidden min-h-[600px]">
            <iframe
              src={ZOHO_FORM_URL}
              title="Zoho Webinar Registration"
              width="100%"
              height="100%"
              style={{ minHeight: '600px', border: 'none' }}
              sandbox="allow-forms allow-scripts allow-same-origin allow-popups"
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ZohoRegistrationModal;
