import { ThemeToggle } from '@/components/theme/theme-toggle';
import { Helmet } from 'react-helmet-async';
import Logo from '../../../src/assets/logo-forja.png';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <>
      <Helmet title="Home" />
      <div className="flex h-screen flex-col items-center justify-center gap-4">
        <img src={Logo} alt="Logo" width={100} height={100} />
        <h1 className="text-2xl font-bold dark:text-white-500">Forja Tech</h1>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button>
            <Link to={'/sign-in'}>Login</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
