export const styles = theme => ({
    container: {
        display: 'flex',
        marginLeft: theme.spacing(7),
        marginRight: theme.spacing(7),
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5)
        // flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '60%',
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },
    icon: {
        margin: theme.spacing(1),
        fontSize: 32,
    },
    formControl: {
        margin: theme.spacing(2),
        width: '60%',
    },
    button: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        padding: '16px'
    },
    root: {
        width: "100%",
        marginTop: theme.spacing.unit * 3,
        overflowX: "auto"
    },
    head: {
        backgroundColor: "#fff",
        position: "sticky",
        top: 0
    },
    btnFeedback: {
        margin: theme.spacing(2),
        width: '200',
    },
    iconFeedback: {
        marginLeft: 5,
        marginBottom: 3
    },
    fieldDialog: {
        marginBottom: 10
    },
    footer: {
      marginTop: theme.spacing(6),
      padding: "10px",
      backgroundColor: "#e9e9e9",
      display: 'flex',
      justifyContent: "space-between",
      color: "#5f5f5f"
    },
    footerLeft: {
      // alignItems: 'flex-start'
    },
    footerRight: {
      // alignItems: 'flex-end'
    },
    loader: {
      position: 'fixed',
      top: 0
    }
});
