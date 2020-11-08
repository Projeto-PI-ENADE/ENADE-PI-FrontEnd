import React, { Dispatch, SetStateAction } from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Close as CloseIcon } from '@styled-icons/evaicons-solid';

// import { Container } from './styles';

type Props = {
    initialData: Array<any>;
    setState: React.Dispatch<React.SetStateAction<any>>;
    setIds: Dispatch<SetStateAction<Array<number>>>;
};

const ClearButton: React.FC<Props> = ({ initialData, setState, setIds }) => {
    const clearBoxes = () => {
        setState(initialData);
        setIds([]);
    };

    return (
        <ButtonBase onClick={clearBoxes}>
            <CloseIcon size={20} />
            <Typography>Limpar associações</Typography>
        </ButtonBase>
    );
};

export default ClearButton;
