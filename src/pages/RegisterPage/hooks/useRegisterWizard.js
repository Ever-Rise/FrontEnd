import { useSearchParams } from 'react-router-dom';

export function useRegisterWizard() {
  const [searchParams, setSearchParams] = useSearchParams();
  const etapaAtual = parseInt(searchParams.get('etapa') || '1', 10);

  const avancarEtapa = (e) => {
    if (e) e.preventDefault(); 
    setSearchParams({ etapa: '2' });
  };

  const voltarEtapa = (e) => {
    if (e) e.preventDefault();
    setSearchParams({ etapa: '1' });
  };

  return {
    etapaAtual,
    avancarEtapa,
    voltarEtapa
  };
}