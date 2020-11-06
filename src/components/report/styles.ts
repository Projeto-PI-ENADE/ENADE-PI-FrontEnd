import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            padding: '1rem 2rem',
            border: '1px solid gray',
            borderRadius: '.9rem',
            boxShadow: '3px 3px 6px #00000029',

            '& legend': {
                color: theme.palette.text.primary,
                fontSize: '1.4rem',
                fontWeight: 500,
            },

            '& button': {
                margin: theme.spacing(2, 0),
                justifyContent: 'flex-start',
                transition: 'all .2s',

                '&:hover': {
                    textDecoration: 'underline',
                },
            },
        },

        checkboxesContainer: {
            paddingRight: '2.5rem',
            overflowY: 'auto',
            minHeight: 820,
            maxHeight: 840,
            scrollbarWidth: 'thin',
            '&::-webkit-scrollbar': {
                width: '8px',
                marginLeft: '12px',
            },
            /* Track */
            '&::-webkit-scrollbar-track': {
                WebkitBorderRadius: '10px',
                borderRadius: '10px',
            },
            /* Handle */
            '&::-webkit-scrollbar-thumb': {
                WebkitBorderRadius: '10px',
                borderRadius: '10px',
                background: 'rgba(170,170,170,0.5)',
            },
        },
    })
);

export default useStyles;
