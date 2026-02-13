import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface ZohoRegistrationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ZohoRegistrationModal = ({ open, onOpenChange }: ZohoRegistrationModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg bg-background border-border p-6 text-center">
        <DialogHeader>
          <DialogTitle className="font-display text-xl text-foreground">
            Register for Webinar
          </DialogTitle>
        </DialogHeader>

        <p className="mt-4 text-muted-foreground">
          Please click the button below to register. The form will open in a new window.
        </p>

        <div className="mt-6 flex justify-center">
          <Button
            onClick={() =>
              window.open(
                'https://crm.zoho.com/crm/WebToContactForm?xnQsjsdp=82d655bc38614b358448593965faae083336afa04a4d4be271f56cf1e5b02b4b&xmIwtLD=607bb775341726795f82050ee3eb6836081b9c86342227a8611643efabe1eaeb36f4ea2b6f01c2f3bd946f53db5d8634&actionType=Q29udGFjdHM=&returnURL=https://www.oticgroup.net/',
                '_blank'
              )
            }
          >
            Open Registration Form
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ZohoRegistrationModal;
