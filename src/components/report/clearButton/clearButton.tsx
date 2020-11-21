import React, { Dispatch, SetStateAction } from 'react';
import Button from '@material-ui/core/Button';
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
        <Button
            onClick={clearBoxes}
            style={{ padding: '5px 0', textTransform: 'initial' }}
        >
            <CloseIcon size={20} />
            <Typography>Limpar associações</Typography>
        </Button>
    );
};

export default ClearButton;
