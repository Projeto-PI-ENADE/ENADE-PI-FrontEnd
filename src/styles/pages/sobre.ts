import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        descriptionContainer: {
            marginTop: '1rem',

            [theme.breakpoints.down('md')]: {
                marginTop: '1rem',
            },

            '& #cimatecLogo-container': {
                [theme.breakpoints.down('md')]: {
                    marginTop: '1rem',
                    display: 'flex',
                    justifyContent: 'center',
                    '& svg': {
                        width: '70%',
                        height: 'auto',
                    },
                },
            },

            '& #teamIllus-container svg': {
                width: '60%',
                height: 'auto',
            },
        },

        techsWrapper: {
            marginTop: '2rem',

            '& #techs-container': {
                marginTop: '1rem',
            },
        },

        teamContainer: {
            marginTop: '2rem',

            '& h2': {
                fontSize: '2rem',
                fontWeight: 600,

                [theme.breakpoints.down('md')]: {
                    fontSize: '1.2rem',
                },
            },
        },
    })
);

export default useStyles;
