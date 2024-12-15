import AppLayout from '../../components/layouts/app-layout';
import Biography from '../../components/biography/biography';
import Checks from '../../components/check/checks';

export default function Home() {
  return (
    <AppLayout>
      <Biography />
      <Checks />
    </AppLayout>
  );
}
