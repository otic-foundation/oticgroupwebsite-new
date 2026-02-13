// ZohoRegistrationModal.tsx
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
          <iframe
            src="https://forms.zohopublic.com/yourformurl" // <-- replace with your Zoho form's public URL
            title="Zoho Webinar Registration"
            className="w-full min-h-[600px] rounded-lg border-none"
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ZohoRegistrationModal;
