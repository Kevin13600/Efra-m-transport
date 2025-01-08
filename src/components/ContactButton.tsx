import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function ContactButton() {
  return (
    <Button asChild>
      <Link to="/reservation">
        Demander un devis
      </Link>
    </Button>
  );
}
