import { EQUIPMENT_STATES } from './constants';

export const formatBattery = (value) => `${Number(value ?? 0).toFixed(0)}%`;

export const formatDateTime = (value) => {
    if (!value) {
        return '-';
    }

    return new Intl.DateTimeFormat('pt-BR', {
        dateStyle: 'short',
        timeStyle: 'medium',
    }).format(new Date(value));
};

export const formatEquipmentStatus = (status) => {
    const map = {
        [EQUIPMENT_STATES.DESLIGADO]: 'Desligado',
        [EQUIPMENT_STATES.PRONTO]: 'Pronto',
        [EQUIPMENT_STATES.EM_MOVIMENTO]: 'Em movimento',
        [EQUIPMENT_STATES.PAUSADO]: 'Pausado',
        [EQUIPMENT_STATES.ERRO]: 'Erro',
        [EQUIPMENT_STATES.EMERGENCIA]: 'Emergencia',
    };

    return map[status] || 'Desconhecido';
};
