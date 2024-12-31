import { ArrowBigLeftDash, ShieldX } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function NotFound() {
  return (
    <div className="text-white flex min-h-screen items-center justify-center bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="rounded-lg bg-gray-800 p-8 text-center shadow-xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-6xl text-red-500"
        >
          <ShieldX className="mx-auto h-8 w-8" />
        </motion.div>
        <h1 className="mb-2 text-3xl font-semibold text-white-500">Página não encontrada!</h1>
        <p className="mb-4 text-lg text-white-500">Desculpe, a página que você está procurando não existe.</p>
        <motion.button
          className="inline-block text-lg transition-colors hover:text-blue-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Button variant="default">
            <ArrowBigLeftDash className="mr-2 h-4 w-4" />
            <Link to="/" className="text-sm">
              Voltar
            </Link>
          </Button>
        </motion.button>
      </motion.div>
    </div>
  );
}
