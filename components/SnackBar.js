import React from "react";

const SnackBar = ({ type, status }) => {
    return (
        <div className="snackbar-wrapper">
            {
                type === "Success" && (
                    <div className={`snackbar snackbar--success${status ? ' snackbar--show' : ''}`}>
                        <h2>Cadastro feito com sucesso!</h2>
                    </div>
                )
            }
            {
                type === "Warning" && (
                    <div className={`snackbar snackbar--warning${status ? ' snackbar--show' : ''}`}>
                        <h2> Este Whatsapp já existe, por favor cadastre outro.</h2>
                    </div>
                )
            }
            {
                type === "Error" && (
                    <div className={`snackbar snackbar--error${status ? ' snackbar--show' : ''}`}>
                        <h2>Erro ao cadastrar, por favor tente novamente.</h2>
                    </div>
                )
            }
        </div>
    )
    
}

export default SnackBar