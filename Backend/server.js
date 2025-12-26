import { server } from "./index.js";


const PORT=process.env.PORT;


server.listen(PORT,()=>{
    console.log(`Server is Started at PORT ${PORT}`);
    
})