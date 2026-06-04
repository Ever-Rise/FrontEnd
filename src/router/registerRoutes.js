export const REGISTER_PATH = '/register';

export const REGISTER_SEARCH = {
    etapa2: '2',
};

export const getRegisterStep2Url = () =>
    `${REGISTER_PATH}?etapa=${REGISTER_SEARCH.etapa2}`;

export const getRegisterStepFromSearch = (search) => {
    const params = new URLSearchParams(search);
    return params.get('etapa') === REGISTER_SEARCH.etapa2 ? 2 : 1;
};
