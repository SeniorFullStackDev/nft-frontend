import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyle = makeStyles(() =>
  createStyles({
    root: {

    },
    form: {
      '& > *': {
        margin: 8,
      },
    },
    formContent: {
      padding: 24,
    },
    dialogTitle: {
      textAlign: 'center',
    },
    createBtn: {
      width: 200,
    },
  }),
);
