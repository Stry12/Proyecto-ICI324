const crearUsuario = async (req,res) => {
    try {

        return 
        
    }catch(error){
        return res.status(500).json({
            status: false,
            error: "Problemas al crear el usuario",
            code: error
        })
    }
}