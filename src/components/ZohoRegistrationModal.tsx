import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface ZohoRegistrationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

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
          <div className="rounded-lg overflow-hidden min-h-[400px]">
            <iframe
              title="Zoho Webinar Registration"
              src="https://crm.zoho.com/crm/WebToContactForm?xnQsjsdp=82d655bc38614b358448593965faae083336afa04a4d4be271f56cf1e5b02b4b&xmIwtLD=607bb775341726795f82050ee3eb6836081b9c86342227a8611643efabe1eaeb36f4ea2b6f01c2f3bd946f53db5d8634&actionType=Q29udGFjdHM=&returnURL=https://www.oticgroup.net/"
              width="100%"
              height="700"
              frameBorder="0"
              scrolling="auto"
              style={{ border: 'none', minHeight: '400px' }}
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ZohoRegistrationModal;
